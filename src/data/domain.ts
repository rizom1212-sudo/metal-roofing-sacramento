export const SITE_URL = 'https://prc13roofing.com';

export function absoluteUrl(path = '/'): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath === '/' ? '/' : normalizedPath.replace(/\/$/, '')}`;
}

export function absoluteAssetUrl(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
