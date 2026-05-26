import { DEFAULT_OG_IMAGE } from './assets';
import { serviceAreas } from './serviceAreas';

export interface PageMetaConfig {
  title: string;
  description: string;
  path: string;
}

const SITE_NAME = 'PRC 13 Roofing';

const serviceAreaMeta = Object.fromEntries(
  serviceAreas.map(area => [
    `/service-areas/${area.slug}`,
    {
      title: `${area.name} Roofing Services | ${SITE_NAME}`,
      description: `Roof repair, replacement, inspections, emergency leak help, and metal roofing in ${area.name}, CA. Free roof inspections from PRC 13 Roofing.`,
      path: `/service-areas/${area.slug}`,
    },
  ]),
) as Record<string, PageMetaConfig>;

export const DEFAULT_SITE_META: PageMetaConfig = {
  title: `${SITE_NAME} | Sacramento Roof Replacement & Repair`,
  description:
    'Sacramento roofing company specializing in roof replacement, repair, and metal roofing. Free inspections. Licensed & insured. Call 916-761-3866.',
  path: '/',
};

export const PAGE_META: Record<string, PageMetaConfig> = {
  '/': DEFAULT_SITE_META,
  '/roof-replacement': {
    title: `Roof Replacement Sacramento | ${SITE_NAME}`,
    description:
      'Full roof replacement in Sacramento. Quality materials, 1 to 2 day installs, final walkthrough. Free inspection. Financing available.',
    path: '/roof-replacement',
  },
  '/roof-repair': {
    title: `Roof Repair Sacramento | ${SITE_NAME}`,
    description:
      'Fast roof leak repair and storm damage fixes in Sacramento. Honest assessments. Written estimates before work starts.',
    path: '/roof-repair',
  },
  '/metal-roofing': {
    title: `Metal Roofing Sacramento | ${SITE_NAME}`,
    description:
      'Standing seam and metal roof installation in Sacramento. 50+ year lifespan. Free consultation and inspection.',
    path: '/metal-roofing',
  },
  '/commercial-roofing': {
    title: `Commercial Roofing Sacramento | ${SITE_NAME}`,
    description:
      'Commercial roof repair and replacement for Sacramento businesses. TPO, EPDM, modified bitumen. Licensed & insured.',
    path: '/commercial-roofing',
  },
  '/roof-inspection': {
    title: `Free Roof Inspection Sacramento | ${SITE_NAME}`,
    description:
      'Free, no-obligation roof inspections in Sacramento from a licensed roofing team. Written findings provided.',
    path: '/roof-inspection',
  },
  '/gutters-siding': {
    title: `Gutters & Siding Sacramento | ${SITE_NAME}`,
    description:
      'Gutter installation, siding repair, and exterior protection for Sacramento homes. Free exterior inspection.',
    path: '/gutters-siding',
  },
  '/emergency-roof-repair': {
    title: `Emergency Roof Repair Sacramento | ${SITE_NAME}`,
    description:
      '24-hour emergency roof repair in Sacramento. Active leaks and storm damage. Same-day assessment available.',
    path: '/emergency-roof-repair',
  },
  '/about': {
    title: `About Us | ${SITE_NAME} Sacramento`,
    description:
      'Meet the PRC 13 team. Sacramento roofing built on honest inspections, licensed service, and quality work.',
    path: '/about',
  },
  '/contact': {
    title: `Contact | ${SITE_NAME} Sacramento`,
    description:
      'Schedule your free roof inspection. Call 916-761-3866 or send a message. Most homes inspected within 24 hours.',
    path: '/contact',
  },
  '/gallery': {
    title: `Project Gallery | ${SITE_NAME}`,
    description:
      'Recent roof replacements, repairs, and metal roofing projects across Sacramento and surrounding communities.',
    path: '/gallery',
  },
  '/blog': {
    title: `Roofing Blog | ${SITE_NAME}`,
    description:
      'Roofing tips and advice for Sacramento homeowners, including repairs, replacements, insurance claims, and maintenance.',
    path: '/blog',
  },
  '/service-areas': {
    title: `Areas We Serve | ${SITE_NAME}`,
    description:
      'PRC 13 Roofing serves Sacramento, Roseville, Rocklin, Folsom, Elk Grove, and surrounding communities. Free roof inspections.',
    path: '/service-areas',
  },
  ...serviceAreaMeta,
};

export function getPageMeta(pathname: string): PageMetaConfig {
  if (pathname.startsWith('/blog/') && pathname !== '/blog') {
    return {
      title: `Roofing Article | ${SITE_NAME}`,
      description:
        'Practical roofing guidance for Sacramento homeowners from PRC 13 Roofing.',
      path: pathname,
    };
  }
  return PAGE_META[pathname] ?? DEFAULT_SITE_META;
}

export { DEFAULT_OG_IMAGE };

export function getOgImage(): string {
  return DEFAULT_OG_IMAGE;
}
