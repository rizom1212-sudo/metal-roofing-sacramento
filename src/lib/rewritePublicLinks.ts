import { isRetiredPublicPath, rewriteRetiredPath } from '../data/urlPolicy';

const MARKDOWN_LINK = /\[([^\]]+)\]\((\/[^)\s]+)\)/g;

export function rewritePublicMarkdown(content: string): string {
  return content.replace(MARKDOWN_LINK, (_match, label, href) => {
    const [path, hash] = href.split('#');
    const next = rewriteRetiredPath(path);
    if (next !== path) {
      return hash ? `[${label}](${next}#${hash})` : `[${label}](${next})`;
    }
    if (isRetiredPublicPath(path)) return label;
    return `[${label}](${href})`;
  });
}

export function rewritePublicHref(href: string): string {
  const next = rewriteRetiredPath(href);
  if (isRetiredPublicPath(next)) return '';
  return next;
}

export function rewriteLinksInUnknownValue<T>(value: T): T {
  if (typeof value === 'string') {
    return rewritePublicMarkdown(value) as T;
  }
  if (Array.isArray(value)) {
    return value
      .map(item => rewriteLinksInUnknownValue(item))
      .filter(item => {
        if (item && typeof item === 'object' && 'href' in item) {
          const href = (item as { href?: unknown }).href;
          return typeof href === 'string' && href.length > 0;
        }
        return true;
      }) as T;
  }
  if (value && typeof value === 'object') {
    const next: Record<string, unknown> = {};
    for (const [key, nested] of Object.entries(value as Record<string, unknown>)) {
      if ((key === 'href' || key === 'ctaHref') && typeof nested === 'string' && nested.startsWith('/')) {
        next[key] = rewritePublicHref(nested);
      } else {
        next[key] = rewriteLinksInUnknownValue(nested);
      }
    }
    return next as T;
  }
  return value;
}
