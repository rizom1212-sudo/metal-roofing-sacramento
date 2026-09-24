const DEFAULT_ORIGINS = [
  'https://www.metalroofingsacramento.com',
  'https://metalroofingsacramento.com',
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:4173',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:5174',
  'http://127.0.0.1:4173',
];

export const ALLOWED_LEAD_SERVICES = [
  'metal-estimate',
  'metal-installation',
  'metal-replacement',
  'metal-repair',
  'standing-seam',
  'residential-metal',
  'commercial-metal',
  'metal-inspection',
  'other',
];

export const MAX_LEAD_JSON_BYTES = 8_192;

const LIMITS = {
  name: 120,
  phone: 40,
  email: 254,
  service: 64,
  message: 2_000,
  sourcePage: 200,
  pageUrl: 500,
  city: 80,
};

function envOrigins() {
  const raw = process.env.ALLOWED_LEAD_ORIGINS || '';
  return raw
    .split(',')
    .map(value => value.trim())
    .filter(Boolean);
}

export function getAllowedLeadOrigins() {
  return new Set([...DEFAULT_ORIGINS, ...envOrigins()]);
}

function hostnameOf(value) {
  try {
    return new URL(value).hostname.toLowerCase();
  } catch {
    return '';
  }
}

export function isAllowedLeadOrigin(origin, requestHost = '') {
  if (!origin) {
    // Same-origin browser posts usually send Origin; missing Origin is allowed
    // for local tools and some proxies when Host is first-party or local.
    const host = String(requestHost || '').toLowerCase().split(':')[0];
    return (
      host === 'localhost'
      || host === '127.0.0.1'
      || host === 'metalroofingsacramento.com'
      || host === 'www.metalroofingsacramento.com'
      || host.endsWith('.vercel.app')
    );
  }

  const allowed = getAllowedLeadOrigins();
  if (allowed.has(origin)) return true;

  try {
    const url = new URL(origin);
    const host = url.hostname.toLowerCase();
    if (host === 'localhost' || host === '127.0.0.1') return true;
    if (host === 'metalroofingsacramento.com' || host === 'www.metalroofingsacramento.com') return true;
    if (host.endsWith('.vercel.app')) return true;
    if (requestHost) {
      const reqHost = String(requestHost).toLowerCase().split(':')[0];
      if (host === reqHost) return true;
    }
  } catch {
    return false;
  }

  return false;
}

function asTrimmedString(value, max) {
  if (value == null) return '';
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (trimmed.length > max) return null;
  return trimmed;
}

function isLoosePhone(value) {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

function isLooseEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isLooseUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

export function readHoneypot(body) {
  const bait = [body.website, body.company_website, body.fax, body.hp_field];
  return bait.some(value => typeof value === 'string' && value.trim() !== '');
}

export function validateLeadPayload(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { ok: false, status: 400, error: 'Invalid lead payload' };
  }

  if (readHoneypot(body)) {
    return { ok: false, status: 200, silent: true };
  }

  const name = asTrimmedString(body.name, LIMITS.name);
  const phone = asTrimmedString(body.phone, LIMITS.phone);
  const email = asTrimmedString(body.email ?? '', LIMITS.email);
  const service = asTrimmedString(body.service ?? '', LIMITS.service);
  const message = asTrimmedString(body.message ?? '', LIMITS.message);
  const sourcePage = asTrimmedString(body.source_page ?? body.sourcePage ?? '', LIMITS.sourcePage);
  const pageUrl = asTrimmedString(body.pageUrl ?? '', LIMITS.pageUrl);

  if (name == null || phone == null || email == null || service == null || message == null || sourcePage == null || pageUrl == null) {
    return { ok: false, status: 400, error: 'A field exceeds the allowed length' };
  }

  if (!name || !phone || !pageUrl) {
    return { ok: false, status: 400, error: 'Missing required lead fields' };
  }

  if (!isLoosePhone(phone)) {
    return { ok: false, status: 400, error: 'Enter a valid phone number' };
  }

  if (email && !isLooseEmail(email)) {
    return { ok: false, status: 400, error: 'Enter a valid email address' };
  }

  if (service && !ALLOWED_LEAD_SERVICES.includes(service)) {
    return { ok: false, status: 400, error: 'Unsupported service value' };
  }

  if (!sourcePage) {
    return { ok: false, status: 400, error: 'Missing source page' };
  }

  if (!isLooseUrl(pageUrl)) {
    return { ok: false, status: 400, error: 'Invalid page URL' };
  }

  return {
    ok: true,
    value: {
      name,
      phone,
      email: email || undefined,
      service: service || undefined,
      message: message || undefined,
      sourcePage,
      pageUrl,
    },
  };
}
