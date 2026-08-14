import { DEFAULT_OG_IMAGE } from './assets';
import { blogPosts } from './blog';
import { serviceAreas } from './serviceAreas';
import { getCityServicePage } from './cityServicePages';

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

export const DEFAULT_SITE_META: PageMetaConfig = {
  title:
    'Best Roofing Contractor in Sacramento, CA | PRC 13 Roofing | Roof Replacement, Repair, Emergency, Metal, Commercial Roofing, Inspection & Gutters Near Me',
  description:
    'Sacramento roofing company specializing in roof replacement, repair, and metal roofing. Free inspections. Licensed & insured. Call 916-761-3866.',
  path: '/',
};

export const PAGE_META: Record<string, PageMetaConfig> = {
  '/': DEFAULT_SITE_META,
  '/roof-replacement': {
    title: 'Roof Replacement Sacramento, CA | Free Inspection | PRC 13',
    description:
      'Roof replacement in Sacramento for shingle, tile, and metal roofing systems. Get a free inspection, written estimate, financing options, and clear next steps.',
    path: '/roof-replacement',
  },
  '/roof-repair': {
    title: 'Roof Repair Sacramento, CA | Free Inspection | PRC 13',
    description:
      'Roof repair in Sacramento for leaks, missing shingles, flashing failures, storm damage, and other urgent roofing problems. Schedule a free inspection with PRC 13 Roofing.',
    path: '/roof-repair',
  },
  '/metal-roofing': {
    title: 'Metal Roofing Sacramento, CA | Install & Repair | PRC 13',
    description:
      'Metal roofing in Sacramento, including standing seam and durable metal roof systems built for heat, energy efficiency, long lifespan, and low maintenance.',
    path: '/metal-roofing',
  },
  '/commercial-roofing': {
    title: 'Commercial Roofing Sacramento | Repair & Inspect | PRC 13',
    description:
      'Commercial roofing in Sacramento for repairs, replacements, inspections, TPO, EPDM, and modified bitumen systems from a licensed local roofing team.',
    path: '/commercial-roofing',
  },
  '/roof-inspection': {
    title: 'Free Roof Inspection Sacramento, CA | PRC 13 Roofing',
    description:
      'Schedule a free roof inspection in Sacramento. PRC 13 Roofing checks for leaks, storm damage, aging materials, flashing problems, and replacement needs.',
    path: '/roof-inspection',
  },
  '/gutters-siding': {
    title: 'Gutters & Siding Sacramento, CA | Repair & Replacement | PRC 13',
    description:
      'Gutter installation, siding repair, and exterior protection for Sacramento homes. PRC 13 Roofing provides free inspections and clear recommendations.',
    path: '/gutters-siding',
  },
  '/emergency-roof-repair': {
    title: 'Emergency Roof Repair Sacramento, CA | Fast Leak Help | PRC 13',
    description:
      'Emergency roof repair in Sacramento for active leaks, storm damage, missing shingles, and urgent water intrusion. Call PRC 13 Roofing for fast assistance.',
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
      'Schedule a free roof inspection in Sacramento with PRC 13 Roofing. Call 916-761-3866 or send a message—we aim to respond quickly during normal business hours.',
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
    title: 'Sacramento Roofing Service Areas | PRC 13',
    description:
      'PRC 13 Roofing serves Sacramento, Roseville, Rocklin, Folsom, Elk Grove, and surrounding communities. Free roof inspections.',
    path: '/service-areas',
  },
  ...serviceAreaMeta,
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

  const cityServicePage = getCityServicePage(pathname);
  if (cityServicePage) {
    return {
      title: cityServicePage.metaTitle,
      description: cityServicePage.metaDescription,
      path: cityServicePage.path,
    };
  }

  return PAGE_META[pathname] ?? DEFAULT_SITE_META;
}

export { DEFAULT_OG_IMAGE };

export function getOgImage(): string {
  return DEFAULT_OG_IMAGE;
}
