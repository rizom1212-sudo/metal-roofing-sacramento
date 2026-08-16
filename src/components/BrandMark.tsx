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
    <span className={`flex items-center gap-2.5 sm:gap-3 leading-none ${className}`.trim()}>
      <span
        className={`brand-seam ${onDark ? 'text-gold' : 'text-gold-dark'} ${compact ? 'h-8' : 'h-9'}`}
        aria-hidden
      >
        <span />
        <span />
        <span />
      </span>
      <span className="block min-w-0">
        <span
          className={`block font-bold tracking-[0.16em] ${
            onDark ? 'text-white' : 'text-headline'
          } ${compact ? 'text-[11px] sm:text-[12px]' : 'text-[13px]'}`}
        >
          METAL ROOFING
        </span>
        <span
          className={`block font-semibold tracking-[0.28em] ${
            onDark ? 'text-gold' : 'text-gold-dark'
          } ${compact ? 'text-[9px] sm:text-[10px] mt-1' : 'text-[11px] mt-1.5'}`}
        >
          SACRAMENTO
        </span>
      </span>
    </span>
  );

  if (!to) return mark;

  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center flex-shrink-0 min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      aria-label="Metal Roofing Sacramento home"
    >
      {mark}
    </Link>
  );
}
