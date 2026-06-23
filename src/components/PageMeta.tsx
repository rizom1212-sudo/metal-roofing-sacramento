import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getOgImage, getPageMeta } from '../data/pageMeta';
import { ASSETS } from '../data/assets';
import { absoluteAssetUrl, absoluteUrl } from '../data/domain';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  const elements = Array.from(document.querySelectorAll<HTMLMetaElement>(selector));
  let el = elements[0];

  elements.slice(1).forEach(duplicate => duplicate.remove());

  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertMetaDescription(content: string) {
  const elements = Array.from(document.querySelectorAll<HTMLMetaElement>('meta[name="description"]'));
  let el = elements[0];

  elements.slice(1).forEach(duplicate => duplicate.remove());

  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', 'description');
    document.head.appendChild(el);
  }

  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getPageMeta(pathname);
    const ogType = pathname.startsWith('/blog/') && pathname !== '/blog' ? 'article' : 'website';

    const url = absoluteUrl(meta.path);
    const image = absoluteAssetUrl(getOgImage());

    document.title = meta.title;
    upsertLink('canonical', url);
    upsertMetaDescription(meta.description);
    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:site_name', 'PRC 13 Roofing');
    upsertMeta('name', 'robots', 'index,follow');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', meta.title);
    upsertMeta('name', 'twitter:description', meta.description);
    upsertMeta('name', 'twitter:image', image);

    const existingPreload = document.getElementById('preload-lcp-hero');
    existingPreload?.remove();
    if (pathname === '/') {
      const link = document.createElement('link');
      link.id = 'preload-lcp-hero';
      link.rel = 'preload';
      link.as = 'image';
      link.href = absoluteAssetUrl(ASSETS.brand.hero);
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    }
  }, [pathname]);

  return null;
}
