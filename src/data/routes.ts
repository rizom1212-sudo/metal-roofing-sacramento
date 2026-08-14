import { blogPosts } from './blog';
import { PAGE_META } from './pageMeta';
import { serviceAreas } from './serviceAreas';
import { COLFAX_CLUSTER_CATEGORY } from './blogColfaxHomeHardening';
import { FOLSOM_CLUSTER_CATEGORY } from './blogFolsomRoofingCluster';
import { EL_DORADO_HILLS_CLUSTER_CATEGORY } from './blogElDoradoHillsRoofingCluster';
import { METAL_CLUSTER_CATEGORY } from './blogMetalRoofingCluster';

const SERVICE_ROUTES = [
  '/metal-roofing',
  '/metal-roof-installation',
  '/metal-roof-replacement',
  '/metal-roof-repair',
  '/standing-seam-metal-roofing',
  '/residential-metal-roofing',
  '/commercial-metal-roofing',
  '/metal-roof-inspection',
] as const;

const GENERAL_ROUTES = ['/', '/about', '/contact', '/service-areas', '/gallery', '/blog'] as const;

export interface PublicRoute {
  path: string;
  lastmod: string;
  changefreq?: 'weekly' | 'monthly' | 'yearly';
  priority?: number;
}

const STATIC_LASTMOD = '2026-05-26';

function isoDateFromDisplayDate(date: string): string {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return STATIC_LASTMOD;
  return parsed.toISOString().slice(0, 10);
}

function maxIsoDate(dates: string[]): string {
  if (dates.length === 0) return STATIC_LASTMOD;
  return dates.map(isoDateFromDisplayDate).sort().pop()!;
}

function clusterLastmod(category: string): string {
  return maxIsoDate(
    blogPosts
      .filter(post => post.category === category)
      .map(post => post.updatedDate ?? post.date),
  );
}

const siteContentLastmod = maxIsoDate(blogPosts.map(post => post.updatedDate ?? post.date));

const SERVICE_ROUTE_LASTMOD: Record<(typeof SERVICE_ROUTES)[number], string> = {
  '/metal-roofing': clusterLastmod(METAL_CLUSTER_CATEGORY),
  '/metal-roof-installation': clusterLastmod(METAL_CLUSTER_CATEGORY),
  '/metal-roof-replacement': clusterLastmod(METAL_CLUSTER_CATEGORY),
  '/metal-roof-repair': clusterLastmod(METAL_CLUSTER_CATEGORY),
  '/standing-seam-metal-roofing': clusterLastmod(METAL_CLUSTER_CATEGORY),
  '/residential-metal-roofing': clusterLastmod(METAL_CLUSTER_CATEGORY),
  '/commercial-metal-roofing': clusterLastmod(METAL_CLUSTER_CATEGORY),
  '/metal-roof-inspection': clusterLastmod(METAL_CLUSTER_CATEGORY),
};

function serviceAreaLastmod(slug: string): string {
  if (slug === 'folsom') return clusterLastmod(FOLSOM_CLUSTER_CATEGORY);
  if (slug === 'el-dorado-hills') return clusterLastmod(EL_DORADO_HILLS_CLUSTER_CATEGORY);
  if (slug === 'colfax') return clusterLastmod(COLFAX_CLUSTER_CATEGORY);
  return siteContentLastmod;
}

export const serviceRoutes = SERVICE_ROUTES.map(path => ({
  path,
  lastmod: SERVICE_ROUTE_LASTMOD[path],
  changefreq: 'monthly' as const,
  priority: 0.9,
}));

export const generalRoutes = GENERAL_ROUTES.map(path => ({
  path,
  lastmod: siteContentLastmod,
  changefreq: path === '/blog' ? ('weekly' as const) : ('monthly' as const),
  priority: path === '/' ? 1 : path === '/contact' ? 0.9 : 0.7,
}));

export const blogRoutes = blogPosts.map(post => ({
  path: `/blog/${post.slug}`,
  lastmod: isoDateFromDisplayDate(post.updatedDate ?? post.date),
  changefreq: 'monthly' as const,
  priority: 0.6,
}));

export const serviceAreaRoutes = serviceAreas.map(area => ({
  path: `/service-areas/${area.slug}`,
  lastmod: serviceAreaLastmod(area.slug),
  changefreq: 'monthly' as const,
  priority: area.slug === 'sacramento' ? 0.8 : 0.7,
}));

export const cityServiceRoutes: PublicRoute[] = [];

export const publicRoutes: PublicRoute[] = [
  ...generalRoutes,
  ...serviceRoutes,
  ...serviceAreaRoutes,
  ...blogRoutes,
];

export function isServiceRoute(path: string): boolean {
  return SERVICE_ROUTES.includes(path as (typeof SERVICE_ROUTES)[number]);
}

export function getRouteTitle(path: string): string {
  return PAGE_META[path]?.title ?? 'Metal Roofing Sacramento';
}
