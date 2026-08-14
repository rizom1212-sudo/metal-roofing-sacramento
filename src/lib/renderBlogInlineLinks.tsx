import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

const INLINE_LINK_PATTERN = /\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]+)\)/g;

/** Strip markdown-style links to plain text for JSON-LD FAQ answers. */
export function plainTextFromInlineLinks(text: string): string {
  return text.replace(INLINE_LINK_PATTERN, '$1').replace(/\*\*([^*]+)\*\*/g, '$1');
}

function renderBoldText(text: string, keyPrefix: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) {
      return (
        <strong key={`${keyPrefix}-b${index}`} className="font-semibold text-headline">
          {bold[1]}
        </strong>
      );
    }
    return part;
  });
}

/** Renders paragraph/list text with markdown-style links: [label](/path) or [label](https://...). */
export function renderBlogInlineLinks(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  INLINE_LINK_PATTERN.lastIndex = 0;
  while ((match = INLINE_LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(...renderBoldText(text.slice(lastIndex, match.index), `t${key}`));
    }
    const href = match[2];
    const label = match[1];
    if (href.startsWith('http://') || href.startsWith('https://')) {
      nodes.push(
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold font-semibold hover:text-gold-dark transition-colors"
        >
          {label}
        </a>,
      );
    } else {
      nodes.push(
        <Link key={key++} to={href} className="text-gold font-semibold hover:text-gold-dark transition-colors">
          {label}
        </Link>,
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(...renderBoldText(text.slice(lastIndex), `t${key}`));
  }

  return nodes.length > 0 ? nodes : [text];
}
