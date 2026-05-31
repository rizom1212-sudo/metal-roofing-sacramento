import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

const GSC_LEGACY_URLS = [
  '/roofing-contractor/asphalt-shingle-roof-replacement',
  '/Roofing-Contractor/Flat-Roof-Installation',
  '/Roofing-Contractor/Roof-Inspection-Assessment',
  '/Siding-Contractor',
  '/Siding-Contractor/Fiber-Cement-Siding-Installation',
  '/Siding-Contractor/Vinyl-Siding-Repair',
  '/Siding-Contractor/Wood-Siding-Installation',
  '/Roofing-Contractor/Roof-Maintenance',
  '/Roofing-Contractor',
  '/siding-contractor/vinyl-siding-installation',
  '/Siding-Contractor/Siding-Inspection-Assessment',
  '/Roofing-Contractor/Emergency-Roof-Repair',
  '/Woodland',
  '/Rancho-Cordova',
  '/Grass-Valley',
  '/Orangevale',
  '/Sacramento',
  '/Granite-Bay',
  '/El-Dorado-Hill',
  '/gallery',
  '/Davis',
  '/contact',
];

function validateNode(node, issues, prefix) {
  const type = node['@type'];
  if (type === 'RoofingContractor' || type === 'LocalBusiness') {
    const rating = node.aggregateRating;
    if (rating) {
      if (typeof rating.ratingValue === 'string') {
        issues.push(`${prefix}: aggregateRating.ratingValue must be a number`);
      }
      if (rating.reviewCount != null && typeof rating.reviewCount !== 'number') {
        issues.push(`${prefix}: aggregateRating.reviewCount must be a number`);
      }
    }
    for (const field of ['contactPoint', 'openingHoursSpecification', 'sameAs']) {
      const value = node[field];
      if (value == null) continue;
      if (!Array.isArray(value)) {
        issues.push(`${prefix}: ${field} should be an array`);
      }
    }
    const areaServed = node.areaServed;
    if (areaServed != null && typeof areaServed !== 'object') {
      issues.push(`${prefix}: areaServed has invalid type`);
    }
    const catalog = node.hasOfferCatalog;
    if (catalog?.itemListElement && !Array.isArray(catalog.itemListElement)) {
      issues.push(`${prefix}: hasOfferCatalog.itemListElement must be an array`);
    }
  }
  if (type === 'Service') {
    const provider = node.provider;
    if (!provider || typeof provider !== 'object' || !provider['@type']) {
      issues.push(`${prefix}: Service.provider must be an object with @type`);
    }
    const area = node.areaServed;
    if (area == null) {
      issues.push(`${prefix}: Service.areaServed is required`);
    }
  }
  if (type === 'BreadcrumbList') {
    if (!Array.isArray(node.itemListElement)) {
      issues.push(`${prefix}: BreadcrumbList.itemListElement must be an array`);
    }
  }
  if (type === 'FAQPage') {
    if (!Array.isArray(node.mainEntity)) {
      issues.push(`${prefix}: FAQPage.mainEntity must be an array`);
    }
  }
}

async function validateHtmlFile(filePath) {
  const html = await fs.readFile(filePath, 'utf8');
  const issues = [];
  const matches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  if (!matches.length) {
    issues.push('missing application/ld+json script');
    return issues;
  }
  if (matches.length > 1) {
    issues.push(`expected 1 JSON-LD block, found ${matches.length}`);
  }
  for (const match of matches) {
    const raw = match[1].trim();
    if (/<\/script/i.test(raw)) {
      issues.push('raw JSON-LD contains unescaped </script>');
    }
    let data;
    try {
      data = JSON.parse(raw);
    } catch (error) {
      issues.push(`JSON parse error: ${error.message}`);
      continue;
    }
    if (!Array.isArray(data['@graph'])) {
      issues.push('@graph must be an array');
      continue;
    }
    data['@graph'].forEach((node, index) => validateNode(node, issues, `node ${index + 1} (${node['@type']})`));
  }
  return issues;
}

function legacyRedirectTarget(urlPath) {
  const normalized = urlPath.replace(/\/+$/, '').toLowerCase();
  const map = {
    '/roofing-contractor/asphalt-shingle-roof-replacement': '/roof-replacement',
    '/roofing-contractor/flat-roof-installation': '/commercial-roofing',
    '/roofing-contractor/roof-inspection-assessment': '/roof-inspection',
    '/roofing-contractor/roof-maintenance': '/roof-inspection',
    '/roofing-contractor/emergency-roof-repair': '/emergency-roof-repair',
    '/roofing-contractor': '/',
    '/siding-contractor': '/gutters-siding',
    '/siding-contractor/fiber-cement-siding-installation': '/gutters-siding',
    '/siding-contractor/vinyl-siding-repair': '/gutters-siding',
    '/siding-contractor/vinyl-siding-installation': '/gutters-siding',
    '/siding-contractor/wood-siding-installation': '/gutters-siding',
    '/siding-contractor/siding-inspection-assessment': '/gutters-siding',
    '/woodland': '/service-areas/woodland',
    '/rancho-cordova': '/service-areas/rancho-cordova',
    '/grass-valley': '/service-areas',
    '/orangevale': '/service-areas/orangevale',
    '/sacramento': '/service-areas/sacramento',
    '/granite-bay': '/service-areas/granite-bay',
    '/el-dorado-hill': '/service-areas/el-dorado-hills',
    '/davis': '/service-areas/davis',
    '/gallery': '/gallery',
    '/contact': '/contact',
  };
  return map[normalized] ?? null;
}

async function main() {
  const htmlFiles = (await fs.readdir(dist, { recursive: true }))
    .filter(name => name.endsWith('index.html'))
    .map(name => path.join(dist, name));

  let failed = 0;
  for (const filePath of htmlFiles) {
    const issues = await validateHtmlFile(filePath);
    if (issues.length) {
      failed += 1;
      console.error(`FAIL ${path.relative(root, filePath)}`);
      issues.forEach(issue => console.error(`  - ${issue}`));
    }
  }

  const legacyMissing = [];
  for (const legacyUrl of GSC_LEGACY_URLS) {
    const target = legacyRedirectTarget(legacyUrl);
    if (!target) {
      legacyMissing.push(legacyUrl);
      continue;
    }
    const resolved = target === '/' ? path.join(dist, 'index.html') : path.join(dist, target.replace(/^\//, ''), 'index.html');
    try {
      await fs.access(resolved);
    } catch {
      legacyMissing.push(`${legacyUrl} -> ${target}`);
    }
  }

  if (legacyMissing.length) {
    console.error('Legacy redirect targets missing prerendered HTML:');
    legacyMissing.forEach(item => console.error(`  - ${item}`));
    failed += 1;
  }

  if (failed) {
    process.exit(1);
  }

  console.log(`Validated JSON-LD on ${htmlFiles.length} prerendered pages.`);
  console.log(`Mapped ${GSC_LEGACY_URLS.length} legacy GSC URLs to current routes.`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
