/**
 * Canonical service catalog for PRC 13 Roofing.
 * Single source for offered / not-offered services used by nav, footer,
 * LocalSeoLinks, schema OfferCatalog/knowsAbout, and llms.txt generation.
 *
 * Do not invent services. Update this file when real offerings change.
 */

export type ServiceCategory = 'roofing' | 'exterior' | 'commercial';

export interface ServiceDefinition {
  id: string;
  slug: string;
  name: string;
  shortName?: string;
  canonicalUrl: string;
  description: string;
  /** Name used in schema.org Service / knowsAbout entries */
  schemaName: string;
  offered: boolean;
  category: ServiceCategory;
  showInNav: boolean;
  showInFooter: boolean;
  showInLocalSeoLinks: boolean;
  showOnCityHubs: boolean;
  /** Optional note for not-offered or special cases */
  note?: string;
}

/**
 * Offered services (verified by existing site pages).
 * Gutters and Siding share `/gutters-siding` as one commercial page;
 * schema lists them as one combined offering to match that URL.
 */
export const SERVICES: ServiceDefinition[] = [
  {
    id: 'roof-replacement',
    slug: 'roof-replacement',
    name: 'Roof Replacement',
    canonicalUrl: '/roof-replacement',
    description:
      'Full roof tear-off and replacement for Sacramento-area homes, including shingle, tile, and metal options with clear written estimates.',
    schemaName: 'Roof replacement',
    offered: true,
    category: 'roofing',
    showInNav: true,
    showInFooter: true,
    showInLocalSeoLinks: true,
    showOnCityHubs: true,
  },
  {
    id: 'roof-repair',
    slug: 'roof-repair',
    name: 'Roof Repair',
    canonicalUrl: '/roof-repair',
    description:
      'Roof leak repair, storm damage, missing shingles, flashing failures, and other residential roof repairs.',
    schemaName: 'Roof repair',
    offered: true,
    category: 'roofing',
    showInNav: true,
    showInFooter: true,
    showInLocalSeoLinks: true,
    showOnCityHubs: true,
  },
  {
    id: 'emergency-roof-repair',
    slug: 'emergency-roof-repair',
    name: 'Emergency Roof Repair',
    canonicalUrl: '/emergency-roof-repair',
    description:
      'Urgent help for active leaks, storm openings, and temporary stabilization when water is entering the home.',
    schemaName: 'Emergency roof repair',
    offered: true,
    category: 'roofing',
    showInNav: true,
    showInFooter: true,
    showInLocalSeoLinks: true,
    showOnCityHubs: true,
  },
  {
    id: 'roof-inspection',
    slug: 'roof-inspection',
    name: 'Roof Inspection',
    shortName: 'Roof Inspections',
    canonicalUrl: '/roof-inspection',
    description:
      'Free roof inspections with clear findings for leaks, storm wear, aging materials, and repair-vs-replacement guidance.',
    schemaName: 'Roof inspection',
    offered: true,
    category: 'roofing',
    showInNav: true,
    showInFooter: true,
    showInLocalSeoLinks: true,
    showOnCityHubs: true,
  },
  {
    id: 'metal-roofing',
    slug: 'metal-roofing',
    name: 'Metal Roofing',
    canonicalUrl: '/metal-roofing',
    description:
      'Metal roof installation and replacement, including standing seam and other metal systems for Sacramento Valley conditions.',
    schemaName: 'Metal roofing',
    offered: true,
    category: 'roofing',
    showInNav: true,
    showInFooter: true,
    showInLocalSeoLinks: true,
    showOnCityHubs: true,
  },
  {
    id: 'commercial-roofing',
    slug: 'commercial-roofing',
    name: 'Commercial Roofing',
    canonicalUrl: '/commercial-roofing',
    description:
      'Commercial roof repair, replacement, and inspections for flat and low-slope systems including TPO, EPDM, and modified bitumen.',
    schemaName: 'Commercial roofing',
    offered: true,
    category: 'commercial',
    showInNav: true,
    showInFooter: true,
    showInLocalSeoLinks: true,
    showOnCityHubs: true,
  },
  {
    id: 'gutters-siding',
    slug: 'gutters-siding',
    name: 'Gutters & Siding',
    shortName: 'Gutters and siding',
    canonicalUrl: '/gutters-siding',
    description:
      'Gutter installation and replacement, gutter guards, and siding services for Sacramento-area homes. Does not include fascia or soffit repair.',
    schemaName: 'Gutters and siding',
    offered: true,
    category: 'exterior',
    showInNav: true,
    showInFooter: true,
    showInLocalSeoLinks: true,
    showOnCityHubs: true,
  },
];

/**
 * Verified non-services. Keep short—only facts needed to prevent contradictions.
 * Educational blog content may still discuss these topics.
 */
export const SERVICES_NOT_OFFERED: ServiceDefinition[] = [
  {
    id: 'fascia-repair',
    slug: 'fascia-repair',
    name: 'Fascia repair',
    canonicalUrl: '/blog/fascia-repair-sacramento',
    description:
      'Educational topic only. PRC 13 Roofing does not offer fascia repair.',
    schemaName: 'Fascia repair',
    offered: false,
    category: 'exterior',
    showInNav: false,
    showInFooter: false,
    showInLocalSeoLinks: false,
    showOnCityHubs: false,
    note: 'PRC 13 does not offer fascia or soffit repair.',
  },
  {
    id: 'soffit-repair',
    slug: 'soffit-repair',
    name: 'Soffit repair',
    canonicalUrl: '/gutters-siding',
    description:
      'PRC 13 Roofing does not offer soffit repair.',
    schemaName: 'Soffit repair',
    offered: false,
    category: 'exterior',
    showInNav: false,
    showInFooter: false,
    showInLocalSeoLinks: false,
    showOnCityHubs: false,
    note: 'PRC 13 does not offer fascia or soffit repair.',
  },
];

export const ALL_SERVICE_DEFINITIONS: ServiceDefinition[] = [
  ...SERVICES,
  ...SERVICES_NOT_OFFERED,
];

export function getOfferedServices(): ServiceDefinition[] {
  return SERVICES.filter(service => service.offered);
}

export function getNavServices(): ServiceDefinition[] {
  return SERVICES.filter(service => service.offered && service.showInNav);
}

export function getFooterServices(): ServiceDefinition[] {
  return SERVICES.filter(service => service.offered && service.showInFooter);
}

export function getLocalSeoLinkServices(): ServiceDefinition[] {
  return SERVICES.filter(service => service.offered && service.showInLocalSeoLinks);
}

export function getCityHubServices(): ServiceDefinition[] {
  return SERVICES.filter(service => service.offered && service.showOnCityHubs);
}

export function getServiceById(id: string): ServiceDefinition | undefined {
  return ALL_SERVICE_DEFINITIONS.find(service => service.id === id);
}

export function getServiceByUrl(url: string): ServiceDefinition | undefined {
  const normalized = url.replace(/\/+$/, '') || '/';
  return SERVICES.find(service => service.canonicalUrl === normalized);
}

/** schema.org knowsAbout / OfferCatalog labels for offered services only */
export function getOfferedSchemaNames(): string[] {
  return getOfferedServices().map(service => service.schemaName);
}

export function isServiceOffered(id: string): boolean {
  const service = getServiceById(id);
  return Boolean(service?.offered);
}
