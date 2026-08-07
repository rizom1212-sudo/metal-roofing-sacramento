import LeadForm from './LeadForm';
import TrustResponseLine from './TrustResponseLine';

interface HeroLeadFormPanelProps {
  sourcePage: string;
  title?: string;
  subtitle?: string;
  className?: string;
  submitLabel?: string;
}

export default function HeroLeadFormPanel({
  sourcePage,
  title = 'Request a Free Roof Inspection',
  subtitle = 'We aim to schedule inspections quickly during normal business hours.',
  className = '',
  submitLabel,
}: HeroLeadFormPanelProps) {
  return (
    <div
      className={`mt-8 w-full max-w-md mx-auto lg:mx-0 lg:mt-0 lg:absolute lg:right-6 lg:top-1/2 lg:-translate-y-1/2 lg:w-[360px] shrink-0 ${className}`}
      style={{
        background: 'rgba(18, 24, 33, 0.82)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        border: '1px solid rgba(201,151,0,0.22)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(201,151,0,0.08)',
      }}
    >
      <div className="px-5 pt-5 pb-5 md:px-6 md:pt-6 md:pb-5 rounded-brand">
        <p className="text-white font-bold text-base md:text-lg leading-snug mb-1">{title}</p>
        <p className="text-gray-400 text-sm mb-4 md:mb-5 leading-relaxed">{subtitle}</p>
              <LeadForm sourcePage={sourcePage} variant="hero" submitLabel={submitLabel} />
              <TrustResponseLine className="mt-3 text-gray-500" />
            </div>
          </div>
  );
}
