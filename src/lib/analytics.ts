/** GA4 / gtag conversion helpers. Safe no-ops when gtag is unavailable. */

type GtagParams = Record<string, string | number | boolean | undefined>;

function gtagEvent(eventName: string, params?: GtagParams) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}

/** Phone link click (navbar, hero, footer, sticky bar, etc.). */
export function trackClickToCall(location: string) {
  gtagEvent('click_to_call', {
    event_category: 'conversion',
    event_label: location,
    link_location: location,
  });
}

/** SMS link click. */
export function trackClickToSms(location: string) {
  gtagEvent('click_to_sms', {
    event_category: 'conversion',
    event_label: location,
    link_location: location,
  });
}

/** Successful lead form submission. */
export function trackGenerateLead(params: {
  sourcePage: string;
  formVariant?: string;
  service?: string;
}) {
  gtagEvent('generate_lead', {
    event_category: 'conversion',
    event_label: params.sourcePage,
    source_page: params.sourcePage,
    form_variant: params.formVariant,
    service_needed: params.service || undefined,
  });
}

/** Email mailto click when used. */
export function trackEmailClick(location: string) {
  gtagEvent('click_email', {
    event_category: 'conversion',
    event_label: location,
    link_location: location,
  });
}
