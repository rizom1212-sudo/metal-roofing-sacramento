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
  {
    source: '/blog/free-roof-inspection-sacramento',
    destination: '/metal-roof-inspection',
    reason: 'Same hire: free residential metal inspection.',
  },
  {
    source: '/blog/roof-inspection-cost-sacramento',
    destination: '/metal-roof-inspection',
    reason: 'Inspection cost is answered on the metal inspection hire page.',
  },
  {
    source: '/blog/what-happens-during-roof-inspection',
    destination: '/metal-roof-inspection',
    reason: 'Same job: what a professional metal inspection includes.',
  },
  {
    source: '/blog/signs-you-need-roof-inspection',
    destination: '/metal-roof-inspection',
    reason: 'Inspection-need intent maps to the metal inspection hire page.',
  },
  {
    source: '/blog/roof-inspection-after-storm',
    destination: '/metal-roof-inspection',
    reason: 'Post-storm inspection is still an inspection hire, not leak first-aid.',
  },
  {
    source: '/blog/how-often-should-you-inspect-your-roof',
    destination: '/blog/sacramento-roof-maintenance-checklist',
    reason: 'Owner inspection cadence belongs on the metal maintenance checklist.',
  },
  {
    source: '/blog/insurance-roof-inspection-sacramento',
    destination: '/blog/how-insurance-claims-work-for-roof-damage',
    reason: 'Insurance-framed inspection is a step in the metal claim article.',
  },
  {
    source: '/blog/roof-replacement-insurance-sacramento',
    destination: '/blog/how-insurance-claims-work-for-roof-damage',
    reason: 'Insurance-funded replacement is the same claim process.',
  },
  {
    source: '/blog/roof-insurance-claims-storm-damage',
    destination: '/blog/how-insurance-claims-work-for-roof-damage',
    reason: 'Same metal roof claim-process query.',
  },
  {
    source: '/blog/roof-insurance-claims-el-dorado-hills',
    destination: '/blog/how-insurance-claims-work-for-roof-damage',
    reason: 'Same claim process; city is a modifier.',
  },
  {
    source: '/blog/roof-replacement-cost-sacramento',
    destination: '/blog/metal-roofing-cost-sacramento',
    reason: 'Replacement cost on this specialist site is metal roofing cost.',
  },
  {
    source: '/blog/roof-replacement-process-sacramento',
    destination: '/metal-roof-replacement',
    reason: 'Replacement process maps to the metal replacement hire page.',
  },
  {
    source: '/blog/signs-you-need-roof-replacement-sacramento',
    destination: '/blog/metal-roof-repair-vs-replacement',
    reason: 'Same repair-versus-replacement decision.',
  },
  {
    source: '/blog/roof-leak-repair-sacramento',
    destination: '/metal-roof-repair',
    reason: 'Same hire: metal leak repair.',
  },
  {
    source: '/blog/storm-damage-roof-repair-sacramento',
    destination: '/metal-roof-repair',
    reason: 'Storm-damaged metal maps to metal roof repair.',
  },
  {
    source: '/blog/wind-damage-roof-repair',
    destination: '/metal-roof-repair',
    reason: 'Wind-failed metal edges and flashings map to metal roof repair.',
  },
  {
    source: '/blog/roof-flashing-repair-sacramento',
    destination: '/metal-roof-repair',
    reason: 'Flashing is a primary metal-repair offering.',
  },
];

export const CONSOLIDATED_BLOG_SLUGS = CONSOLIDATED_REDIRECTS
  .filter(rule => rule.source.startsWith('/blog/'))
  .map(rule => rule.source.replace('/blog/', ''));

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

/** P1 blogs whose intent does not safely 301. Served as HTTP 410. */
export const GONE_BLOG_SLUGS = [
  'roof-inspection-checklist',
  'roofing-materials-replacement-sacramento',
  'how-long-does-roof-replacement-take',
  'best-time-to-replace-roof-sacramento',
  'roof-replacement-for-older-homes',
  'roof-repair-cost-sacramento',
  'chimney-flashing-repair-sacramento',
  'skylight-leak-repair-sacramento',
  'common-causes-of-roof-leaks',
  'what-causes-roof-flashing-to-fail',
  'roof-repair-folsom-ca',
  'roof-replacement-folsom-ca',
  'roof-inspection-folsom-ca',
  'roof-leak-repair-folsom-ca',
  'storm-damage-roof-repair-folsom',
  'best-roofing-materials-folsom',
  'roofing-costs-folsom-ca',
  'roof-repair-el-dorado-hills-ca',
  'roof-replacement-el-dorado-hills-ca',
  'roof-inspection-el-dorado-hills-ca',
  'commercial-roof-inspection-sacramento',
  'commercial-roof-replacement-sacramento',
  'commercial-roof-repair-sacramento',
  'commercial-roof-maintenance-sacramento',
  'commercial-roof-leak-repair-sacramento',
  'roof-replacement-financing-sacramento',
  'who-to-call-when-roof-is-leaking',
] as const;

export const GONE_BLOG_PATHS = GONE_BLOG_SLUGS.map(slug => `/blog/${slug}`);

/** Extra legacy file URL that previously 301ed onto a now-410 checklist. */
export const GONE_LEGACY_PATHS = ['/roof-inspection-checklist.html'] as const;

export const GONE_PUBLIC_PATHS = [...GONE_BLOG_PATHS, ...GONE_LEGACY_PATHS] as const;

export function isUnpublishedBlogSlug(slug: string): boolean {
  return (
    (RETIRED_BLOG_SLUGS as readonly string[]).includes(slug) ||
    (GONE_BLOG_SLUGS as readonly string[]).includes(slug) ||
    CONSOLIDATED_BLOG_SLUGS.includes(slug)
  );
}

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

/**
 * Internal-link rewrites. Only the same specialist mappings that already 301
 * in CONSOLIDATED_REDIRECTS / vercel.json. Retired commercial, emergency,
 * city×service, gutter, tile, TPO, and shingle URLs are not rewritten to metal
 * pages — rewritePublicLinks strips those hrefs instead.
 */
export const PATH_REWRITES: Record<string, string> = Object.fromEntries(
  CONSOLIDATED_REDIRECTS.map(({ source, destination }) => [source, destination]),
);

const RETIRED_HREF_SET = new Set<string>([
  ...RETIRED_PATHS,
  ...RETIRED_BLOG_PATHS,
  ...GONE_BLOG_PATHS,
  ...GONE_LEGACY_PATHS,
]);

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
