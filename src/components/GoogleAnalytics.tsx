import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-9WWQLWZGSV';

function trackPageView(path: string) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('config', GA_MEASUREMENT_ID, { page_path: path });
}

/** Sends GA4 page views on React Router navigations (initial load handled by index.html gtag). */
export default function GoogleAnalytics() {
  const { pathname, search } = useLocation();
  const isFirstNavigation = useRef(true);

  useEffect(() => {
    const path = `${pathname}${search}`;

    if (isFirstNavigation.current) {
      isFirstNavigation.current = false;
      return;
    }

    trackPageView(path);
  }, [pathname, search]);

  return null;
}
