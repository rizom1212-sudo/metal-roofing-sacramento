import { blogPosts } from './blog';
import { PAGE_META } from './pageMeta';

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

export interface PublicRoute {
  path: string;
  lastmod: string;
  changefreq?: 'weekly' | 'monthly' | 'yearly';
  priority?: number;
}

const STATIC_LASTMOD = '2026-05-20';

function isoDateFromDisplayDate(date: string): string {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return STATIC_LASTMOD;
  return parsed.toISOString().slice(0, 10);
}

export const serviceRoutes = SERVICE_ROUTES.map(path => ({
  path,
  lastmod: STATIC_LASTMOD,
  changefreq: 'monthly' as const,
  priority: path === '/roof-replacement' || path === '/roof-repair' ? 0.9 : 0.8,
}));

export const generalRoutes = GENERAL_ROUTES.map(path => ({
  path,
  lastmod: STATIC_LASTMOD,
  changefreq: path === '/blog' ? ('weekly' as const) : ('monthly' as const),
  priority: path === '/' ? 1 : path === '/contact' ? 0.9 : 0.7,
}));

export const blogRoutes = blogPosts.map(post => ({
  path: `/blog/${post.slug}`,
  lastmod: isoDateFromDisplayDate(post.date),
  changefreq: 'monthly' as const,
  priority: 0.6,
}));

export const publicRoutes: PublicRoute[] = [...generalRoutes, ...serviceRoutes, ...blogRoutes];

export function isServiceRoute(path: string): boolean {
  return SERVICE_ROUTES.includes(path as (typeof SERVICE_ROUTES)[number]);
}

export function getRouteTitle(path: string): string {
  return PAGE_META[path]?.title ?? 'PRC 13 Roofing';
}
