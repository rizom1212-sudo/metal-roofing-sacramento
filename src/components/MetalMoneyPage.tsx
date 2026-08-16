import { Phone, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { handleSamePageAnchorClick } from '../lib/scroll';
import LeadForm from './LeadForm';
import HeroLeadFormPanel from './HeroLeadFormPanel';
import TelLink from './TelLink';
import { LICENSE_SHORT, OPERATOR_DISCLOSURE, OPERATOR_RATING_LINE, PHONE_DISPLAY } from '../data/site';
import Breadcrumbs from './Breadcrumbs';
import FaqAccordion from './FaqAccordion';
import HeroBackground from './HeroBackground';
import JsonLd from './JsonLd';
import AnswerSummary from './AnswerSummary';
import RetrievalAnswers from './RetrievalAnswers';
import type { MetalMoneyPageContent } from '../data/metalMoneyPages';

interface MetalMoneyPageProps {
  page: MetalMoneyPageContent;
}

export default function MetalMoneyPage({ page }: MetalMoneyPageProps) {
  const quoteId = `${page.id}-quote`;

  return (
    <>
      <JsonLd
        faqs={page.faqs}
        pageName={page.pageName}
        schemaType="Service"
        serviceName={page.serviceName}
        serviceDescription={page.serviceDescription}
        primaryImage={page.primaryImage}
        breadcrumbs={[
          { label: 'Metal Roofing', href: '/metal-roofing' },
          { label: page.h1 },
        ]}
      />

      <section className="relative bg-charcoal-dark text-white overflow-hidden lg:min-h-[75vh]">
        <HeroBackground image={page.primaryImage} alt={page.heroImageAlt} priority />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(15,20,28,0.93) 0%, rgba(15,20,28,0.75) 50%, rgba(15,20,28,0.35) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-24 md:pt-24 md:pb-28 lg:py-28 w-full">
          <Breadcrumbs
            items={[
              { label: 'Metal Roofing', href: '/metal-roofing' },
              { label: page.h1 },
            ]}
          />
          <div className="flex flex-col lg:block">
            <div className="max-w-2xl">
              <p className="brand-kicker brand-kicker-light mb-5">{page.heroKicker}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                {page.h1}
                {page.h1Accent ? (
                  <>
                    <br />
                    <span className="text-gold">{page.h1Accent}</span>
                  </>
                ) : null}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-xl">{page.heroIntro}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xl">{OPERATOR_DISCLOSURE}</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <TelLink location={page.id} className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold">
                  <Phone size={18} /> Call {PHONE_DISPLAY}
                </TelLink>
                <a
                  href={`#${quoteId}`}
                  onClick={e => handleSamePageAnchorClick(e, quoteId)}
                  className="inline-flex items-center justify-center gap-2 btn-outline py-4 px-8 text-base font-semibold"
                >
                  {page.ctaLabel} <ArrowRight size={18} />
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
                <span className="flex items-center gap-1.5"><Shield size={13} className="text-gold" /> {LICENSE_SHORT}</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={13} className="text-gold" /> Written findings before work</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mt-4 max-w-xl">{OPERATOR_RATING_LINE}</p>
            </div>
            <HeroLeadFormPanel
              sourcePage={`${page.sourcePage}-hero`}
              title={page.formTitle}
              subtitle={page.formSubtitle}
              submitLabel={page.ctaLabel}
              defaultReason={page.defaultReason}
            />
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnswerSummary title={page.answerTitle} points={page.answerPoints}>
            {page.answer}
          </AnswerSummary>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Who it is for</p>
              <h2 className="section-heading mb-4">{page.whoForTitle}</h2>
              <p className="text-body text-sm leading-relaxed">{page.whoFor}</p>
            </div>
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Problems and intent</p>
              <h2 className="section-heading mb-4">{page.problemsTitle}</h2>
              <ul className="space-y-2.5">
                {page.problems.map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                    <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {page.sections.map((section, index) => (
        <section key={section.heading} className={index % 2 === 0 ? 'bg-white py-16' : 'bg-cream py-16'}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="section-heading mb-5">{section.heading}</h2>
            {section.paragraphs.map(paragraph => (
              <p key={paragraph.slice(0, 48)} className="text-body text-sm leading-relaxed mb-4 max-w-3xl">
                {paragraph}
              </p>
            ))}
            {section.list && (
              <ul className="space-y-2.5 max-w-3xl mt-2">
                {section.list.map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                    <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {page.process && page.processTitle && (
        <section className="bg-charcoal text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-3xl font-bold text-white mb-10">{page.processTitle}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {page.process.map((step, i) => (
                <div key={step.title}>
                  <div className="text-3xl font-bold text-gold/30 mb-2">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="font-bold text-white text-sm mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading mb-4">{page.decisionTitle}</h2>
          <p className="text-body text-sm leading-relaxed max-w-3xl mb-6">{page.decision}</p>
          {page.decisionItems && (
            <ul className="space-y-2.5 max-w-3xl">
              {page.decisionItems.map(item => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                  <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          )}
          <h2 className="section-heading mt-12 mb-4">{page.sacramentoTitle}</h2>
          <p className="text-body text-sm leading-relaxed max-w-3xl">{page.sacramento}</p>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Related metal services</p>
          <h2 className="section-heading mb-8">Continue to the right next page</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.related.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="card-brand bg-white border border-gray-100 p-5 hover:border-gold/30 hover:shadow-sm transition-all duration-200 group"
              >
                <h3 className="font-bold text-headline text-sm mb-2 group-hover:text-gold transition-colors">{link.label}</h3>
                <p className="text-body text-xs leading-relaxed">{link.note}</p>
                <span className="inline-flex items-center gap-1 text-gold text-xs font-semibold mt-3">
                  Open page <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RetrievalAnswers
        heading="Direct answers"
        items={page.retrieval}
      />

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Common questions</p>
          <h2 className="section-heading mb-8">{page.h1} FAQs</h2>
          <FaqAccordion items={page.faqs} variant="light" />
        </div>
      </section>

      <section id={quoteId} data-final-cta className="bg-charcoal-dark py-12 md:py-16 mobile-section-bottom md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Next step</p>
              <h2 className="text-3xl font-bold text-white mb-4">{page.finalCtaTitle}</h2>
              <p className="text-gray-400 leading-relaxed mb-6">{page.finalCtaBody}</p>
              <p className="text-gray-500 text-sm mb-6">{OPERATOR_DISCLOSURE}</p>
              <TelLink location={`${page.id}-final`} className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors">
                <Phone size={16} /> Or call directly: {PHONE_DISPLAY}
              </TelLink>
            </div>
            <LeadForm
              sourcePage={page.sourcePage}
              variant="full"
              hideEmail
              compactSpacing
              submitLabel={page.ctaLabel}
              defaultReason={page.defaultReason}
            />
          </div>
        </div>
      </section>
    </>
  );
}
