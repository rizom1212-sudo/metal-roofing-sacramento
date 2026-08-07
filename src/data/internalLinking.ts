/**
 * Curated supporting-article limits for service hubs.
 * Prefer a useful set over dumping an entire blog cluster.
 */
export const SERVICE_HUB_RESOURCE_LIMIT = 6;

/** High-intent emergency guides surfaced on /emergency-roof-repair */
export const EMERGENCY_HUB_RESOURCE_SLUGS = [
  'what-to-do-roof-leak-sacramento-storm',
  'roof-leak-repair-sacramento',
  'emergency-roof-tarp-guide',
  'storm-damage-roof-repair-sacramento',
  'when-to-call-emergency-roofer',
  'emergency-roof-repair-cost',
] as const;

/** Priority cities for LocalSeoLinks (descriptive subset, not all 13 every time). */
export const LOCAL_SEO_PRIORITY_CITY_SLUGS = [
  'sacramento',
  'folsom',
  'roseville',
  'rocklin',
  'elk-grove',
  'granite-bay',
  'orangevale',
  'el-dorado-hills',
] as const;
