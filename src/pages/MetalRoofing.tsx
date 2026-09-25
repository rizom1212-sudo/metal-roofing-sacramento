import { Phone, CheckCircle, ArrowRight, Shield, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { handleSamePageAnchorClick } from '../lib/scroll';
import LeadForm from '../components/LeadForm';
import HeroLeadFormPanel from '../components/HeroLeadFormPanel';
import TelLink from '../components/TelLink';
import { LICENSE_SHORT, OPERATOR_DISCLOSURE, PHONE_DISPLAY } from '../data/site';
import Breadcrumbs from '../components/Breadcrumbs';
import { PRIMARY_CTA } from '../data/cta';
import FaqAccordion, { type FaqItem } from '../components/FaqAccordion';
import ReviewStrip from '../components/ReviewStrip';
import GalleryStrip from '../components/GalleryStrip';
import HeroBackground from '../components/HeroBackground';
import JsonLd from '../components/JsonLd';
import MetalComparisonTable from '../components/MetalComparisonTable';
import OptimizedImage from '../components/OptimizedImage';
import AnswerSummary from '../components/AnswerSummary';
import LocalSeoLinks from '../components/LocalSeoLinks';
import SacramentoGuideCallout from '../components/SacramentoGuideCallout';
import RetrievalAnswers from '../components/RetrievalAnswers';
import { ASSETS } from '../data/assets';
import { METAL_CLUSTER_CATEGORY } from '../data/blogCategories';
import { blogSummaries } from '../data/blogSummaries';
import { SERVICE_HUB_RESOURCE_LIMIT } from '../data/internalLinking';
import { getOfferedServices, getNavHref } from '../data/services';

const hubFaqs: FaqItem[] = [
  {
    question: 'What metal roofing services do you provide?',
    answer:
      'Metal Roofing Sacramento covers metal roof installation, replacement, repair, standing seam systems, residential and commercial metal roofs, and metal roof inspections. Each service has its own page so you can go deep on the job you actually need.',
  },
  {
    question: 'Is metal roofing right for Sacramento’s climate?',
    answer:
      'Metal handles Sacramento summer heat well by reflecting solar energy compared with dark aging shingles, and it performs in winter rain when installed with proper underlayment and flashing.',
  },
  {
    question: 'How much more does metal roofing cost vs. shingles?',
    answer:
      'Metal typically costs more upfront than architectural shingles, often roughly 40 to 60% more depending on profile and complexity. Lifetime cost can be competitive because many metal systems are designed for decades of service when installed correctly. Quotes are written after inspection.',
  },
  {
    question: 'Is metal roofing noisy when it rains?',
    answer:
      'Modern metal roofing installed over solid decking with proper underlayment is generally not significantly louder indoors than shingles. Decking and insulation absorb most rain sound.',
  },
  {
    question: 'What metal roofing styles do you install?',
    answer:
      'We install standing seam, corrugated, and exposed-fastener ribbed metal panels in steel and aluminum options. Standing seam is the concealed-fastener premium profile. We show choices during consultation.',
  },
  {
    question: 'Who operates Metal Roofing Sacramento?',
    answer:
      'Metal Roofing Sacramento is operated by PRC 13 Roofing Inc., CA CSLB #1087153. PRC 13 is the licensed contractor that performs the work. This brand does not have a separate contractor license or a separate Google Business Profile.',
  },
  {
    question: 'Do you still offer shingle, tile, or TPO as primary services here?',
    answer:
      'This site is a metal-roofing specialist. Historical pages for other roofing types may still exist, but they are not the primary offerings. Start with the metal service that matches your project.',
  },
];

const metalResources = blogSummaries
  .filter(post => post.category === METAL_CLUSTER_CATEGORY)
  .slice(0, SERVICE_HUB_RESOURCE_LIMIT);

const childServices = getOfferedServices().filter(service => service.id !== 'metal-roofing');

export default function MetalRoofing() {
  return (
    <>
      <JsonLd
        faqs={hubFaqs}
        pageName="Compare Metal Roofing Services"
        schemaType="Service"
        serviceName="Metal Roofing"
        primaryImage={ASSETS.metalRoofing('Screenshot_2026-05-20_at_09.30.58.png')}
        breadcrumbs={[{ label: 'Metal Roofing' }]}
      />
      <section className="relative bg-charcoal-dark text-white overflow-hidden lg:min-h-[75vh]">
        <HeroBackground
          image={ASSETS.metalRoofing('Screenshot_2026-05-20_at_09.30.58.png')}
          alt="Metal roofing on a Sacramento area home"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(15,20,28,0.93) 0%, rgba(15,20,28,0.75) 50%, rgba(15,20,28,0.35) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-24 md:pt-24 md:pb-28 lg:py-28 w-full">
          <Breadcrumbs items={[{ label: 'Metal Roofing' }]} />
          <div className="flex flex-col lg:block">
            <div className="max-w-2xl">
              <p className="brand-kicker brand-kicker-light mb-5">Metal roofing services</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Compare Metal Roofing Services<br />
                <span className="text-gold">Systems and hire paths</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-xl">
                Choose installation, replacement, repair, standing seam, residential or commercial metal, or inspection — then open that page. This is the services and systems catalog, not the{' '}
                <Link to="/" className="text-gold font-semibold hover:text-gold-light transition-colors">
                  company homepage
                </Link>
                .
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xl">{OPERATOR_DISCLOSURE}</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <TelLink location="metal-hub" className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold"><Phone size={18} /> Call {PHONE_DISPLAY}</TelLink>
                <a
                  href="#metal-quote"
                  onClick={e => handleSamePageAnchorClick(e, 'metal-quote')}
                  className="inline-flex items-center justify-center gap-2 btn-outline py-4 px-8 text-base font-semibold"
                >
                  {PRIMARY_CTA} <ArrowRight size={18} />
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
                <span className="flex items-center gap-1.5"><Shield size={13} className="text-gold" /> {LICENSE_SHORT}</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={13} className="text-gold" /> Written quotes after inspection</span>
              </div>
            </div>
            <HeroLeadFormPanel sourcePage="metal-roofing-hero" defaultReason="metal-estimate" />
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnswerSummary
            title="What this metal roofing hub is for"
            points={[
              'One place to compare the full metal offering',
              'Specialized pages for install, replace, repair, and more',
              'Standing seam and other metal systems we actually install',
              'Licensed work performed by PRC 13 Roofing Inc.',
            ]}
          >
            This page compares metal roofing services and systems, then sends you to installation, replacement, repair, standing seam, residential metal, commercial metal, or inspection. Who we are lives on the{' '}
            <Link to="/" className="text-gold font-semibold hover:text-gold-dark transition-colors">
              company homepage
            </Link>
            .
          </AnswerSummary>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Why metal in this climate</p>
              <h2 className="section-heading mb-5">Sacramento heat and rain favor a well-installed metal roof</h2>
              <p className="text-body text-sm leading-relaxed mb-4">
                Sacramento summers accelerate granule loss and curling on aging asphalt shingles. Metal reflects solar energy instead of absorbing it the way dark, worn shingles often do. That climate fit only shows up when underlayment, flashing, and ventilation are part of the assembly.
              </p>
              <p className="text-body text-sm leading-relaxed mb-6">
                Quality metal systems are commonly marketed for decades of service. Actual lifespan depends on profile, coating, installation, and maintenance—not a guaranteed year count. Compare{' '}
                <Link to="/blog/metal-roofing-vs-shingles-sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">metal vs shingles</Link>
                {' '}or read about{' '}
                <Link to="/blog/metal-roofing-sacramento-climate" className="text-gold font-semibold hover:text-gold-dark transition-colors">metal in Sacramento’s climate</Link>.
              </p>
              <p className="text-body text-sm leading-relaxed">
                We serve{' '}
                <Link to="/service-areas/sacramento" className="text-gold font-semibold hover:text-gold-dark">Sacramento</Link>,{' '}
                <Link to="/service-areas/el-dorado-hills" className="text-gold font-semibold hover:text-gold-dark">El Dorado Hills</Link>,{' '}
                <Link to="/service-areas/folsom" className="text-gold font-semibold hover:text-gold-dark">Folsom</Link>, and{' '}
                <Link to="/service-areas/colfax" className="text-gold font-semibold hover:text-gold-dark">Colfax</Link>
                {' '}as a service-area contractor.
              </p>
            </div>
            <div className="relative rounded-brand overflow-hidden">
              <OptimizedImage
                src={ASSETS.metalRoofing('metal-roof-smart-investment.webp')}
                alt="Metal roof on a Sacramento home"
                width={800}
                height={400}
                className="h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Choose a metal service</p>
          <h2 className="text-3xl font-bold text-white mb-4">Specialized metal roofing pages</h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-3xl mb-10">
            Each page is written for a different customer intent. Use the hub to orient, then open the page that matches the work.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {childServices.map(service => (
              <Link
                key={service.id}
                to={getNavHref(service)}
                className="border border-white/10 bg-white/[0.04] p-6 rounded-brand hover:border-gold/40 transition-colors group"
              >
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-gold transition-colors">{service.shortName ?? service.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold">
                  Open {service.shortName ?? service.name} <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MetalComparisonTable />

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Recent work</p>
          <h2 className="section-heading mb-8">Project gallery</h2>
          <GalleryStrip category="Metal Roofing" limit={4} showLink />
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Licensed operator reviews</p>
          <h2 className="section-heading mb-3">What homeowners say about PRC 13 Roofing Inc.</h2>
          <p className="text-body text-sm leading-relaxed max-w-3xl mb-8">
            Google reviews belong to PRC 13 Roofing Inc., the licensed operator of Metal Roofing Sacramento — not a separate specialist listing.
          </p>
          <ReviewStrip count={3} variant="light" />
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-3 mb-6">
            <BookOpen size={22} className="text-gold flex-shrink-0 mt-1" aria-hidden />
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Metal roofing resources</p>
              <h2 className="section-heading mb-3">Guides that support these services</h2>
              <p className="text-body text-sm leading-relaxed max-w-3xl">
                Cost, standing seam, climate, installation steps, overlay vs tear-off, and repair-versus-replacement articles stay at their current URLs. Use them to learn, then hire through the matching money page.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {metalResources.map(resource => (
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

      <RetrievalAnswers
        heading="Metal roofing answers, in brief"
        items={[
          {
            question: 'Which metal page should I open first?',
            answer:
              'New system → installation. Old covering coming off → replacement. Existing metal leak → repair. Concealed-fastener profile → standing seam. House vs building → residential or commercial. Need findings → inspection.',
          },
          {
            question: 'Who does the roofing work?',
            answer:
              'PRC 13 Roofing Inc., CA CSLB #1087153, operates Metal Roofing Sacramento and performs the contracted work. Reviews and the Google Business Profile belong to PRC 13, not a separate specialist listing.',
          },
          {
            question: 'Tear-off or install over shingles?',
            answer:
              'Full tear-off so the deck can be inspected is the usual recommendation. Overlay is only considered when conditions and product requirements allow.',
          },
        ]}
      />

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Common questions</p>
          <h2 className="section-heading mb-8">Metal roofing FAQs</h2>
          <FaqAccordion items={hubFaqs} variant="light" />
        </div>
      </section>

      <SacramentoGuideCallout
        href="/service-areas/sacramento"
        label="View Sacramento roofing services"
      />
      <LocalSeoLinks
        title="Sacramento metal roofing services"
        description="Open the specialized metal page that matches installation, replacement, repair, standing seam, residential or commercial metal, or inspection."
      />

      <section id="metal-quote" data-final-cta className="bg-charcoal-dark py-12 md:py-16 mobile-section-bottom md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Get started</p>
              <h2 className="text-3xl font-bold text-white mb-4">Get a metal roof estimate</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Tell us what is going on with the roof. We inspect, explain the matching metal service, and provide a written quote before work is scheduled.
              </p>
              <p className="text-gray-500 text-sm mb-6">{OPERATOR_DISCLOSURE}</p>
              <TelLink location="metal-hub-final" className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors">
                <Phone size={16} /> Or call directly: {PHONE_DISPLAY}
              </TelLink>
            </div>
            <LeadForm sourcePage="metal-roofing" variant="full" hideEmail compactSpacing defaultReason="metal-estimate" />
          </div>
        </div>
      </section>
    </>
  );
}
