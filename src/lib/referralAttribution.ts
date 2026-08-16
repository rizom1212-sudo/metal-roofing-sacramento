/**
 * Lightweight first-touch / session attribution for GA4.
 * Conservative AI referral detection from document.referrer only.
 * Never stores or sends PII.
 */
import { isOwnSiteHost } from '../data/domain';

export type ReferralSource =
  | 'google'
  | 'bing'
  | 'chatgpt'
  | 'perplexity'
  | 'gemini'
  | 'grok'
  | 'copilot'
  | 'yahoo'
  | 'duckduckgo'
  | 'direct'
  | 'referral'
  | 'unknown';

const SESSION_LANDING_KEY = 'prc13_attr_landing';
const SESSION_REFERRER_KEY = 'prc13_attr_referrer';
const SESSION_SOURCE_KEY = 'prc13_attr_source';
const SESSION_CAPTURED_KEY = 'prc13_attr_captured';

function safeSessionGet(key: string): string | null {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSessionSet(key: string, value: string): void {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    /* private mode / blocked storage */
  }
}

function hostnameFromUrl(raw: string | null | undefined): string | null {
  if (!raw) return null;
  try {
    return new URL(raw).hostname.toLowerCase();
  } catch {
    return null;
  }
}

/**
 * Classify a referrer hostname. Prefer specific AI hosts before generic search.
 * Returns `direct` when there is no referrer; `unknown` only when parsing fails oddly.
 */
export function detectReferralSource(referrer?: string | null): ReferralSource {
  if (typeof window === 'undefined' && referrer == null) return 'unknown';

  const raw = referrer === undefined
    ? (typeof document !== 'undefined' ? document.referrer : '')
    : (referrer ?? '');

  if (!raw.trim()) return 'direct';

  const host = hostnameFromUrl(raw);
  if (!host) return 'unknown';

  // Same-site navigations are not external acquisition.
  // Operator site (prc13roofing.com) is first-party related, not a third-party referrer.
  if (
    isOwnSiteHost(host)
    || host === 'prc13roofing.com'
    || host.endsWith('.prc13roofing.com')
  ) {
    return 'direct';
  }

  if (
    host.includes('chatgpt.com')
    || host.includes('chat.openai.com')
    || host === 'openai.com'
  ) {
    return 'chatgpt';
  }
  if (host.includes('perplexity.ai')) return 'perplexity';
  if (host.includes('gemini.google.com') || host.includes('bard.google.com')) return 'gemini';
  if (host.includes('grok.x.ai') || host === 'grok.com') return 'grok';
  if (
    host.includes('copilot.microsoft.com')
    || host.includes('copilot.cloud.microsoft')
  ) {
    return 'copilot';
  }
  if (host.includes('google.') || host === 'google.com') return 'google';
  if (host.includes('bing.com') || host.includes('bing.')) {
    // Bing chat / Copilot-in-Bing sometimes uses bing.com — keep as bing unless chat path known.
    return 'bing';
  }
  if (host.includes('yahoo.')) return 'yahoo';
  if (host.includes('duckduckgo.com')) return 'duckduckgo';

  return 'referral';
}

export interface SessionAttribution {
  landing_page: string;
  initial_referrer: string;
  detected_source: ReferralSource;
}

/** Capture first-touch attribution once per browser tab session. */
export function captureSessionAttribution(pathnameWithSearch?: string): SessionAttribution {
  const path =
    pathnameWithSearch
    ?? (typeof window !== 'undefined' ? `${window.location.pathname}${window.location.search}` : '/');

  const existing = safeSessionGet(SESSION_CAPTURED_KEY);
  if (existing === '1') {
    return {
      landing_page: safeSessionGet(SESSION_LANDING_KEY) || path,
      initial_referrer: safeSessionGet(SESSION_REFERRER_KEY) || '',
      detected_source: (safeSessionGet(SESSION_SOURCE_KEY) as ReferralSource) || 'unknown',
    };
  }

  const referrer = typeof document !== 'undefined' ? document.referrer : '';
  const source = detectReferralSource(referrer);

  safeSessionSet(SESSION_LANDING_KEY, path);
  safeSessionSet(SESSION_REFERRER_KEY, referrer ? hostnameFromUrl(referrer) || 'unparsed' : '');
  safeSessionSet(SESSION_SOURCE_KEY, source);
  safeSessionSet(SESSION_CAPTURED_KEY, '1');

  return {
    landing_page: path,
    initial_referrer: referrer ? hostnameFromUrl(referrer) || 'unparsed' : '',
    detected_source: source,
  };
}

export function getSessionAttribution(): SessionAttribution {
  if (typeof window === 'undefined') {
    return { landing_page: '/', initial_referrer: '', detected_source: 'unknown' };
  }
  if (safeSessionGet(SESSION_CAPTURED_KEY) !== '1') {
    return captureSessionAttribution();
  }
  return {
    landing_page: safeSessionGet(SESSION_LANDING_KEY) || window.location.pathname,
    initial_referrer: safeSessionGet(SESSION_REFERRER_KEY) || '',
    detected_source: (safeSessionGet(SESSION_SOURCE_KEY) as ReferralSource) || 'unknown',
  };
}

const MONEY_PAGE_SERVICES: Array<{ path: string; label: string }> = [
  { path: '/metal-roof-installation', label: 'Metal Roof Installation' },
  { path: '/metal-roof-replacement', label: 'Metal Roof Replacement' },
  { path: '/metal-roof-repair', label: 'Metal Roof Repair' },
  { path: '/standing-seam-metal-roofing', label: 'Standing Seam Metal Roofing' },
  { path: '/residential-metal-roofing', label: 'Residential Metal Roofing' },
  { path: '/commercial-metal-roofing', label: 'Commercial Metal Roofing' },
  { path: '/metal-roof-inspection', label: 'Metal Roof Inspection' },
  { path: '/metal-roofing', label: 'Metal Roofing' },
];

/** Infer a reporting service label from a hire-intent path. Do not infer from blog articles. */
export function inferServiceFromPath(pathname: string): string | undefined {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (path === '/' || path.startsWith('/blog')) return undefined;
  if (path === '/service-areas' || path.startsWith('/service-areas/')) return 'Metal Roofing';
  if (path === '/contact' || path === '/about' || path === '/gallery') return undefined;

  for (const service of MONEY_PAGE_SERVICES) {
    if (path === service.path || path.startsWith(`${service.path}/`)) return service.label;
  }
  return undefined;
}

/** Infer city slug from service-area or city×service paths (no PII). */
export function inferCityFromPath(pathname: string): string | undefined {
  const path = pathname.replace(/\/+$/, '') || '/';
  const areaMatch = path.match(/^\/service-areas\/([^/]+)$/);
  if (areaMatch) return areaMatch[1];
  const cityServiceMatch = path.match(
    /^\/(?:roof-replacement|roof-repair|emergency-roof-repair)\/([^/]+)$/,
  );
  if (cityServiceMatch) return cityServiceMatch[1];
  return undefined;
}

/** Safe GA params shared by conversion events — never includes PII. */
export function buildAttributionParams(extra?: Record<string, string | undefined>) {
  const attr = getSessionAttribution();
  const pagePath =
    typeof window !== 'undefined'
      ? `${window.location.pathname}${window.location.search}`
      : attr.landing_page;

  const params: Record<string, string | undefined> = {
    page_path: pagePath,
    landing_page: attr.landing_page,
    detected_source: attr.detected_source,
    initial_referrer_host: attr.initial_referrer || undefined,
    service_context: inferServiceFromPath(pagePath.split('?')[0]),
    city_context: inferCityFromPath(pagePath.split('?')[0]),
    ...extra,
  };

  // Drop empty values so GA4 stays clean.
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value != null && value !== ''),
  ) as Record<string, string>;
}
