import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
  /** Use on dark hero backgrounds */
  variant?: 'light' | 'dark';
}

export default function Breadcrumbs({ items, variant = 'dark' }: BreadcrumbsProps) {
  const linkClass =
    variant === 'dark'
      ? 'text-gray-400 hover:text-gold transition-colors'
      : 'text-body hover:text-gold transition-colors';
  const currentClass = variant === 'dark' ? 'text-gray-200 font-medium' : 'text-headline font-medium';
  const chevronClass = variant === 'dark' ? 'text-gray-500' : 'text-gray-400';

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        <li>
          <Link to="/" className={linkClass}>
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight size={14} className={`${chevronClass} flex-shrink-0`} aria-hidden />
            {item.href ? (
              <Link to={item.href} className={linkClass}>
                {item.label}
              </Link>
            ) : (
              <span className={currentClass} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
