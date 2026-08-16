/** GA4 / gtag conversion helpers. Safe no-ops when gtag is unavailable.
 * Never send names, phones, emails, messages, or street addresses as event params.
 */
import { buildAttributionParams } from './referralAttribution';

type GtagParams = Record<string, string | number | boolean | undefined>;

function gtagEvent(eventName: string, params?: GtagParams) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}

function withAttribution(extra?: Record<string, string | undefined>): GtagParams {
  return buildAttributionParams(extra);
}

/** Phone link click (navbar, hero, footer, sticky bar, etc.). */
export function trackClickToCall(location: string) {
  gtagEvent('click_to_call', {
    event_category: 'conversion',
    event_label: location,
    link_location: location,
    cta_type: 'phone',
    ...withAttribution(),
  });
}

/** SMS link click. */
export function trackClickToSms(location: string) {
  gtagEvent('click_to_sms', {
    event_category: 'conversion',
    event_label: location,
    link_location: location,
    cta_type: 'sms',
    ...withAttribution(),
  });
}

/** Successful lead form submission (only after API success — not on button click). */
export function trackGenerateLead(params: {
  sourcePage: string;
  formVariant?: string;
  /** Human-readable service label. Prefer the user's selected reason. */
  service?: string;
  formLocation?: string;
}) {
  const hostname = typeof window !== 'undefined' ? window.location.hostname : undefined;
  const pathname = typeof window !== 'undefined' ? window.location.pathname : undefined;

  gtagEvent('generate_lead', {
    event_category: 'conversion',
    event_label: params.sourcePage,
    source_page: params.sourcePage,
    hostname,
    pathname,
    form_variant: params.formVariant,
    form_location: params.formLocation ?? params.formVariant ?? params.sourcePage,
    service: params.service || undefined,
    service_needed: params.service || undefined,
    cta_type: 'lead_form',
    ...withAttribution({
      service_context: params.service || undefined,
    }),
  });
}

/** Email mailto click when used. */
export function trackEmailClick(location: string) {
  gtagEvent('click_email', {
    event_category: 'conversion',
    event_label: location,
    link_location: location,
    cta_type: 'email',
    ...withAttribution(),
  });
}

/** Optional once-per-session signal that attribution was captured (debugging / exploration). */
export function trackSessionAttributionCaptured(params: {
  detected_source: string;
  landing_page: string;
}) {
  gtagEvent('session_attribution', {
    event_category: 'engagement',
    detected_source: params.detected_source,
    landing_page: params.landing_page,
  });
}
