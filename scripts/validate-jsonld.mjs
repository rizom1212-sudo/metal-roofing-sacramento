import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

const BUSINESS_ID = 'https://www.metalroofingsacramento.com/#business';
const WEBSITE_ID = 'https://www.metalroofingsacramento.com/#website';
const BRAND_ID = 'https://www.metalroofingsacramento.com/#brand';
const OPERATOR_NAME = 'PRC 13 Roofing Inc.';
const BRAND_NAME = 'Metal Roofing Sacramento';
const FORBIDDEN_OFFER_NAMES = [/fascia/i, /soffit/i];

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

function hasProviderRef(provider) {
  if (!provider || typeof provider !== 'object') return false;
  if (provider['@id'] === BUSINESS_ID) return true;
  if (provider['@type'] && provider['@id']) return true;
  return Boolean(provider['@type']);
}

function validateNode(node, issues, prefix, graphCtx) {
  const type = node['@type'];
  if (type === 'RoofingContractor' || type === 'LocalBusiness') {
    if (node['@id'] && node['@id'] !== BUSINESS_ID) {
      issues.push(`${prefix}: unexpected business @id ${node['@id']}`);
    }
    if (node.address) {
      issues.push(`${prefix}: must not invent PostalAddress (service-area business)`);
    }
    if (node.name && node.name !== OPERATOR_NAME) {
      issues.push(`${prefix}: RoofingContractor.name must be ${OPERATOR_NAME}`);
    }
    if (node.brand?.['@id'] && node.brand['@id'] !== BRAND_ID) {
      issues.push(`${prefix}: RoofingContractor.brand must reference ${BRAND_ID}`);
    }
    if (!node.identifier) {
      issues.push(`${prefix}: missing license identifier`);
    }
    if (!node.logo) {
      issues.push(`${prefix}: missing logo`);
    }
    if (!node.description) {
      issues.push(`${prefix}: missing description`);
    }
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
    if (Array.isArray(catalog?.itemListElement)) {
      for (const offer of catalog.itemListElement) {
        const name = offer?.itemOffered?.name ?? '';
        if (FORBIDDEN_OFFER_NAMES.some(re => re.test(name))) {
          issues.push(`${prefix}: OfferCatalog must not include fascia/soffit (${name})`);
        }
      }
      graphCtx.offerCount = catalog.itemListElement.length;
    }
  }
  if (type === 'WebSite') {
    if (node['@id'] !== WEBSITE_ID) {
      issues.push(`${prefix}: WebSite @id must be ${WEBSITE_ID}`);
    }
    if (node.potentialAction) {
      issues.push(`${prefix}: SearchAction must not be present without site search`);
    }
    if (node.name && node.name !== BRAND_NAME) {
      issues.push(`${prefix}: WebSite.name must be ${BRAND_NAME}`);
    }
    const publisherId = node.publisher?.['@id'];
    if (publisherId && publisherId !== BUSINESS_ID) {
      issues.push(`${prefix}: WebSite.publisher must reference business`);
    }
  }
  if (type === 'Brand') {
    if (node['@id'] !== BRAND_ID) {
      issues.push(`${prefix}: Brand @id must be ${BRAND_ID}`);
    }
    if (node.name && node.name !== BRAND_NAME) {
      issues.push(`${prefix}: Brand.name must be ${BRAND_NAME}`);
    }
  }
  if (type === 'WebPage' || type === 'ContactPage') {
    const partOf = node.isPartOf?.['@id'];
    if (partOf && partOf !== WEBSITE_ID) {
      issues.push(`${prefix}: isPartOf should reference ${WEBSITE_ID}`);
    }
  }
  if (type === 'Service') {
    if (!hasProviderRef(node.provider)) {
      issues.push(`${prefix}: Service.provider must reference the business entity`);
    }
    const area = node.areaServed;
    if (area == null) {
      issues.push(`${prefix}: Service.areaServed is required`);
    }
  }
  if (type === 'BlogPosting') {
    if (node.publisher?.['@id'] && node.publisher['@id'] !== BUSINESS_ID) {
      issues.push(`${prefix}: BlogPosting.publisher should reference business`);
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
    const graphCtx = {};
    const types = new Set(data['@graph'].map(n => n['@type']));
    if (types.has('RoofingContractor') && !types.has('WebSite')) {
      issues.push('graph includes RoofingContractor but missing WebSite');
    }
    const businesses = data['@graph'].filter(n => n['@type'] === 'RoofingContractor' || n['@type'] === 'LocalBusiness');
    if (businesses.length > 1) {
      issues.push(`expected at most one business entity, found ${businesses.length}`);
    }
    data['@graph'].forEach((node, index) => validateNode(node, issues, `node ${index + 1} (${node['@type']})`, graphCtx));
  }
  return issues;
}

function legacyRedirectTarget(urlPath) {
  const normalized = urlPath.replace(/\/+$/, '').toLowerCase();
  const map = {
    '/roofing-contractor/roof-inspection-assessment': '/metal-roof-inspection',
    '/roofing-contractor/roof-maintenance': '/metal-roof-inspection',
    '/roofing-contractor': '/',
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

const INTENTIONALLY_RETIRED_LEGACY = new Set([
  '/roofing-contractor/asphalt-shingle-roof-replacement',
  '/roofing-contractor/flat-roof-installation',
  '/roofing-contractor/emergency-roof-repair',
  '/siding-contractor',
  '/siding-contractor/fiber-cement-siding-installation',
  '/siding-contractor/vinyl-siding-repair',
  '/siding-contractor/vinyl-siding-installation',
  '/siding-contractor/wood-siding-installation',
  '/siding-contractor/siding-inspection-assessment',
]);

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
    const normalized = legacyUrl.replace(/\/+$/, '').toLowerCase();
    if (INTENTIONALLY_RETIRED_LEGACY.has(normalized)) continue;
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
