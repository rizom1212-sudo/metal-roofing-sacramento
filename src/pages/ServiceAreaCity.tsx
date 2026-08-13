import { Link, useParams } from 'react-router-dom';
import { handleSamePageAnchorClick } from '../lib/scroll';
import { ArrowRight, CheckCircle, MapPin, Phone, BookOpen } from 'lucide-react';
import JsonLd from '../components/JsonLd';
import FaqAccordion, { type FaqItem } from '../components/FaqAccordion';
import AnswerSummary from '../components/AnswerSummary';
import Breadcrumbs from '../components/Breadcrumbs';
import LocalSeoLinks from '../components/LocalSeoLinks';
import LeadForm from '../components/LeadForm';
import ServiceAreaConversionSections from '../components/ServiceAreaConversionSections';
import { PRIMARY_CTA } from '../data/cta';
import TelLink from '../components/TelLink';
import { SERVICE_AREA_FORM_SECTION_ID } from '../data/serviceAreaConversion';
import { LICENSE_INSURED_LINE, PHONE_DISPLAY } from '../data/site';
import { serviceAreas } from '../data/serviceAreas';
import { blogPosts } from '../data/blog';
import { LOCAL_ROOFING_HUBS } from '../data/localRoofingHubs';
import { cityHubServiceCtaLabel, resolveCityHubServices } from '../data/cityHubServices';
import { SERVICE_HUB_RESOURCE_LIMIT } from '../data/internalLinking';
import { renderBlogInlineLinks } from '../lib/renderBlogInlineLinks';
import NotFound from './NotFound';

export default function ServiceAreaCity() {
  const { slug } = useParams<{ slug: string }>();
  const area = serviceAreas.find(item => item.slug === slug);

  if (!area) {
    return <NotFound />;
  }

  const faqs: FaqItem[] = area.faqs;
  const pageName = `${area.name} Roofing Services`;
  const hubServices = resolveCityHubServices(area.name, area.services);
  const localHub = LOCAL_ROOFING_HUBS[area.slug];
  const localResources = localHub
    ? blogPosts.filter(post => post.category === localHub.category).slice(0, SERVICE_HUB_RESOURCE_LIMIT)
    : [];
  const featured = area.featuredProgram;
  const heroLead = area.heroLead ?? 'Roofing Services in';
  const primaryCtaLabel = featured?.primaryCtaLabel ?? PRIMARY_CTA;

  return (
    <>
      <JsonLd
        faqs={faqs}
        pageName={pageName}
        schemaType="Service"
        serviceName={`Roofing Services in ${area.name}, CA`}
        serviceDescription={area.heroIntro}
        servedAreas={[area.name]}
        breadcrumbs={[
          { label: 'Service Areas', href: '/service-areas' },
          { label: area.name },
        ]}
        offers={
          featured
            ? [{ name: featured.offerSchemaName, description: featured.offerSchemaDescription }]
            : undefined
        }
      />

      <section className="bg-charcoal-dark text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Service Areas', href: '/service-areas' },
              { label: area.name },
            ]}
          />
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> Service Area</span>
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            {heroLead}
            <br />
            <span className="text-gold">{area.name}, CA</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-4">{area.heroIntro}</p>
          {featured ? (
            <p className="text-sm text-gray-400 mb-8">
              Last Updated: <span className="text-gray-200">{featured.lastUpdatedLabel}</span>
            </p>
          ) : (
            <div className="mb-8" />
          )}
          <div className="flex flex-col sm:flex-row gap-3">
            {featured ? (
              <>
                <a
                  href={`#${SERVICE_AREA_FORM_SECTION_ID}`}
                  onClick={e => handleSamePageAnchorClick(e, SERVICE_AREA_FORM_SECTION_ID)}
                  className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold"
                >
                  {primaryCtaLabel} <ArrowRight size={18} />
                </a>
                <TelLink location={`hero-service-area-${area.slug}`} className="inline-flex items-center justify-center gap-2 btn-outline py-4 px-8 text-base font-semibold">
                  <Phone size={18} /> Call {PHONE_DISPLAY}
                </TelLink>
              </>
            ) : (
              <>
                <TelLink location={`hero-service-area-${area.slug}`} className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold">
                  <Phone size={18} /> Call {PHONE_DISPLAY}
                </TelLink>
                <a
                  href={`#${SERVICE_AREA_FORM_SECTION_ID}`}
                  onClick={e => handleSamePageAnchorClick(e, SERVICE_AREA_FORM_SECTION_ID)}
                  className="inline-flex items-center justify-center gap-2 btn-outline py-4 px-8 text-base font-semibold"
                >
                  {primaryCtaLabel} <ArrowRight size={18} />
                </a>
              </>
            )}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300 mt-6">
            <span className="inline-flex items-center gap-1.5"><CheckCircle size={13} className="text-gold" /> {LICENSE_INSURED_LINE}</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle size={13} className="text-gold" /> Free roof inspections</span>
          </div>
        </div>
      </section>

      {featured && (
        <section className="bg-gold/10 border-b border-gold/20 py-10 md:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              <div>
                <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">{featured.programEyebrow}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-headline mb-4">{featured.programHeading}</h2>
                <p className="text-body text-sm leading-relaxed mb-4">{featured.programIntro}</p>
                <p className="text-headline text-sm font-semibold leading-relaxed mb-4">{featured.costShareStatement}</p>
                <ul className="space-y-2.5 mb-5">
                  {featured.programBullets.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                      <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-body text-xs leading-relaxed mb-4">{featured.programDisclaimer}</p>
                <a
                  href={featured.officialSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm hover:text-gold-dark transition-colors"
                >
                  {featured.officialSourceLabel} <ArrowRight size={14} />
                </a>
              </div>
              <div className="bg-white border border-gold/30 p-6 md:p-7 shadow-sm">
                <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">{featured.offerEyebrow}</p>
                <h2 className="text-2xl font-bold text-headline mb-3">{featured.offerHeading}</h2>
                <p className="text-headline text-base font-semibold leading-relaxed mb-3">{featured.offerStatement}</p>
                <p className="text-body text-sm leading-relaxed mb-6">{featured.offerSeparationNote}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`#${SERVICE_AREA_FORM_SECTION_ID}`}
                    onClick={e => handleSamePageAnchorClick(e, SERVICE_AREA_FORM_SECTION_ID)}
                    className="inline-flex items-center justify-center btn-gold py-3.5 px-6 text-sm font-semibold"
                  >
                    {featured.primaryCtaLabel}
                  </a>
                  <a
                    href={`#${SERVICE_AREA_FORM_SECTION_ID}`}
                    onClick={e => handleSamePageAnchorClick(e, SERVICE_AREA_FORM_SECTION_ID)}
                    className="inline-flex items-center justify-center border-2 border-charcoal text-charcoal font-semibold px-6 py-3.5 text-sm hover:bg-charcoal hover:text-white transition-colors"
                  >
                    {featured.secondaryCtaLabel}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-cream py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnswerSummary
            title={`${area.name} roofing: quick answer`}
            points={area.quickPoints}
          >
            {area.quickAnswer}
          </AnswerSummary>

          <div className="grid md:grid-cols-2 gap-5">
            {hubServices.map(service => (
              <Link
                key={service.href}
                to={service.href}
                className="card-brand bg-white border border-gray-100 p-6 hover:border-gold/30 hover:shadow-sm transition-all duration-200"
              >
                <h2 className="text-xl font-bold text-headline mb-2">{service.title}</h2>
                <p className="text-body text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm">
                  {cityHubServiceCtaLabel(service.title)} <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {featured && featured.answerBlocks.length > 0 && (
        <section className="bg-white py-14 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Quick Answers</p>
            <h2 className="section-heading mb-8">{area.name} Home Hardening and Roofing Questions</h2>
            <div className="space-y-8 max-w-3xl">
              {featured.answerBlocks.map(block => (
                <div key={block.question}>
                  <h3 className="text-xl font-bold text-headline mb-3">{block.question}</h3>
                  <p className="text-body text-sm leading-relaxed mb-3">{block.directAnswer}</p>
                  {block.detail && (
                    <p className="text-body text-sm leading-relaxed">{block.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={`${featured ? 'bg-cream' : 'bg-white'} py-14 md:py-16`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-8 md:mb-10">
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
          <div className="card-brand bg-cream border border-gray-100 p-5 md:p-7">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
            <h2 className="text-2xl font-bold text-headline mb-4 md:mb-5">{area.name} Roofing FAQs</h2>
            <FaqAccordion
              items={faqs}
              variant="light"
              compact
              columns={2}
              defaultVisibleCount={6}
            />
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Insurance Claims</p>
          <h2 className="section-heading mb-5">Insurance Claims Assistance in {area.name}</h2>
          <p className="text-body text-sm leading-relaxed mb-5">{area.insuranceClaimsIntro}</p>
          <ul className="space-y-2.5 mb-5">
            {area.insuranceClaimsBullets.map(item => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-body text-sm leading-relaxed">{area.insuranceClaimsClosing}</p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Roofing Guidance</p>
          <h2 className="section-heading mb-8">Should You Repair or Replace Your Roof?</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 border-2 border-green-200 bg-green-50">
              <h3 className="font-bold text-base mb-4 text-green-800">Repair may make sense when</h3>
              <ul className="space-y-2">
                {area.repairWhenPoints.map(point => (
                  <li key={point} className="flex items-start gap-2 text-sm text-body">
                    <CheckCircle size={14} className="mt-0.5 flex-shrink-0 text-green-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 border-2 border-gold/30 bg-gold/5">
              <h3 className="font-bold text-base mb-4 text-gold-dark">Replacement may make sense when</h3>
              <ul className="space-y-2">
                {area.replaceWhenPoints.map(point => (
                  <li key={point} className="flex items-start gap-2 text-sm text-body">
                    <CheckCircle size={14} className="mt-0.5 flex-shrink-0 text-gold" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-body text-sm leading-relaxed">{area.repairReplaceClosing}</p>
        </div>
      </section>

      {area.educationalSection && (
        <section className="bg-cream py-14 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
                {area.educationalSection.eyebrow}
              </p>
              <h2 className="section-heading mb-5">{area.educationalSection.heading}</h2>
              <div className="space-y-4">
                {area.educationalSection.paragraphs.map(paragraph => (
                  <p key={paragraph.slice(0, 48)} className="text-body text-sm leading-relaxed">
                    {renderBlogInlineLinks(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className={`${area.educationalSection ? 'bg-white' : 'bg-cream'} py-14 md:py-16`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Nearby Communities</p>
          <h2 className="section-heading mb-5">Areas We Serve Around {area.name}</h2>
          <p className="text-body text-sm leading-relaxed mb-6">{area.nearbyAreasIntro}</p>
          <div className="flex flex-wrap gap-2">
            {area.nearbyAreas.map(item => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-gold/25 bg-white px-3.5 py-2 text-xs font-semibold text-headline shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={`${area.educationalSection ? 'bg-cream' : 'bg-white'} py-14 md:py-16`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Local Landmarks</p>
          <h2 className="section-heading mb-5">Roofing Services Near Local Landmarks</h2>
          <ul className="space-y-2.5 mb-5">
            {area.landmarks.map(item => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                <MapPin size={15} className="text-gold flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-body text-sm leading-relaxed">{area.landmarksIntro}</p>
        </div>
      </section>

      {localHub && localResources.length > 0 && (
        <section className="bg-cream py-14 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-start gap-3 mb-6">
              <BookOpen size={22} className="text-gold flex-shrink-0 mt-1" aria-hidden />
              <div>
                <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">{localHub.label}</p>
                <h2 className="section-heading mb-3">{localHub.heading}</h2>
                <p className="text-body text-sm leading-relaxed max-w-3xl">{localHub.intro}</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {localResources.map(resource => (
                <Link
                  key={resource.slug}
                  to={`/blog/${resource.slug}`}
                  className="card-brand bg-white border border-gray-100 p-5 hover:border-gold/30 hover:shadow-sm transition-all duration-200 group"
                >
                  <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-2">{resource.readTime}</p>
                  <h3 className="font-bold text-headline text-sm leading-snug mb-2 group-hover:text-gold transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-body text-xs leading-relaxed line-clamp-2">{resource.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-gold text-xs font-semibold mt-3">
                    Read article <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <LocalSeoLinks
        title={`Roofing services near ${area.name}`}
        description={`Compare PRC 13 Roofing services for ${area.name} and nearby Sacramento communities, including repair, replacement, emergency leak response, inspections, metal roofing, and recent project examples.`}
      />

      <ServiceAreaConversionSections
        cityName={area.name}
        inspectionIntro={area.inspectionIntro}
        trustIntro={area.trustIntro}
        ctaLabel={featured ? featured.primaryCtaLabel : undefined}
      />

      <section id={SERVICE_AREA_FORM_SECTION_ID} data-final-cta className="bg-charcoal-dark py-12 md:py-16 mobile-section-bottom md:pb-16 scroll-mt-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Schedule an Inspection</p>
              <h2 className="text-3xl font-bold text-white mb-4">Need a Roofer in {area.name}?</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                {area.cta} Tell us what you are seeing and we will help you schedule an inspection, roof repair assessment, or replacement estimate.
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <Link to="/contact" className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors">
                  Contact PRC 13 <ArrowRight size={14} />
                </Link>
              </div>
              <TelLink location={`service-area-${area.slug}-final`} className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors">
                <Phone size={15} /> Or call: {PHONE_DISPLAY}
              </TelLink>
            </div>
            <LeadForm sourcePage={`service-area-${area.slug}`} variant="full" hideEmail hideReason compactSpacing />
          </div>
        </div>
      </section>
    </>
  );
}
