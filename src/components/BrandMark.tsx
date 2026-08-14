import { Link } from 'react-router-dom';

interface BrandMarkProps {
  to?: string;
  onClick?: () => void;
  variant?: 'onDark' | 'onLight';
  size?: 'nav' | 'footer';
  className?: string;
}

export default function BrandMark({
  to = '/',
  onClick,
  variant = 'onDark',
  size = 'nav',
  className = '',
}: BrandMarkProps) {
  const onDark = variant === 'onDark';
  const compact = size === 'nav';

  const mark = (
    <span className={`block leading-none ${className}`.trim()}>
      <span
        className={`block font-bold tracking-[0.14em] ${
          onDark ? 'text-white' : 'text-headline'
        } ${compact ? 'text-[11px] sm:text-xs' : 'text-sm'}`}
      >
        METAL ROOFING
      </span>
      <span
        className={`block font-semibold tracking-[0.22em] ${
          onDark ? 'text-gold' : 'text-gold-dark'
        } ${compact ? 'text-[10px] sm:text-[11px] mt-0.5' : 'text-xs mt-1'}`}
      >
        SACRAMENTO
      </span>
    </span>
  );

  if (!to) return mark;

  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center flex-shrink-0 min-w-0 rounded-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      aria-label="Metal Roofing Sacramento home"
    >
      {mark}
    </Link>
  );
}
