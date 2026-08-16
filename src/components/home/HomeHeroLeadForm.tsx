import LeadForm from '../LeadForm';
import TrustResponseLine from '../TrustResponseLine';

interface HomeHeroLeadFormProps {
  sourcePage: string;
}

export default function HomeHeroLeadForm({ sourcePage }: HomeHeroLeadFormProps) {
  return (
    <div className="home-hero-form home-panel w-full">
      <div className="px-5 pt-5 pb-1 md:px-6 md:pt-6 border-l-2 border-gold">
        <p className="home-spec text-gold mb-2">Estimate</p>
        <p className="text-headline font-semibold text-[1.15rem] leading-snug">
          Request your metal roof estimate.
        </p>
      </div>
      <div className="px-5 pb-5 pt-4 md:px-6 md:pb-6">
        <LeadForm
          sourcePage={sourcePage}
          variant="hero"
          hideReason
          submitLabel="Get a Metal Roof Estimate"
          defaultReason="metal-estimate"
        />
        <TrustResponseLine className="mt-3 text-[#5c6570]" />
      </div>
    </div>
  );
}
