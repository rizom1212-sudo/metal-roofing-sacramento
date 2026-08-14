import { ExternalLink } from 'lucide-react';
import { GOOGLE_REVIEWS_URL, OPERATOR_DISPLAY_NAME } from '../data/site';

interface GoogleReviewsLinkProps {
  className?: string;
  /** Prominent button vs inline text link */
  variant?: 'button' | 'link';
}

export default function GoogleReviewsLink({
  className = '',
  variant = 'link',
}: GoogleReviewsLinkProps) {
  const styles =
    variant === 'button'
      ? 'inline-flex items-center justify-center gap-2 btn-gold px-6 py-3 text-sm font-semibold'
      : 'inline-flex items-center gap-1.5 text-gold font-semibold text-sm hover:text-gold-light transition-colors';

  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles} ${className}`.trim()}
    >
      Read {OPERATOR_DISPLAY_NAME} Google Reviews
      <ExternalLink size={variant === 'button' ? 16 : 14} aria-hidden />
    </a>
  );
}
