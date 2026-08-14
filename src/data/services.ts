/**
 * Canonical service catalog for Metal Roofing Sacramento.
 * Offered services are metal-first specialist offerings operated by PRC 13 Roofing Inc.
 *
 * Historical non-metal routes were consolidated or retired in Phase 4.
 */

export type ServiceCategory = 'metal' | 'roofing' | 'exterior' | 'commercial';

export interface ServiceDefinition {
  id: string;
  slug: string;
  name: string;
  shortName?: string;
  canonicalUrl: string;
  /** Optional in-page href for nav/footer before dedicated URLs exist. */
  navHref?: string;
  /** Unique JSON-LD Service @id fragment when several offerings share a page. */
  schemaIdSuffix?: string;
  /** True for the service that owns schema `#service` on canonicalUrl. */
  isCatalogHub?: boolean;
  description: string;
  /** Name used in schema.org Service / knowsAbout entries */
  schemaName: string;
  offered: boolean;
  category: ServiceCategory;
  showInNav: boolean;
  /** Dedicated money pages shown in the Services dropdown. */
  showInServicesMenu: boolean;
  showInFooter: boolean;
  showInLocalSeoLinks: boolean;
  showOnCityHubs: boolean;
  /** Optional note for not-offered or special cases */
  note?: string;
}

/**
 * Metal-first offerings. Each primary service has a dedicated canonical URL.
 */
export const SERVICES: ServiceDefinition[] = [
  {
    id: 'metal-roofing',
    slug: 'metal-roofing',
    name: 'Metal Roofing',
    canonicalUrl: '/metal-roofing',
    isCatalogHub: true,
    description:
      'Metal roofing services in Sacramento, including installation, replacement, repair, standing seam systems, residential and commercial metal roofs, and metal roof inspections.',
    schemaName: 'Metal roofing',
    offered: true,
    category: 'metal',
    showInNav: true,
    showInServicesMenu: false,
    showInFooter: true,
    showInLocalSeoLinks: true,
    showOnCityHubs: true,
  },
  {
    id: 'metal-roof-installation',
    slug: 'metal-roof-installation',
    name: 'Metal Roof Installation',
    shortName: 'Installation',
    canonicalUrl: '/metal-roof-installation',
    description:
      'New metal roof installation in Sacramento, including standing seam, corrugated, and ribbed systems with underlayment, flashing, ventilation, and panel installation.',
    schemaName: 'Metal roof installation',
    offered: true,
    category: 'metal',
    showInNav: false,
    showInServicesMenu: true,
    showInFooter: true,
    showInLocalSeoLinks: true,
    showOnCityHubs: false,
  },
  {
    id: 'metal-roof-replacement',
    slug: 'metal-roof-replacement',
    name: 'Metal Roof Replacement',
    shortName: 'Replacement',
    canonicalUrl: '/metal-roof-replacement',
    description:
      'Metal roof replacement in Sacramento, including tear-off, deck inspection, and replacing aging shingles, tile, or failing metal with a long-life metal roof system.',
    schemaName: 'Metal roof replacement',
    offered: true,
    category: 'metal',
    showInNav: false,
    showInServicesMenu: true,
    showInFooter: true,
    showInLocalSeoLinks: true,
    showOnCityHubs: false,
  },
  {
    id: 'metal-roof-repair',
    slug: 'metal-roof-repair',
    name: 'Metal Roof Repair',
    shortName: 'Repair',
    canonicalUrl: '/metal-roof-repair',
    description:
      'Metal roof repair in Sacramento for leaking seams, flashing failures, damaged panels, loose fasteners, penetrations, and storm-related metal roof damage.',
    schemaName: 'Metal roof repair',
    offered: true,
    category: 'metal',
    showInNav: false,
    showInServicesMenu: true,
    showInFooter: true,
    showInLocalSeoLinks: true,
    showOnCityHubs: false,
  },
  {
    id: 'standing-seam-metal-roofing',
    slug: 'standing-seam-metal-roofing',
    name: 'Standing Seam Metal Roofing',
    shortName: 'Standing Seam',
    canonicalUrl: '/standing-seam-metal-roofing',
    description:
      'Standing seam metal roofing in Sacramento with concealed fasteners, raised seams, and a clean panel profile for residential and commercial buildings.',
    schemaName: 'Standing seam metal roofing',
    offered: true,
    category: 'metal',
    showInNav: false,
    showInServicesMenu: true,
    showInFooter: true,
    showInLocalSeoLinks: true,
    showOnCityHubs: false,
  },
  {
    id: 'residential-metal-roofing',
    slug: 'residential-metal-roofing',
    name: 'Residential Metal Roofing',
    shortName: 'Residential',
    canonicalUrl: '/residential-metal-roofing',
    description:
      'Residential metal roofing for Sacramento-area homes, including standing seam and other metal profiles chosen for architecture, climate, and long-term ownership.',
    schemaName: 'Residential metal roofing',
    offered: true,
    category: 'metal',
    showInNav: false,
    showInServicesMenu: true,
    showInFooter: true,
    showInLocalSeoLinks: true,
    showOnCityHubs: false,
  },
  {
    id: 'commercial-metal-roofing',
    slug: 'commercial-metal-roofing',
    name: 'Commercial Metal Roofing',
    shortName: 'Commercial',
    canonicalUrl: '/commercial-metal-roofing',
    description:
      'Commercial metal roofing for Sacramento-area buildings where metal systems are the right fit, including metal installation, reroofing, repair, and inspection. Flat TPO/EPDM work is not the focus of this service.',
    schemaName: 'Commercial metal roofing',
    offered: true,
    category: 'metal',
    showInNav: false,
    showInServicesMenu: true,
    showInFooter: true,
    showInLocalSeoLinks: true,
    showOnCityHubs: false,
  },
  {
    id: 'metal-roof-inspection',
    slug: 'metal-roof-inspection',
    name: 'Metal Roof Inspection',
    shortName: 'Inspection',
    canonicalUrl: '/metal-roof-inspection',
    description:
      'Metal roof inspections in Sacramento covering leaks, panels, fasteners, seams, flashing, penetrations, drainage, and repair-versus-replacement guidance.',
    schemaName: 'Metal roof inspection',
    offered: true,
    category: 'metal',
    showInNav: false,
    showInServicesMenu: true,
    showInFooter: true,
    showInLocalSeoLinks: true,
    showOnCityHubs: false,
  },
];

/**
 * Cloned PRC 13 generic service URLs. Consolidated or retired in Phase 4 —
 * not published on this specialist site.
 */
export const HISTORICAL_SERVICE_ROUTES = [
  '/roof-replacement',
  '/roof-repair',
  '/emergency-roof-repair',
  '/roof-inspection',
  '/commercial-roofing',
  '/gutters-siding',
] as const;

/**
 * Verified non-services. Keep short—only facts needed to prevent contradictions.
 * Educational blog content may still discuss these topics.
 */
export const SERVICES_NOT_OFFERED: ServiceDefinition[] = [
  {
    id: 'fascia-repair',
    slug: 'fascia-repair',
    name: 'Fascia repair',
    canonicalUrl: '/about',
    description:
      'Educational topic only. PRC 13 Roofing Inc. does not offer fascia repair.',
    schemaName: 'Fascia repair',
    offered: false,
    category: 'exterior',
    showInNav: false,
    showInServicesMenu: false,
    showInFooter: false,
    showInLocalSeoLinks: false,
    showOnCityHubs: false,
    note: 'PRC 13 Roofing Inc. does not offer fascia or soffit repair.',
  },
  {
    id: 'soffit-repair',
    slug: 'soffit-repair',
    name: 'Soffit repair',
    canonicalUrl: '/about',
    description:
      'PRC 13 Roofing Inc. does not offer soffit repair.',
    schemaName: 'Soffit repair',
    offered: false,
    category: 'exterior',
    showInNav: false,
    showInServicesMenu: false,
    showInFooter: false,
    showInLocalSeoLinks: false,
    showOnCityHubs: false,
    note: 'PRC 13 Roofing Inc. does not offer fascia or soffit repair.',
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

export function getServicesMenuItems(): ServiceDefinition[] {
  return SERVICES.filter(service => service.offered && service.showInServicesMenu);
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

export function getNavHref(service: ServiceDefinition): string {
  return service.navHref ?? service.canonicalUrl;
}

export function getServiceById(id: string): ServiceDefinition | undefined {
  return ALL_SERVICE_DEFINITIONS.find(service => service.id === id);
}

export function getServiceByUrl(url: string): ServiceDefinition | undefined {
  const normalized = (url.replace(/\/+$/, '') || '/').split('#')[0];
  const matches = SERVICES.filter(service => service.canonicalUrl === normalized);
  return matches.find(service => service.isCatalogHub) ?? matches[0];
}

/** schema.org knowsAbout / OfferCatalog labels for offered services only */
export function getOfferedSchemaNames(): string[] {
  return getOfferedServices().map(service => service.schemaName);
}

export function isServiceOffered(id: string): boolean {
  const service = getServiceById(id);
  return Boolean(service?.offered);
}
