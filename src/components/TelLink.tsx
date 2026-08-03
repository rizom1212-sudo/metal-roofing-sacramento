import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { PHONE_DISPLAY, PHONE_TEL } from '../data/site';
import { trackClickToCall } from '../lib/analytics';

interface TelLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /** Analytics location label, e.g. "nav", "hero-metal", "footer". */
  location: string;
  children?: ReactNode;
}

/** Click-to-call link using site phone constants + GA4 click_to_call tracking. */
export default function TelLink({
  location,
  children,
  className = '',
  onClick,
  ...rest
}: TelLinkProps) {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      className={className}
      onClick={e => {
        trackClickToCall(location);
        onClick?.(e);
      }}
      {...rest}
    >
      {children ?? PHONE_DISPLAY}
    </a>
  );
}
