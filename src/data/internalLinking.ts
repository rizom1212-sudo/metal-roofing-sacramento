/**
 * Curated supporting-article limits for service hubs.
 * Prefer a useful set over dumping an entire blog cluster.
 */
export const SERVICE_HUB_RESOURCE_LIMIT = 6;

/** High-intent storm/leak guides that remain after emergency-page retirement */
export const EMERGENCY_HUB_RESOURCE_SLUGS = [
  'what-to-do-roof-leak-sacramento-storm',
  'hail-damage-roof-repair',
  'how-insurance-claims-work-for-roof-damage',
] as const;

/** Priority cities for LocalSeoLinks (descriptive subset, not all cities every time). */
export const LOCAL_SEO_PRIORITY_CITY_SLUGS = [
  'sacramento',
  'folsom',
  'el-dorado-hills',
  'colfax',
  'roseville',
  'rocklin',
  'granite-bay',
  'orangevale',
] as const;

/** Compact footer city list. Full footprint remains on /service-areas. */
export const FOOTER_PRIORITY_CITY_SLUGS = [
  'sacramento',
  'folsom',
  'el-dorado-hills',
  'roseville',
  'rocklin',
  'colfax',
] as const;
