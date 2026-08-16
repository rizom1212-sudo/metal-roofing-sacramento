import { blogSummaries } from './blogSummaries';
import { serviceAreas } from './serviceAreas';

const STATIC_PUBLIC_PATHS = [
  '/',
  '/about',
  '/contact',
  '/service-areas',
  '/gallery',
  '/blog',
  '/metal-roofing',
  '/metal-roof-installation',
  '/metal-roof-replacement',
  '/metal-roof-repair',
  '/standing-seam-metal-roofing',
  '/residential-metal-roofing',
  '/commercial-metal-roofing',
  '/metal-roof-inspection',
] as const;

export function getPublicPaths(): string[] {
  return [
    ...STATIC_PUBLIC_PATHS,
    ...serviceAreas.map(area => `/service-areas/${area.slug}`),
    ...blogSummaries.map(post => `/blog/${post.slug}`),
  ];
}
