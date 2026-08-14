/** Canonical production host for Metal Roofing Sacramento. */
export const SITE_URL = 'https://www.metalroofingsacramento.com';

/** Hostname without protocol, used for self-referral detection. */
export const SITE_HOST = 'metalroofingsacramento.com';

export function absoluteUrl(path = '/'): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath === '/' ? '/' : normalizedPath.replace(/\/$/, '')}`;
}

export function absoluteAssetUrl(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function isOwnSiteHost(host: string): boolean {
  const normalized = host.toLowerCase().replace(/^www\./, '');
  return (
    normalized === SITE_HOST
    || host.toLowerCase() === SITE_HOST
    || host.toLowerCase().endsWith(`.${SITE_HOST}`)
  );
}
