import { Phone, CheckCircle, ArrowRight, Shield, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import LeadForm from './LeadForm';
import FaqAccordion, { type FaqItem } from './FaqAccordion';
import GalleryStrip from './GalleryStrip';
import Breadcrumbs from './Breadcrumbs';
import HeroLeadFormPanel from './HeroLeadFormPanel';
import HeroBackground from './HeroBackground';
import JsonLd from './JsonLd';
import OptimizedImage from './OptimizedImage';
import AnswerSummary from './AnswerSummary';
import LocalSeoLinks from './LocalSeoLinks';
import SacramentoGuideCallout from './SacramentoGuideCallout';
import { CTA_EMERGENCY_CALL, PRIMARY_CTA } from '../data/cta';
import { PHONE_DISPLAY } from '../data/site';
import TelLink from './TelLink';
import ReviewStrip from './ReviewStrip';
import { handleSamePageAnchorClick } from '../lib/scroll';
import { renderBlogInlineLinks } from '../lib/renderBlogInlineLinks';
import { type GalleryCategory } from '../data/gallery';

export interface ServiceFeature {
  title: string;
  desc: string;
}

export interface ServiceTemplateProps {
  /** Page meta */
  badge: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  /** Breadcrumb current page label (defaults to headline) */
  breadcrumbLabel?: string;

  /** Hero image URL */
  heroImage: string;
  /** Optional WebP hero (smaller LCP when present under /assets/) */
  heroWebp?: string;
  /** Descriptive alt text for the hero image */
  heroAlt?: string;

  /** Trust bar items (max 4) */
  trustBarItems: string[];

  /** Intro section */
  answerSummary?: string;
  answerPoints?: string[];
  introHeading: string;
  introParagraphs: string[];
  introChecklist: string[];
  introImage: string;
  introImageAlt: string;
  introImageClassName?: string;

  /** Benefits / features */
  benefitsHeading: string;
  features: ServiceFeature[];

  /** Gallery */
  galleryHeading: string;
  galleryCategory: GalleryCategory;

  /** FAQ */
  faqHeading: string;
  faqs: FaqItem[];

  /** CTA */
  ctaHeading: string;
  ctaSubtext: string;
  ctaChecklist: string[];
  sourcePage: string;
  showLocalSeoLinks?: boolean;
  sacramentoGuide?: { href: string; label: string };
  resourceGuides?: Array<{ slug: string; title: string; excerpt: string; readTime: string }>;
  resourceSectionHeading?: string;
  resourceSectionIntro?: string;
  /** Markdown-style internal links: [label](/path) */
  contextualLinkParagraphs?: string[];
}

export default function ServicePageTemplate({
  badge,
  headline,
  headlineAccent,
  subheadline,
  breadcrumbLabel,
  heroImage,
  heroWebp,
  heroAlt,
  trustBarItems,
  answerSummary,
  answerPoints = [],
  introHeading,
  introParagraphs,
  introChecklist,
  introImage,
  introImageAlt,
  introImageClassName = 'h-[380px]',
  benefitsHeading,
  features,
  galleryHeading,
  galleryCategory,
  faqHeading,
  faqs,
  ctaHeading,
  ctaSubtext,
  ctaChecklist,
  sourcePage,
  showLocalSeoLinks = true,
  sacramentoGuide,
  resourceGuides,
  resourceSectionHeading = 'Resources',
  resourceSectionIntro,
  contextualLinkParagraphs,
}: ServiceTemplateProps) {
  const crumbLabel = breadcrumbLabel ?? headline;

  const pageTitle = `${headline} ${headlineAccent}`.trim();

  return (
    <>
      <JsonLd
        faqs={faqs}
        pageName={pageTitle}
        schemaType="Service"
        serviceName={pageTitle}
        breadcrumbs={[{ label: crumbLabel }]}
      />
      {/* HERO */}
      <section className="relative bg-charcoal-dark text-white overflow-hidden lg:min-h-[75vh]">
        <HeroBackground image={heroImage} webpImage={heroWebp} alt={heroAlt} />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(15,20,28,0.93) 0%, rgba(15,20,28,0.75) 50%, rgba(15,20,28,0.35) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-24 md:pt-24 md:pb-28 lg:py-28 w-full">
          <Breadcrumbs items={[{ label: crumbLabel }]} />
          <div className="flex flex-col lg:block">
            <div className="max-w-2xl">
              <span className="inline-block text-xs bg-gold text-white px-3 py-1 font-semibold uppercase tracking-wider mb-5 rounded-brand">
                {badge}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                {headline}<br />
                <span className="text-gold">{headlineAccent}</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">{subheadline}</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <TelLink location={`hero-${sourcePage}`} className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold">
                  <Phone size={18} /> {sourcePage.includes('emergency') ? CTA_EMERGENCY_CALL : `Call ${PHONE_DISPLAY}`}
                </TelLink>
                <a
                  href={`#${sourcePage}-cta`}
                  onClick={e => handleSamePageAnchorClick(e, `${sourcePage}-cta`)}
                  className="inline-flex items-center justify-center gap-2 btn-outline py-4 px-8 text-base font-semibold"
                >
                  {PRIMARY_CTA} <ArrowRight size={18} />
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
                <span className="flex items-center gap-1.5"><Shield size={13} className="text-gold" /> Licensed &amp; Insured</span>
                <span className="flex items-center gap-1.5"><Award size={13} className="text-gold" /> Free Inspections</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={13} className="text-gold" /> Sacramento Area</span>
              </div>
            </div>
            <HeroLeadFormPanel sourcePage={`${sourcePage}-hero`} />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-wrap justify-center md:justify-between gap-4 text-sm font-medium">
            {trustBarItems.map(item => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle size={15} /> {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* INTRO */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Overview</p>
              {answerSummary && (
                <AnswerSummary title={`${pageTitle}: quick answer`} points={answerPoints}>
                  {answerSummary}
                </AnswerSummary>
              )}
              <h2 className="section-heading mb-5">{introHeading}</h2>
              {introParagraphs.map((p, i) => (
                <p key={i} className="text-body text-sm leading-relaxed mb-4">{p}</p>
              ))}
              <ul className="space-y-2.5 mt-2">
                {introChecklist.map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                    <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              {contextualLinkParagraphs?.map((p, i) => (
                <p key={i} className="text-body text-sm leading-relaxed mt-5">
                  {renderBlogInlineLinks(p)}
                </p>
              ))}
            </div>
            <div className="rounded-brand overflow-hidden">
              <OptimizedImage
                src={introImage}
                alt={introImageAlt}
                width={800}
                height={380}
                className={introImageClassName}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES / BENEFITS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="section-heading mb-10">{benefitsHeading}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {features.map(f => (
              <div key={f.title} className="card-brand bg-cream border border-gray-100 p-6 hover:border-gold/30 hover:shadow-sm transition-all duration-200">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mb-4" />
                <h3 className="font-bold text-headline text-sm mb-2">{f.title}</h3>
                <p className="text-body text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Recent Work</p>
          <h2 className="section-heading mb-8">{galleryHeading}</h2>
          <GalleryStrip category={galleryCategory} limit={4} showLink />
        </div>
      </section>

      {resourceGuides && resourceGuides.length > 0 && (
        <section className="bg-cream py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-start gap-3 mb-6">
              <BookOpen size={22} className="text-gold flex-shrink-0 mt-1" aria-hidden />
              <div>
                <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">{resourceSectionHeading}</p>
                <h2 className="section-heading mb-3">Learn Before You Call</h2>
                {resourceSectionIntro && (
                  <p className="text-body text-sm leading-relaxed max-w-3xl">{resourceSectionIntro}</p>
                )}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {resourceGuides.map(resource => (
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

      <section className="bg-cream py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3 text-center">Customer Reviews</p>
          <h2 className="section-heading text-center mb-8">What Sacramento Homeowners Say</h2>
          <ReviewStrip count={3} variant="light" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
          <h2 className="section-heading mb-8">{faqHeading}</h2>
          <FaqAccordion items={faqs} variant="light" />
        </div>
      </section>

      {sacramentoGuide && <SacramentoGuideCallout href={sacramentoGuide.href} label={sacramentoGuide.label} />}

      {showLocalSeoLinks && <LocalSeoLinks />}

      {/* CTA */}
      <section data-final-cta id={`${sourcePage}-cta`} className="bg-charcoal-dark py-12 md:py-16 mobile-section-bottom md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Get Started</p>
              <h2 className="text-3xl font-bold text-white mb-4">{ctaHeading}</h2>
              <p className="text-gray-400 leading-relaxed mb-6">{ctaSubtext}</p>
              <ul className="space-y-2 mb-6">
                {ctaChecklist.map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle size={14} className="text-gold flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <TelLink location={`final-${sourcePage}`} className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors">
                <Phone size={16} /> Or call: {PHONE_DISPLAY}
              </TelLink>
            </div>
            <LeadForm sourcePage={sourcePage} variant="full" hideEmail hideReason compactSpacing />
          </div>
        </div>
      </section>
    </>
  );
}
