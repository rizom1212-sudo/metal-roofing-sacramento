import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle, MapPin, Phone } from 'lucide-react';
import JsonLd from '../components/JsonLd';
import FaqAccordion, { type FaqItem } from '../components/FaqAccordion';
import AnswerSummary from '../components/AnswerSummary';
import LocalSeoLinks from '../components/LocalSeoLinks';
import LeadForm from '../components/LeadForm';
import { PRIMARY_CTA } from '../data/cta';
import { PHONE_DISPLAY, PHONE_TEL } from '../data/site';
import { serviceAreas } from '../data/serviceAreas';

export default function ServiceAreaCity() {
  const { slug } = useParams<{ slug: string }>();
  const area = serviceAreas.find(item => item.slug === slug);

  if (!area) {
    return (
      <section className="bg-cream py-20 text-center">
        <div className="max-w-xl mx-auto px-5">
          <h1 className="text-2xl font-bold text-headline mb-4">Service area not found</h1>
          <Link to="/service-areas" className="text-gold font-semibold hover:underline text-sm">
            Back to all service areas
          </Link>
        </div>
      </section>
    );
  }

  const faqs: FaqItem[] = area.faqs;
  const pageName = `${area.name} Roofing Services`;

  return (
    <>
      <JsonLd
        faqs={faqs}
        pageName={pageName}
        schemaType="Service"
        serviceName={`Roofing Services in ${area.name}, CA`}
        servedAreas={[area.name]}
        breadcrumbs={[
          { label: 'Service Areas', href: '/service-areas' },
          { label: area.name },
        ]}
      />

      <section className="bg-charcoal-dark text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> Service Area</span>
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Roofing Services in<br />
            <span className="text-gold">{area.name}, CA</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">{area.heroIntro}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold">
              <Phone size={18} /> Call {PHONE_DISPLAY}
            </a>
            <Link to="/roof-inspection" className="inline-flex items-center justify-center gap-2 btn-outline py-4 px-8 text-base font-semibold">
              {PRIMARY_CTA} <ArrowRight size={18} />
            </Link>
            <Link to="/gallery" className="inline-flex items-center justify-center gap-2 btn-outline py-4 px-8 text-base font-semibold">
              View Project Gallery <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnswerSummary
            title={`${area.name} roofing: quick answer`}
            points={area.quickPoints}
          >
            {area.quickAnswer}
          </AnswerSummary>

          <div className="grid md:grid-cols-2 gap-5">
            {area.services.map(service => (
              <Link
                key={service.href}
                to={service.href}
                className="card-brand bg-white border border-gray-100 p-6 hover:border-gold/30 hover:shadow-sm transition-all duration-200"
              >
                <h2 className="text-xl font-bold text-headline mb-2">{service.title}</h2>
                <p className="text-body text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Local Roofing Guidance</p>
              <h2 className="section-heading mb-5">{area.localHeading}</h2>
              <p className="text-body text-sm leading-relaxed mb-4">
                {area.localContent}
              </p>
              <ul className="space-y-2.5">
                {area.localSignals.map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                    <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-brand bg-cream border border-gray-100 p-6 md:p-7">
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
              <h2 className="text-2xl font-bold text-headline mb-6">{area.name} Roofing FAQs</h2>
              <FaqAccordion items={faqs} variant="light" />
            </div>
          </div>
        </div>
      </section>

      <LocalSeoLinks
        title={`Roofing services near ${area.name}`}
        description={`Compare PRC 13 Roofing services for ${area.name} and nearby Sacramento communities, including repair, replacement, emergency leak response, inspections, metal roofing, and recent project examples.`}
      />

      <section className="bg-charcoal-dark py-12 md:py-16 mobile-section-bottom md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Schedule an Inspection</p>
              <h2 className="text-3xl font-bold text-white mb-4">Need a Roofer in {area.name}?</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                {area.cta} Tell us what you are seeing and we will help you schedule an inspection, roof repair assessment, or replacement estimate.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors">
                  <Phone size={16} /> Or call: {PHONE_DISPLAY}
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors">
                  Contact PRC 13 <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <LeadForm sourcePage={`service-area-${area.slug}`} variant="full" hideEmail hideReason compactSpacing />
          </div>
        </div>
      </section>
    </>
  );
}
