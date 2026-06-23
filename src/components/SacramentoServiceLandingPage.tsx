import type { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Shield } from 'lucide-react';
import { handleSamePageAnchorClick } from '../lib/scroll';
import Breadcrumbs from './Breadcrumbs';
import FaqAccordion from './FaqAccordion';
import HeroBackground from './HeroBackground';
import JsonLd from './JsonLd';
import AnswerSummary from './AnswerSummary';
import LeadForm from './LeadForm';
import type { SacramentoLandingPageConfig, SacramentoLandingSection } from '../data/sacramentoLandingPages';
import { PHONE_DISPLAY, PHONE_TEL } from '../data/site';
import { PRIMARY_CTA } from '../data/cta';

const relatedLinks = [
  { label: 'Sacramento Service Area Guide', href: '/service-areas/sacramento' },
  { label: 'Roof Repair', href: '/roof-repair' },
  { label: 'Emergency Roof Repair', href: '/emergency-roof-repair' },
  { label: 'Roof Inspection', href: '/roof-inspection' },
  { label: 'Roof Replacement', href: '/roof-replacement' },
  { label: 'Contact PRC 13', href: '/contact' },
];

function SectionBlock({ section }: { section: SacramentoLandingSection }) {
  if (section.kind === 'insurance') {
    return (
      <section className="bg-charcoal text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">{section.eyebrow}</p>
            <h2 className="text-3xl font-bold text-white mb-4">{section.heading}</h2>
            <p className="text-gray-400 leading-relaxed">{section.body}</p>
          </div>
        </div>
      </section>
    );
  }

  const bgClass = section.bg === 'cream' ? 'bg-cream' : 'bg-white';

  if (section.kind === 'cards') {
    return (
      <section className={`${bgClass} py-14 md:py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">{section.eyebrow}</p>
          <h2 className="section-heading mb-4">{section.heading}</h2>
          {section.intro && <p className="section-subheading mb-8 max-w-3xl">{section.intro}</p>}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {section.cards.map(card => (
              <div
                key={card.title}
                className={`card-brand border border-gray-100 p-5 ${section.bg === 'cream' ? 'bg-white' : 'bg-cream'}`}
              >
                <h3 className="font-bold text-headline text-sm mb-2">{card.title}</h3>
                <p className="text-body text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.kind === 'split') {
    return (
      <section className={`${bgClass} py-14 md:py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">{section.eyebrow}</p>
          <h2 className="section-heading mb-4">{section.heading}</h2>
          {section.intro && <p className="section-subheading mb-8 max-w-3xl">{section.intro}</p>}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 border-2 border-green-200 bg-green-50">
              <h3 className="font-bold text-base mb-4 text-green-800">{section.leftTitle}</h3>
              <ul className="space-y-2">
                {section.leftItems.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-body">
                    <CheckCircle size={14} className="mt-0.5 flex-shrink-0 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 border-2 border-gold/30 bg-gold/5">
              <h3 className="font-bold text-base mb-4 text-gold-dark">{section.rightTitle}</h3>
              <ul className="space-y-2">
                {section.rightItems.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-body">
                    <CheckCircle size={14} className="mt-0.5 flex-shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {section.closing && <p className="text-body text-sm leading-relaxed max-w-3xl">{section.closing}</p>}
        </div>
      </section>
    );
  }

  return (
    <section className={`${bgClass} py-14 md:py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">{section.eyebrow}</p>
        <h2 className="section-heading mb-4">{section.heading}</h2>
        {section.paragraphs.map(paragraph => (
          <p key={paragraph} className="text-body text-sm leading-relaxed mb-4 max-w-3xl">
            {paragraph}
          </p>
        ))}
        {section.bullets && (
          <ul className="space-y-2.5">
            {section.bullets.map(item => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

interface SacramentoServiceLandingPageProps {
  config: SacramentoLandingPageConfig;
}

export default function SacramentoServiceLandingPage({ config }: SacramentoServiceLandingPageProps) {
  const scrollToForm = (event: MouseEvent<HTMLAnchorElement>) => {
    handleSamePageAnchorClick(event, config.formSectionId);
  };

  return (
    <>
      <JsonLd
        faqs={config.faqs}
        pageName={config.pageName}
        schemaType="Service"
        serviceName={config.serviceName}
        servedAreas={['Sacramento']}
        breadcrumbs={[
          config.breadcrumbParent,
          { label: 'Sacramento' },
        ]}
      />

      <section className="relative bg-charcoal-dark text-white overflow-hidden">
        <HeroBackground image={config.hero.heroImage} alt={config.hero.heroAlt} />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(15,20,28,0.94) 0%, rgba(15,20,28,0.82) 50%, rgba(15,20,28,0.40) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-24 md:pt-24 md:pb-28">
          <Breadcrumbs
            items={[
              config.breadcrumbParent,
              { label: 'Sacramento' },
            ]}
          />
          <div className="max-w-2xl">
            <span className="inline-block text-xs bg-gold text-white px-3 py-1 font-semibold uppercase tracking-wider mb-5 rounded-brand">
              {config.hero.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              {config.hero.h1}
              {config.hero.h1Accent && (
                <>
                  <br />
                  <span className="text-gold">{config.hero.h1Accent}</span>
                </>
              )}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">{config.hero.subheadline}</p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              {(config.hero.primaryCta === 'call-only' || config.hero.primaryCta === 'call-and-inspection') && (
                <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold">
                  <Phone size={18} /> Call {PHONE_DISPLAY}
                </a>
              )}
              {(config.hero.primaryCta === 'inspection-only' || config.hero.primaryCta === 'call-and-inspection') && (
                <a
                  href={`#${config.formSectionId}`}
                  onClick={scrollToForm}
                  className={`inline-flex items-center justify-center gap-2 py-4 px-8 text-base font-semibold ${
                    config.hero.primaryCta === 'inspection-only' ? 'btn-gold' : 'btn-outline'
                  }`}
                >
                  {PRIMARY_CTA} <ArrowRight size={18} />
                </a>
              )}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-300">
              {config.hero.trustItems.map(item => (
                <span key={item} className="flex items-center gap-1.5">
                  <Shield size={13} className="text-gold" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnswerSummary title={config.quickAnswer.title} points={[...config.quickAnswer.points]}>
            {config.quickAnswer.body}
          </AnswerSummary>
        </div>
      </section>

      {config.sections.map(section => (
        <SectionBlock key={`${section.kind}-${section.heading}`} section={section} />
      ))}

      <section className="bg-white py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
          <h2 className="section-heading mb-8">{config.faqHeading}</h2>
          <FaqAccordion items={config.faqs} variant="light" />
        </div>
      </section>

      <section className="bg-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Related Resources</p>
          <h2 className="text-2xl font-bold text-headline mb-5">More Sacramento Roofing Help</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {relatedLinks
              .filter(link => link.href !== config.path)
              .map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center justify-between gap-3 border border-gray-100 bg-white px-4 py-3 text-sm font-semibold text-headline hover:border-gold/40 hover:text-gold transition-colors"
                >
                  {link.label}
                  <ArrowRight size={14} />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section id={config.formSectionId} className="bg-charcoal-dark py-12 md:py-16 mobile-section-bottom md:pb-16 scroll-mt-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">{config.cta.eyebrow}</p>
              <h2 className="text-3xl font-bold text-white mb-4">{config.cta.heading}</h2>
              <p className="text-gray-400 leading-relaxed mb-6">{config.cta.subtext}</p>
              <ul className="space-y-2 mb-6">
                {config.cta.checklist.map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle size={14} className="text-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors">
                <Phone size={16} /> Or call: {PHONE_DISPLAY}
              </a>
            </div>
            <LeadForm
              sourcePage={config.sourcePage}
              variant="full"
              hideEmail
              hideReason
              compactSpacing
              submitLabel={config.cta.submitLabel}
            />
          </div>
        </div>
      </section>
    </>
  );
}
