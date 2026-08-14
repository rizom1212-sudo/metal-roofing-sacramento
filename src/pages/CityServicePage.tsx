import { Link, useLocation } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight, Shield, Award, BookOpen, MapPin } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import FaqAccordion from '../components/FaqAccordion';
import GalleryStrip from '../components/GalleryStrip';
import { filterGalleryByCity, filterGalleryByCategory } from '../data/gallery';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroLeadFormPanel from '../components/HeroLeadFormPanel';
import HeroBackground from '../components/HeroBackground';
import JsonLd from '../components/JsonLd';
import OptimizedImage from '../components/OptimizedImage';
import AnswerSummary from '../components/AnswerSummary';
import LocalSeoLinks from '../components/LocalSeoLinks';
import { PRIMARY_CTA } from '../data/cta';
import { handleSamePageAnchorClick } from '../lib/scroll';
import { renderBlogInlineLinks } from '../lib/renderBlogInlineLinks';
import { getCityServicePage } from '../data/cityServicePages';
import TelLink from '../components/TelLink';
import { PHONE_DISPLAY } from '../data/site';
import NotFound from './NotFound';

export default function CityServicePage() {
  const { pathname } = useLocation();
  const page = getCityServicePage(pathname);

  if (!page) {
    return <NotFound />;
  }

  const pageTitle = `${page.headline} ${page.headlineAccent}`.trim();
  const breadcrumbItems = [
    { label: page.parentLabel, href: page.parentPath },
    { label: `${page.cityName}, CA` },
  ];
  const localHirePhotos = filterGalleryByCategory(
    page.galleryCategory,
    filterGalleryByCity(page.cityName),
  );

  return (
    <>
      <JsonLd
        faqs={page.faqs}
        pageName={pageTitle}
        schemaType="Service"
        serviceName={pageTitle}
        serviceDescription={page.subheadline}
        primaryImage={page.heroImage}
        servedAreas={[page.cityName]}
        breadcrumbs={breadcrumbItems}
      />

      <section className="relative bg-charcoal-dark text-white overflow-hidden lg:min-h-[75vh]">
        <HeroBackground image={page.heroImage} alt={page.heroAlt} />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(15,20,28,0.93) 0%, rgba(15,20,28,0.75) 50%, rgba(15,20,28,0.35) 100%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-24 md:pt-24 md:pb-28 lg:py-28 w-full">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="flex flex-col lg:block">
            <div className="max-w-2xl">
              <span className="inline-block text-xs bg-gold text-white px-3 py-1 font-semibold uppercase tracking-wider mb-5 rounded-brand">
                {page.badge}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                {page.headline}
                <br />
                <span className="text-gold">{page.headlineAccent}</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">{page.subheadline}</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <TelLink
                  location={`city-${page.sourcePage}`}
                  className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold"
                >
                  <Phone size={18} /> Call {PHONE_DISPLAY}
                </TelLink>
                <a
                  href={`#${page.sourcePage}-cta`}
                  onClick={e => handleSamePageAnchorClick(e, `${page.sourcePage}-cta`)}
                  className="inline-flex items-center justify-center gap-2 btn-outline py-4 px-8 text-base font-semibold"
                >
                  {PRIMARY_CTA} <ArrowRight size={18} />
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
                <span className="flex items-center gap-1.5">
                  <Shield size={13} className="text-gold" /> Licensed &amp; Insured
                </span>
                <span className="flex items-center gap-1.5">
                  <Award size={13} className="text-gold" /> Free Inspections
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-gold" /> {page.cityName}, CA
                </span>
              </div>
            </div>
            <HeroLeadFormPanel sourcePage={`${page.sourcePage}-hero`} />
          </div>
        </div>
      </section>

      <div className="bg-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-wrap justify-center md:justify-between gap-4 text-sm font-medium">
            {page.trustBarItems.map(item => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle size={15} /> {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Overview</p>
              <AnswerSummary title={`${pageTitle}: quick answer`} points={page.answerPoints}>
                {page.answerSummary}
              </AnswerSummary>
              <h2 className="section-heading mb-5">{page.introHeading}</h2>
              {page.introParagraphs.map(paragraph => (
                <p key={paragraph.slice(0, 48)} className="text-body text-sm leading-relaxed mb-4">
                  {renderBlogInlineLinks(paragraph)}
                </p>
              ))}
              <ul className="space-y-2.5 mt-2">
                {page.introChecklist.map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                    <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-brand overflow-hidden">
              <OptimizedImage
                src={page.introImage}
                alt={page.introImageAlt}
                width={800}
                height={380}
                className="h-[380px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Local Context</p>
          <h2 className="section-heading mb-5">{page.localContextHeading}</h2>
          <div className="max-w-3xl">
            {page.localContextParagraphs.map(paragraph => (
              <p key={paragraph.slice(0, 48)} className="text-body text-sm leading-relaxed mb-4">
                {renderBlogInlineLinks(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Common Problems</p>
          <h2 className="section-heading mb-4">{page.problemsHeading}</h2>
          <p className="text-body text-sm leading-relaxed mb-8 max-w-3xl">{page.problemsIntro}</p>
          <ul className="grid md:grid-cols-2 gap-4">
            {page.problems.map(problem => (
              <li
                key={problem}
                className="flex items-start gap-3 bg-white border border-gray-100 rounded-brand p-4 text-sm text-body leading-relaxed"
              >
                <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Process</p>
          <h2 className="section-heading mb-4">{page.processHeading}</h2>
          <p className="text-body text-sm leading-relaxed mb-10 max-w-3xl">{page.processIntro}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {page.processSteps.map((step, index) => (
              <div key={step.title} className="border border-gray-100 bg-cream rounded-brand p-6">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
                  Step {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="font-bold text-headline text-sm mb-2">{step.title}</h3>
                <p className="text-body text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Materials</p>
          <h2 className="section-heading mb-4">{page.materialsHeading}</h2>
          <p className="text-body text-sm leading-relaxed mb-8 max-w-3xl">{page.materialsIntro}</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {page.materials.map(material => (
              <div key={material.name} className="bg-white border border-gray-100 rounded-brand p-6">
                <h3 className="font-bold text-headline text-sm mb-2">{material.name}</h3>
                <p className="text-body text-xs leading-relaxed">{material.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="section-heading mb-10">{page.benefitsHeading}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {page.features.map(feature => (
              <div
                key={feature.title}
                className="card-brand bg-cream border border-gray-100 p-6 hover:border-gold/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gold mb-4" />
                <h3 className="font-bold text-headline text-sm mb-2">{feature.title}</h3>
                <p className="text-body text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {localHirePhotos.length > 0 && (
          <section className="bg-cream py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Verified Local Photos</p>
              <h2 className="section-heading mb-3">{page.galleryHeading}</h2>
              <p className="section-subheading max-w-2xl mb-8">
                Only gallery items tagged {page.cityName} in our project data appear here. Captions follow the recorded project type.
              </p>
              <GalleryStrip
                category={page.galleryCategory}
                city={page.cityName}
                limit={4}
                showLink
              />
            </div>
          </section>
      )}

      {page.resourceGuides.length > 0 && (
        <section className="bg-white py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-start gap-3 mb-6">
              <BookOpen size={22} className="text-gold flex-shrink-0 mt-1" aria-hidden />
              <div>
                <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Resources</p>
                <h2 className="section-heading mb-3">Helpful Guides Before You Hire</h2>
                <p className="text-body text-sm leading-relaxed max-w-3xl">
                  These articles support this {page.cityName}, California service page with educational detail. Use them
                  to prepare questions, then return here to schedule work.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {page.resourceGuides.map(resource => (
                <Link
                  key={resource.slug}
                  to={`/blog/${resource.slug}`}
                  className="card-brand bg-cream border border-gray-100 p-5 hover:border-gold/30 hover:shadow-sm transition-all duration-200 group"
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

      <section className="bg-cream py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
          <h2 className="section-heading mb-8">{page.faqHeading}</h2>
          <FaqAccordion items={page.faqs} variant="light" />
          {page.contextualLinkParagraphs.map(paragraph => (
            <p key={paragraph.slice(0, 40)} className="text-body text-sm leading-relaxed mt-8">
              {renderBlogInlineLinks(paragraph)}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Nearby Communities</p>
          <h2 className="section-heading mb-4">Also Serving Nearby California Cities</h2>
          <p className="text-body text-sm leading-relaxed mb-6 max-w-3xl">
            PRC 13 Roofing serves {page.cityName}, CA and nearby Sacramento County communities. Explore local hubs or
            return to our parent {page.parentLabel.toLowerCase()} page for regional service details.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <Link
              to={page.parentPath}
              className="inline-flex items-center gap-2 border border-gray-100 bg-cream px-4 py-3 text-sm font-semibold text-headline hover:border-gold/40 hover:text-gold transition-colors"
            >
              {page.parentLabel}
              <ArrowRight size={14} />
            </Link>
            <Link
              to={`/service-areas/${page.citySlug}`}
              className="inline-flex items-center gap-2 border border-gray-100 bg-cream px-4 py-3 text-sm font-semibold text-headline hover:border-gold/40 hover:text-gold transition-colors"
            >
              {page.cityName} Service Area
              <ArrowRight size={14} />
            </Link>
            {page.nearbyCities.map(city => (
              <Link
                key={city.href}
                to={city.href}
                className="inline-flex items-center gap-2 border border-gray-100 bg-cream px-4 py-3 text-sm font-semibold text-headline hover:border-gold/40 hover:text-gold transition-colors"
              >
                <MapPin size={14} className="text-gold" />
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LocalSeoLinks
        title={`${page.cityName}, CA Roofing Services`}
        description={`PRC 13 Roofing helps homeowners in ${page.cityName}, California compare repair, replacement, emergency help, and inspection options with clear local guidance.`}
      />

      <section id={`${page.sourcePage}-cta`} data-final-cta className="bg-charcoal-dark py-12 md:py-16 mobile-section-bottom md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Get Started</p>
              <h2 className="text-3xl font-bold text-white mb-4">{page.ctaHeading}</h2>
              <p className="text-gray-400 leading-relaxed mb-6">{page.ctaSubtext}</p>
              <ul className="space-y-2 mb-6">
                {page.ctaChecklist.map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle size={14} className="text-gold flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <TelLink
                location={`city-${page.sourcePage}-final`}
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors"
              >
                <Phone size={16} /> Or call: {PHONE_DISPLAY}
              </TelLink>
            </div>
            <LeadForm sourcePage={page.sourcePage} variant="full" hideEmail hideReason compactSpacing />
          </div>
        </div>
      </section>
    </>
  );
}
