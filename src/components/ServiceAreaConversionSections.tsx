import type { MouseEvent } from 'react';
import { Award, CheckCircle, ClipboardCheck, Shield } from 'lucide-react';
import {
  INSPECTION_BENEFITS,
  SERVICE_AREA_FORM_SECTION_ID,
} from '../data/serviceAreaConversion';
import { LICENSE_TEXT } from '../data/site';
import { handleSamePageAnchorClick } from '../lib/scroll';

interface ServiceAreaConversionSectionsProps {
  cityName: string;
  inspectionIntro: string;
  trustIntro: string;
}

const trustBadges = [
  {
    icon: Shield,
    title: 'Licensed',
    desc: LICENSE_TEXT,
  },
  {
    icon: Award,
    title: 'Insured',
    desc: 'Fully insured roofing contractor',
  },
  {
    icon: ClipboardCheck,
    title: 'Free Roof Inspections',
    desc: 'No-cost, no-obligation assessments',
  },
] as const;

export default function ServiceAreaConversionSections({
  cityName,
  inspectionIntro,
  trustIntro,
}: ServiceAreaConversionSectionsProps) {
  const scrollToForm = (event: MouseEvent<HTMLAnchorElement>) => {
    handleSamePageAnchorClick(event, SERVICE_AREA_FORM_SECTION_ID);
  };

  return (
    <>
      <section className="bg-cream py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Get Started</p>
            <h2 className="section-heading mb-5">Schedule Your Free Roof Inspection</h2>
            <p className="text-body text-sm leading-relaxed mb-6">{inspectionIntro}</p>
            <ul className="space-y-2.5 mb-8">
              {INSPECTION_BENEFITS.map(item => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                  <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`#${SERVICE_AREA_FORM_SECTION_ID}`}
              onClick={scrollToForm}
              className="inline-flex items-center justify-center btn-gold py-3.5 px-7 text-sm font-semibold"
            >
              Schedule Your Free Roof Inspection
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Why PRC 13</p>
          <h2 className="section-heading mb-5">Why Homeowners Choose PRC 13 Roofing</h2>
          <p className="text-body text-sm leading-relaxed mb-8 max-w-3xl">{trustIntro}</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {trustBadges.map(badge => (
              <div
                key={badge.title}
                className="card-brand bg-cream border border-gray-100 p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white border border-gold/20 shadow-sm">
                  <badge.icon size={20} className="text-gold" aria-hidden />
                </div>
                <h3 className="font-bold text-headline text-base mb-2">{badge.title}</h3>
                <p className="text-body text-xs leading-relaxed">{badge.desc}</p>
              </div>
            ))}
          </div>
          <p className="sr-only">Serving homeowners in {cityName}, CA.</p>
        </div>
      </section>
    </>
  );
}
