import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

const INLINE_LINK_PATTERN = /\[([^\]]+)\]\((\/[^)]+)\)/g;

/** Renders paragraph/list text with optional markdown-style internal links: [label](/path) */
export function renderBlogInlineLinks(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  INLINE_LINK_PATTERN.lastIndex = 0;
  while ((match = INLINE_LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(
      <Link key={key++} to={match[2]} className="text-gold font-semibold hover:text-gold-dark transition-colors">
        {match[1]}
      </Link>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : [text];
}
