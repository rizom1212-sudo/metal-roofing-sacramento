import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSamePageAnchor, scrollToTopInstant } from '../lib/scroll';

function scrollToHashInstant(elementId: string) {
  const target = document.getElementById(elementId);
  if (!target) return;

  const html = document.documentElement;
  const prev = html.style.scrollBehavior;
  html.style.scrollBehavior = 'auto';
  target.scrollIntoView({ behavior: 'auto', block: 'start' });
  window.setTimeout(() => {
    html.style.scrollBehavior = prev;
  }, 0);
}

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    const pathnameChanged = previousPathname.current !== pathname;
    const hashId = hash ? decodeURIComponent(hash.replace('#', '')) : '';

    if (hash && !pathnameChanged) {
      scrollToSamePageAnchor(hashId);
      return;
    }

    scrollToTopInstant();
    previousPathname.current = pathname;

    if (pathnameChanged && hashId) {
      requestAnimationFrame(() => {
        scrollToHashInstant(hashId);
      });
    }
  }, [pathname, hash]);

  return null;
}
