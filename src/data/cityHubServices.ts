/**
 * City hub service cards: preserve city-specific copy and city×service deep links,
 * then fill any missing offered catalog services (Phase 2).
 *
 * PRC 13 offers the full catalog across the service area — do not invent
 * geography-specific service exclusions without verified business data.
 */
import { getCityHubServices, type ServiceDefinition } from './services';

export type CityHubServiceCard = {
  title: string;
  href: string;
  desc: string;
};

/** Map a hub card href to a catalog service id (supports city×service paths). */
export function catalogServiceIdFromHref(href: string): string | undefined {
  const path = href.split(/[?#]/)[0].replace(/\/$/, '') || '/';
  for (const service of getCityHubServices()) {
    if (path === service.canonicalUrl || path.startsWith(`${service.canonicalUrl}/`)) {
      return service.id;
    }
  }
  return undefined;
}

function defaultCityServiceDesc(service: ServiceDefinition, cityName: string): string {
  switch (service.id) {
    case 'gutters-siding':
      return `Gutter installation, gutter guards, and siding for ${cityName} homes. PRC 13 does not offer fascia or soffit repair.`;
    case 'commercial-roofing':
      return `Flat and low-slope commercial roof repair, replacement, and inspections for ${cityName}-area properties.`;
    case 'roof-repair':
      return `Leak repair, storm damage, flashing issues, and repair-vs-replacement guidance for ${cityName} homes.`;
    case 'roof-replacement':
      return `Full roof replacement planning for ${cityName} homes, including material options and written estimates.`;
    case 'roof-inspection':
      return `Free roof inspections in ${cityName} with clear findings for leaks, storm wear, and repair-vs-replacement decisions.`;
    case 'emergency-roof-repair':
      return `Urgent leak response and temporary stabilization for ${cityName} homeowners when water is entering the home.`;
    case 'metal-roofing':
      return `Metal roof installation and replacement options for ${cityName} homeowners seeking long-term durability.`;
    default:
      return service.description;
  }
}

/**
 * Keep existing hub cards (custom titles/descriptions and city×service URLs),
 * then append any offered catalog services the hub was missing.
 */
export function resolveCityHubServices(
  cityName: string,
  existing: CityHubServiceCard[],
): CityHubServiceCard[] {
  const covered = new Set(
    existing
      .map(item => catalogServiceIdFromHref(item.href))
      .filter((id): id is string => Boolean(id)),
  );

  const additions = getCityHubServices()
    .filter(service => !covered.has(service.id))
    .map(service => ({
      title: `${service.name} in ${cityName}`,
      href: service.canonicalUrl,
      desc: defaultCityServiceDesc(service, cityName),
    }));

  return [...existing, ...additions];
}

/** Descriptive CTA label for city hub service cards (avoids generic “Learn more”). */
export function cityHubServiceCtaLabel(title: string): string {
  const base = title.replace(/\s+in\s+.+$/i, '').trim();
  if (!base) return 'Explore this service';
  return `See ${base.toLowerCase()} options`;
}
