import { DEFAULT_OG_IMAGE } from './assets';
import { blogPosts } from './blog';
import { serviceAreas } from './serviceAreas';
import { sacramentoLandingPages } from './sacramentoLandingPages';

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
      title: area.metaTitle,
      description: area.metaDescription,
      path: `/service-areas/${area.slug}`,
    },
  ]),
) as Record<string, PageMetaConfig>;

const sacramentoLandingMeta = Object.fromEntries(
  Object.values(sacramentoLandingPages).map(page => [
    page.path,
    {
      title: page.metaTitle,
      description: page.metaDescription,
      path: page.path,
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
      'Roof repair in Sacramento for leaks, storm damage, flashing issues, and missing shingles. Get an honest assessment and written estimate before work starts.',
    path: '/roof-repair',
  },
  '/metal-roofing': {
    title: `Metal Roofing Sacramento | ${SITE_NAME}`,
    description:
      'Metal roofing in Sacramento, including standing seam and durable metal roof systems built for heat, energy efficiency, long lifespan, and low maintenance.',
    path: '/metal-roofing',
  },
  '/commercial-roofing': {
    title: `Commercial Roofing Sacramento | ${SITE_NAME}`,
    description:
      'Commercial roofing in Sacramento for repairs, replacements, inspections, TPO, EPDM, and modified bitumen systems from a licensed local roofing team.',
    path: '/commercial-roofing',
  },
  '/roof-inspection': {
    title: `Free Roof Inspection Sacramento | ${SITE_NAME}`,
    description:
      'Free roof inspections in Sacramento from PRC 13 Roofing. Get written findings, leak checks, repair guidance, and clear next steps with no obligation.',
    path: '/roof-inspection',
  },
  '/gutters-siding': {
    title: `Gutters & Siding Sacramento | ${SITE_NAME}`,
    description:
      'Gutter installation, siding repair, and exterior protection for Sacramento homes. PRC 13 Roofing provides free inspections and clear recommendations.',
    path: '/gutters-siding',
  },
  '/emergency-roof-repair': {
    title: `Emergency Roof Repair Sacramento | ${SITE_NAME}`,
    description:
      'Emergency roof repair in Sacramento for active leaks, storm damage, and urgent roof problems. Call PRC 13 Roofing for fast assessment and clear help.',
    path: '/emergency-roof-repair',
  },
  '/about': {
    title: `About Us | ${SITE_NAME} Sacramento`,
    description:
      'Meet PRC 13 Roofing, a Sacramento roofing company built on honest inspections, licensed service, quality workmanship, and clear communication on every project.',
    path: '/about',
  },
  '/contact': {
    title: `Contact | ${SITE_NAME} Sacramento`,
    description:
      'Schedule a free roof inspection in Sacramento with PRC 13 Roofing. Call 916-761-3866 or send a message for fast roofing help within 24 hours.',
    path: '/contact',
  },
  '/gallery': {
    title: `Project Gallery | ${SITE_NAME}`,
    description:
      'View Sacramento roof replacement, roof repair, metal roofing, and exterior projects completed by PRC 13 Roofing across local homes and neighborhoods.',
    path: '/gallery',
  },
  '/blog': {
    title: `Roofing Blog | ${SITE_NAME}`,
    description:
      'Sacramento roofing tips, inspection guides, emergency repair resources, and local guides for Folsom and El Dorado Hills from PRC 13 Roofing.',
    path: '/blog',
  },
  '/service-areas': {
    title: `Areas We Serve | ${SITE_NAME}`,
    description:
      'PRC 13 Roofing serves Sacramento, Roseville, Rocklin, Folsom, Elk Grove, and surrounding communities. Free roof inspections.',
    path: '/service-areas',
  },
  ...serviceAreaMeta,
  ...sacramentoLandingMeta,
};

export function getPageMeta(pathname: string): PageMetaConfig {
  if (pathname.startsWith('/blog/') && pathname !== '/blog') {
    const slug = pathname.replace('/blog/', '');
    const post = blogPosts.find(item => item.slug === slug);
    if (post) {
      return {
        title: post.seoTitle ?? `${post.title} | ${SITE_NAME}`,
        description: post.excerpt,
        path: pathname,
      };
    }
  }
  return PAGE_META[pathname] ?? DEFAULT_SITE_META;
}

export { DEFAULT_OG_IMAGE };

export function getOgImage(): string {
  return DEFAULT_OG_IMAGE;
}
