import type { MouseEvent } from 'react';

/** Instant scroll to document top (route changes, logo on home, etc.). */
export function scrollToTopInstant() {
  const html = document.documentElement;
  const body = document.body;
  const prevHtml = html.style.scrollBehavior;
  const prevBody = body.style.scrollBehavior;

  html.style.scrollBehavior = 'auto';
  body.style.scrollBehavior = 'auto';
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  html.scrollTop = 0;
  body.scrollTop = 0;

  window.setTimeout(() => {
    html.style.scrollBehavior = prevHtml;
    body.style.scrollBehavior = prevBody;
  }, 0);
}

/** Same-page anchor only — uses smooth scroll, not global CSS. */
export function scrollToSamePageAnchor(elementId: string) {
  const target = document.getElementById(elementId);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function handleSamePageAnchorClick(
  event: MouseEvent<HTMLAnchorElement>,
  elementId: string,
) {
  event.preventDefault();
  scrollToSamePageAnchor(elementId);
}
