import { PRIMARY_CTA } from '../data/cta';
import LeadForm from './LeadForm';
import TrustResponseLine from './TrustResponseLine';

interface HeroLeadFormPanelProps {
  sourcePage: string;
  title?: string;
  subtitle?: string;
  className?: string;
  submitLabel?: string;
  defaultReason?: string;
}

export default function HeroLeadFormPanel({
  sourcePage,
  title = PRIMARY_CTA,
  subtitle = 'We aim to schedule inspections quickly during normal business hours.',
  className = '',
  submitLabel,
  defaultReason,
}: HeroLeadFormPanelProps) {
  return (
    <div
      className={`mt-8 w-full max-w-md mx-auto lg:mx-0 lg:mt-0 lg:absolute lg:right-6 lg:top-1/2 lg:-translate-y-1/2 lg:w-[360px] shrink-0 ${className}`}
      style={{
        background: '#f6f1e8',
        border: '1px solid rgba(18,22,28,0.08)',
        boxShadow: '0 18px 50px rgba(8,11,16,0.28)',
      }}
    >
      <div className="px-5 pt-5 pb-5 md:px-6 md:pt-6 md:pb-5 border-l-2 border-gold">
        <p className="text-headline font-bold text-base md:text-lg leading-snug mb-1">{title}</p>
        <p className="text-[#5c6570] text-sm mb-4 md:mb-5 leading-relaxed">{subtitle}</p>
        <LeadForm sourcePage={sourcePage} variant="hero" submitLabel={submitLabel} defaultReason={defaultReason} />
        <TrustResponseLine className="mt-3 text-[#5c6570]" />
      </div>
    </div>
  );
}
