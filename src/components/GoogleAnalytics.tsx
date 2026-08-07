import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { captureSessionAttribution } from '../lib/referralAttribution';
import { trackSessionAttributionCaptured } from '../lib/analytics';

const GA_MEASUREMENT_ID = 'G-9WWQLWZGSV';

function trackPageView(path: string) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('config', GA_MEASUREMENT_ID, { page_path: path });
}

/** Sends GA4 page views on React Router navigations (initial load handled by index.html gtag). */
export default function GoogleAnalytics() {
  const { pathname, search } = useLocation();
  const isFirstNavigation = useRef(true);
  const attributionReady = useRef(false);

  useEffect(() => {
    const path = `${pathname}${search}`;

    if (!attributionReady.current) {
      attributionReady.current = true;
      const attr = captureSessionAttribution(path);
      trackSessionAttributionCaptured({
        detected_source: attr.detected_source,
        landing_page: attr.landing_page,
      });
    }

    if (isFirstNavigation.current) {
      isFirstNavigation.current = false;
      return;
    }

    trackPageView(path);
  }, [pathname, search]);

  return null;
}
