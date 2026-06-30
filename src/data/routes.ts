import { blogPosts } from './blog';
import { PAGE_META } from './pageMeta';
import { serviceAreas } from './serviceAreas';
import { SACRAMENTO_LANDING_PATHS } from './sacramentoLandingPages';
import { EMERGENCY_CLUSTER_CATEGORY } from './blogEmergencyRoofRepairCluster';
import { FOLSOM_CLUSTER_CATEGORY } from './blogFolsomRoofingCluster';
import { EL_DORADO_HILLS_CLUSTER_CATEGORY } from './blogElDoradoHillsRoofingCluster';
import { REPLACEMENT_CLUSTER_CATEGORY } from './blogRoofReplacementCluster';
import { METAL_CLUSTER_CATEGORY } from './blogMetalRoofingCluster';
import { GUTTERS_FASCIA_CLUSTER_CATEGORY } from './blogGuttersFasciaCluster';
import { COMMERCIAL_CLUSTER_CATEGORY } from './blogCommercialRoofingCluster';
import { ROOF_REPAIR_CLUSTER_CATEGORY } from './blogRoofRepairCluster';

const SERVICE_ROUTES = [
  '/roof-replacement',
  '/roof-repair',
  '/metal-roofing',
  '/commercial-roofing',
  '/roof-inspection',
  '/gutters-siding',
  '/emergency-roof-repair',
] as const;

const GENERAL_ROUTES = ['/', '/about', '/contact', '/service-areas', '/gallery', '/blog'] as const;

const INSPECTION_CATEGORY = 'Roof Inspection';

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
  '/roof-replacement': clusterLastmod(REPLACEMENT_CLUSTER_CATEGORY),
  '/roof-repair': clusterLastmod(ROOF_REPAIR_CLUSTER_CATEGORY),
  '/metal-roofing': clusterLastmod(METAL_CLUSTER_CATEGORY),
  '/commercial-roofing': clusterLastmod(COMMERCIAL_CLUSTER_CATEGORY),
  '/roof-inspection': clusterLastmod(INSPECTION_CATEGORY),
  '/gutters-siding': clusterLastmod(GUTTERS_FASCIA_CLUSTER_CATEGORY),
  '/emergency-roof-repair': clusterLastmod(EMERGENCY_CLUSTER_CATEGORY),
};

const SACRAMENTO_LANDING_LASTMOD: Record<string, string> = {
  '/roof-repair-sacramento': clusterLastmod(ROOF_REPAIR_CLUSTER_CATEGORY),
  '/emergency-roof-repair-sacramento': clusterLastmod(EMERGENCY_CLUSTER_CATEGORY),
  '/roof-inspection-sacramento': clusterLastmod(INSPECTION_CATEGORY),
  '/roof-replacement-sacramento': clusterLastmod(REPLACEMENT_CLUSTER_CATEGORY),
};

function serviceAreaLastmod(slug: string): string {
  if (slug === 'folsom') return clusterLastmod(FOLSOM_CLUSTER_CATEGORY);
  if (slug === 'el-dorado-hills') return clusterLastmod(EL_DORADO_HILLS_CLUSTER_CATEGORY);
  return siteContentLastmod;
}

export const serviceRoutes = SERVICE_ROUTES.map(path => ({
  path,
  lastmod: SERVICE_ROUTE_LASTMOD[path],
  changefreq: 'monthly' as const,
  priority: path === '/roof-replacement' || path === '/roof-repair' ? 0.9 : 0.8,
}));

export const generalRoutes = GENERAL_ROUTES.map(path => ({
  path,
  lastmod: path === '/blog' ? siteContentLastmod : siteContentLastmod,
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

export const sacramentoLandingRoutes = SACRAMENTO_LANDING_PATHS.map(path => ({
  path,
  lastmod: SACRAMENTO_LANDING_LASTMOD[path] ?? siteContentLastmod,
  changefreq: 'monthly' as const,
  priority: 0.85,
}));

export const publicRoutes: PublicRoute[] = [
  ...generalRoutes,
  ...serviceRoutes,
  ...sacramentoLandingRoutes,
  ...serviceAreaRoutes,
  ...blogRoutes,
];

export function isServiceRoute(path: string): boolean {
  return SERVICE_ROUTES.includes(path as (typeof SERVICE_ROUTES)[number]);
}

export function getRouteTitle(path: string): string {
  return PAGE_META[path]?.title ?? 'PRC 13 Roofing';
}
