import { DEFAULT_OG_IMAGE } from './assets';
import { blogPosts } from './blog';
import { serviceAreas } from './serviceAreas';
import { BRAND_NAME, OPERATOR_DISCLOSURE, PHONE_DISPLAY } from './site';

export interface PageMetaConfig {
  title: string;
  description: string;
  path: string;
}

const SITE_NAME = BRAND_NAME;

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
    'Metal Roofing Sacramento, CA | Installation, Replacement & Repair',
  description:
    `${OPERATOR_DISCLOSURE} Residential and commercial metal roofing, standing seam systems, metal roof replacement, repair, and inspections in Sacramento, CA. Call ${PHONE_DISPLAY}.`,
  path: '/',
};

export const PAGE_META: Record<string, PageMetaConfig> = {
  '/': DEFAULT_SITE_META,
  '/metal-roofing': {
    title: 'Metal Roofing Services Sacramento | Installation, Repair & More',
    description:
      'Metal roofing services in Sacramento: installation, replacement, repair, standing seam, residential and commercial metal roofs, and inspections. Operated by PRC 13 Roofing Inc., CA CSLB #1087153.',
    path: '/metal-roofing',
  },
  '/metal-roof-installation': {
    title: 'Metal Roof Installation Sacramento | Process & Estimate',
    description:
      'New metal roof installation in Sacramento, including standing seam, underlayment, flashing, ventilation, and panel installation. Get a metal roof installation estimate from PRC 13 Roofing Inc.',
    path: '/metal-roof-installation',
  },
  '/metal-roof-replacement': {
    title: 'Metal Roof Replacement Sacramento | Tear-Off & New Metal',
    description:
      'Replace aging shingles, tile, or failing metal with a metal roof in Sacramento. Tear-off, deck inspection, and repair-versus-replacement guidance from PRC 13 Roofing Inc.',
    path: '/metal-roof-replacement',
  },
  '/metal-roof-repair': {
    title: 'Metal Roof Repair Sacramento | Leaks, Seams & Panels',
    description:
      'Metal roof repair in Sacramento for leaking seams, flashing, damaged panels, fasteners, and penetrations. Request metal roof repair from PRC 13 Roofing Inc., CA CSLB #1087153.',
    path: '/metal-roof-repair',
  },
  '/standing-seam-metal-roofing': {
    title: 'Standing Seam Metal Roofing Sacramento | Concealed Fastener',
    description:
      'Standing seam metal roofing in Sacramento with concealed fasteners and raised seams. Compare standing seam vs exposed-fastener systems and request a standing seam estimate.',
    path: '/standing-seam-metal-roofing',
  },
  '/residential-metal-roofing': {
    title: 'Residential Metal Roofing Sacramento | Homes & Replacement',
    description:
      'Residential metal roofing for Sacramento-area homes, including standing seam, replacement, new construction, and homeowner guidance. Get a residential metal roof estimate.',
    path: '/residential-metal-roofing',
  },
  '/commercial-metal-roofing': {
    title: 'Commercial Metal Roofing Sacramento | Metal Systems Only',
    description:
      'Commercial metal roofing in Sacramento for buildings where metal systems fit: standing seam, metal reroofing, repair, and inspection. Not a TPO or EPDM membrane page.',
    path: '/commercial-metal-roofing',
  },
  '/metal-roof-inspection': {
    title: 'Metal Roof Inspection Sacramento | Repair vs Replacement',
    description:
      'Metal roof inspection in Sacramento covering leaks, panels, fasteners, seams, flashing, and drainage. Free residential inspections with written findings from PRC 13 Roofing Inc.',
      path: '/metal-roof-inspection',
  },
  '/about': {
    title: `About ${SITE_NAME} | Operated by PRC 13 Roofing Inc.`,
    description:
      `${OPERATOR_DISCLOSURE} Learn how this Sacramento metal-roofing brand is operated by a licensed California roofing contractor with honest inspections and clear communication.`,
    path: '/about',
  },
  '/contact': {
    title: `Contact ${SITE_NAME} | Get a Metal Roof Estimate`,
    description:
      `Request a metal roof estimate or inspection in Sacramento. ${OPERATOR_DISCLOSURE} Call ${PHONE_DISPLAY} or send a message. We aim to respond quickly during normal business hours.`,
    path: '/contact',
  },
  '/gallery': {
    title: `Metal Roofing Project Gallery | ${SITE_NAME}`,
    description:
      'View standing seam and metal roofing projects completed by PRC 13 Roofing Inc. for Metal Roofing Sacramento. Non-metal work is not presented as metal.',
    path: '/gallery',
  },
  '/blog': {
    title: `Metal Roofing Blog | ${SITE_NAME}`,
    description:
      'Sacramento metal roofing guides covering standing seam, cost, climate, installation, inspection, storm damage, and repair-versus-replacement.',
    path: '/blog',
  },
  '/service-areas': {
    title: `Sacramento Metal Roofing Service Areas | ${SITE_NAME}`,
    description:
      'Metal Roofing Sacramento, operated by PRC 13 Roofing Inc., serves Sacramento, Roseville, Rocklin, Folsom, Elk Grove, and surrounding communities.',
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

  return PAGE_META[pathname] ?? DEFAULT_SITE_META;
}

export { DEFAULT_OG_IMAGE };

export function getOgImage(): string {
  return DEFAULT_OG_IMAGE;
}
