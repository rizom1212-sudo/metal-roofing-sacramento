import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { getOgImage, getPageMeta } from '../data/pageMeta';
import { ASSETS } from '../data/assets';
import { absoluteAssetUrl, absoluteUrl } from '../data/domain';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
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
    let meta = getPageMeta(pathname);

    if (pathname.startsWith('/blog/') && pathname !== '/blog') {
      const slug = pathname.replace('/blog/', '');
      const post = blogPosts.find(p => p.slug === slug);
      if (post) {
        meta = {
          title: `${post.title} | PRC 13 Roofing`,
          description: post.excerpt,
          path: pathname,
        };
      }
    }

    const url = absoluteUrl(meta.path);
    const image = absoluteAssetUrl(getOgImage());

    document.title = meta.title;
    upsertLink('canonical', url);
    upsertMeta('name', 'description', meta.description);
    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:type', 'website');
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
