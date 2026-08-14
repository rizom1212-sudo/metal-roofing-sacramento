/**
 * Phase 4 URL policy for Metal Roofing Sacramento.
 * Source of truth for keep / consolidate / retire decisions.
 */

export const CORE_METAL_PATHS = [
  '/',
  '/metal-roofing',
  '/metal-roof-installation',
  '/metal-roof-replacement',
  '/metal-roof-repair',
  '/standing-seam-metal-roofing',
  '/residential-metal-roofing',
  '/commercial-metal-roofing',
  '/metal-roof-inspection',
] as const;

/** 301 only where intent maps naturally onto a metal money page. */
export const CONSOLIDATED_REDIRECTS: { source: string; destination: string; reason: string }[] = [
  {
    source: '/roof-replacement',
    destination: '/metal-roof-replacement',
    reason: 'Generic replacement on this specialist domain maps to metal replacement.',
  },
  {
    source: '/roof-repair',
    destination: '/metal-roof-repair',
    reason: 'Generic repair on this specialist domain maps to metal repair.',
  },
  {
    source: '/roof-inspection',
    destination: '/metal-roof-inspection',
    reason: 'Inspection intent on this specialist domain maps to metal inspection.',
  },
  {
    source: '/roof-replacement-sacramento',
    destination: '/metal-roof-replacement',
    reason: 'Avoid a chain through the retired generic replacement URL.',
  },
  {
    source: '/roof-repair-sacramento',
    destination: '/metal-roof-repair',
    reason: 'Avoid a chain through the retired generic repair URL.',
  },
  {
    source: '/roof-inspection-sacramento',
    destination: '/metal-roof-inspection',
    reason: 'Avoid a chain through the retired generic inspection URL.',
  },
  {
    source: '/Roofing-Contractor/Roof-Inspection-Assessment',
    destination: '/metal-roof-inspection',
    reason: 'Inspection-assessment legacy GSC URL maps to metal inspection.',
  },
  {
    source: '/roofing-contractor/roof-inspection-assessment',
    destination: '/metal-roof-inspection',
    reason: 'Inspection-assessment legacy GSC URL maps to metal inspection.',
  },
  {
    source: '/Roofing-Contractor/Roof-Maintenance',
    destination: '/metal-roof-inspection',
    reason: 'Maintenance/assessment legacy URL maps to metal inspection, not a fabricated maintenance service.',
  },
  {
    source: '/roofing-contractor/roof-maintenance',
    destination: '/metal-roof-inspection',
    reason: 'Maintenance/assessment legacy URL maps to metal inspection.',
  },
  {
    source: '/blog/roof-repair-vs-roof-replacement',
    destination: '/blog/metal-roof-repair-vs-replacement',
    reason: 'Same decision intent; metal-specific article already exists.',
  },
];

/**
 * Retired from the specialist architecture. No redirect: these are cloned PRC
 * pages whose intent is not metal roofing (TPO, gutters/siding, 24/7 emergency,
 * asphalt/tile city×service, fascia/tile/TPO blogs).
 */
export const RETIRED_PATHS = [
  '/commercial-roofing',
  '/gutters-siding',
  '/emergency-roof-repair',
  '/emergency-roof-repair/granite-bay',
  '/emergency-roof-repair/orangevale',
  '/emergency-roof-repair/folsom',
  '/roof-repair/granite-bay',
  '/roof-replacement/rocklin',
] as const;

export const RETIRED_BLOG_SLUGS = [
  'gutter-installation-sacramento',
  'gutter-replacement-cost-sacramento',
  'gutter-guards-sacramento',
  'fascia-repair-sacramento',
  'gutters-and-roof-leaks-sacramento',
  'tile-roof-repair-sacramento',
  'missing-shingle-repair-sacramento',
  'tile-vs-asphalt-shingles-folsom',
  'tile-roofing-el-dorado-hills-ca',
  'fascia-repair-el-dorado-hills-ca',
  'tpo-vs-epdm-commercial-roofing',
  'emergency-roof-tarp-guide',
  'emergency-roof-repair-cost',
  'when-to-call-emergency-roofer',
  'emergency-roof-repair-sacramento-guide',
  'does-insurance-cover-emergency-roof-repairs',
  'emergency-roof-repair-el-dorado-hills-ca',
  'roof-repair-vs-roof-replacement',
  'roof-leak-at-night',
  'can-roof-be-repaired-during-rain',
  'signs-roof-needs-immediate-repair',
  'is-a-roof-leak-an-emergency',
  'how-quickly-should-storm-damage-be-inspected',
] as const;

export const RETIRED_BLOG_PATHS = RETIRED_BLOG_SLUGS.map(slug => `/blog/${slug}`);

/** Inherited PRC redirects that must 404 instead of landing on metal pages. */
export const REMOVED_INHERITED_REDIRECT_SOURCES = [
  '/emergency-roof-repair-sacramento',
  '/Roofing-Contractor/Emergency-Roof-Repair',
  '/roofing-contractor/emergency-roof-repair',
  '/Roofing-Contractor/Flat-Roof-Installation',
  '/roofing-contractor/flat-roof-installation',
  '/roofing-contractor/asphalt-shingle-roof-replacement',
  '/Siding-Contractor',
  '/siding-contractor',
  '/Siding-Contractor/Fiber-Cement-Siding-Installation',
  '/Siding-Contractor/Vinyl-Siding-Repair',
  '/Siding-Contractor/Wood-Siding-Installation',
  '/Siding-Contractor/Siding-Inspection-Assessment',
  '/siding-contractor/vinyl-siding-installation',
] as const;

export const PATH_REWRITES: Record<string, string> = {
  '/roof-replacement': '/metal-roof-replacement',
  '/roof-repair': '/metal-roof-repair',
  '/roof-inspection': '/metal-roof-inspection',
  '/commercial-roofing': '/commercial-metal-roofing',
  '/roof-replacement/rocklin': '/service-areas/rocklin',
  '/roof-repair/granite-bay': '/service-areas/granite-bay',
  '/emergency-roof-repair/granite-bay': '/service-areas/granite-bay',
  '/emergency-roof-repair/orangevale': '/service-areas/orangevale',
  '/emergency-roof-repair/folsom': '/service-areas/folsom',
  '/blog/roof-repair-vs-roof-replacement': '/blog/metal-roof-repair-vs-replacement',
  '/blog/tile-roof-repair-sacramento': '/blog/metal-roof-repair-vs-replacement',
  '/blog/missing-shingle-repair-sacramento': '/blog/metal-roof-repair-vs-replacement',
  '/blog/tpo-vs-epdm-commercial-roofing': '/blog/commercial-roof-replacement-sacramento',
  '/blog/gutters-and-roof-leaks-sacramento': '/blog/roof-leak-repair-sacramento',
  '/blog/tile-vs-asphalt-shingles-folsom': '/blog/best-roofing-materials-folsom',
  '/blog/tile-roofing-el-dorado-hills-ca': '/blog/metal-roofing-el-dorado-hills-ca',
  '/blog/fascia-repair-el-dorado-hills-ca': '/blog/metal-roofing-el-dorado-hills-ca',
  '/blog/emergency-roof-tarp-guide': '/blog/what-to-do-roof-leak-sacramento-storm',
  '/blog/emergency-roof-repair-cost': '/blog/roof-leak-repair-sacramento',
  '/blog/when-to-call-emergency-roofer': '/blog/who-to-call-when-roof-is-leaking',
  '/blog/emergency-roof-repair-sacramento-guide': '/blog/what-to-do-roof-leak-sacramento-storm',
  '/blog/does-insurance-cover-emergency-roof-repairs': '/blog/how-insurance-claims-work-for-roof-damage',
  '/blog/emergency-roof-repair-el-dorado-hills-ca': '/blog/roof-repair-el-dorado-hills-ca',
};

const RETIRED_HREF_SET = new Set<string>([...RETIRED_PATHS, ...RETIRED_BLOG_PATHS]);

export function isRetiredPublicPath(href: string): boolean {
  const normalized = (href.split('#')[0] || '').replace(/\/+$/, '') || '/';
  return RETIRED_HREF_SET.has(normalized);
}

export function rewriteRetiredPath(href: string): string {
  const [path, hash] = href.split('#');
  const normalized = path.replace(/\/+$/, '') || '/';
  const next = PATH_REWRITES[normalized];
  if (!next) return href;
  return hash ? `${next}#${hash}` : next;
}
