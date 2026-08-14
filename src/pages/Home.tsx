import { Link } from 'react-router-dom';
import {
  Phone,
  Star,
  Shield,
  ArrowRight,
  FileText,
  MapPin,
} from 'lucide-react';
import GoogleReviewsLink from '../components/GoogleReviewsLink';
import HeroLeadFormPanel from '../components/HeroLeadFormPanel';
import TelLink from '../components/TelLink';
import {
  BRAND_NAME,
  OPERATOR_DISCLOSURE,
  GOOGLE_MAPS_EMBED_URL,
  LICENSE_CONTRACTOR_LINE,
  LICENSE_SHORT,
  OPERATOR_RATING_LINE,
  PHONE_DISPLAY,
  PHONE_SMS,
  BUSINESS_ENTITY_NAME,
} from '../data/site';
import { trackClickToSms } from '../lib/analytics';
import FaqAccordion, { type FaqItem } from '../components/FaqAccordion';
import { serviceAreas } from '../data/serviceAreas';
import { PRIMARY_CTA } from '../data/cta';
import HeroBackground from '../components/HeroBackground';
import JsonLd from '../components/JsonLd';
import OptimizedImage from '../components/OptimizedImage';
import { ASSETS } from '../data/assets';
import { getServicesMenuItems, getNavHref } from '../data/services';
import GalleryStrip from '../components/GalleryStrip';
import RetrievalAnswers from '../components/RetrievalAnswers';
import { blogPosts } from '../data/blog';
import { METAL_CLUSTER_CATEGORY } from '../data/blogMetalRoofingCluster';

const HOME_FINAL_CTA_IMAGE = '/assets/brand/home-final-cta-bg.webp';
const metalGuides = blogPosts.filter(post => post.category === METAL_CLUSTER_CATEGORY).slice(0, 6);
const serviceCards = getServicesMenuItems();

const homeFaqs: FaqItem[] = [
  {
    question: 'What metal roofing services are available in Sacramento?',
    answer:
      'Metal Roofing Sacramento covers metal roof installation, replacement, repair, standing seam systems, residential and commercial metal roofs, and metal roof inspections. Each service has its own page.',
  },
  {
    question: 'Who installs metal roofs in Sacramento?',
    answer:
      `PRC 13 Roofing Inc., ${LICENSE_SHORT}, installs metal roofs and operates this specialist website. There is not a separate Metal Roofing Sacramento contractor license.`,
  },
  {
    question: 'Does Metal Roofing Sacramento install standing seam roofs?',
    answer:
      'Yes. PRC 13 installs standing seam as well as corrugated and exposed-fastener ribbed panels in steel and aluminum options. Standing seam is the concealed-fastener premium profile.',
  },
  {
    question: 'Can an existing roof be replaced with metal?',
    answer:
      'Often yes, after inspection. Full tear-off so the deck can be inspected is the usual approach. Overlay is only considered when conditions and product requirements allow.',
  },
  {
    question: 'Does the company repair metal roofs?',
    answer:
      'Yes. Localized seam, flashing, panel, fastener, and penetration problems can be repaired when the rest of the metal system is sound.',
  },
  {
    question: 'Does the company work on homes and commercial buildings?',
    answer:
      'Yes. Residential metal roofing is for houses. Commercial metal roofing is for buildings where metal systems fit — not TPO or EPDM membranes.',
  },
  {
    question: 'Who is the licensed contractor behind Metal Roofing Sacramento?',
    answer:
      `${OPERATOR_DISCLOSURE} Google reviews and the Google Business Profile belong to PRC 13 Roofing Inc.`,
  },
  {
    question: 'What areas around Sacramento are served?',
    answer:
      'The greater Sacramento region, including Roseville, Rocklin, Folsom, Rancho Cordova, Elk Grove, Granite Bay, El Dorado Hills, Orangevale, Lincoln, Woodland, Davis, Florin, and Colfax. Each city hub explains local metal-roofing context.',
  },
  {
    question: 'Are metal roof inspections free?',
    answer:
      'Standard residential metal roof inspections are free with written findings and no obligation. Commercial metal inspections are scheduled when you contact us.',
  },
  {
    question: 'Is financing available?',
    answer:
      'Financing may be available on qualifying projects. Eligibility depends on the lender and project scope. Ask during inspection.',
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-gold text-gold" />
      ))}
    </div>
  );
}

const processSteps = [
  { title: 'Inspection and evaluation', desc: 'Review the existing covering or metal system, deck clues when accessible, and whether repair or a new metal roof is the honest path.' },
  { title: 'System and project planning', desc: 'Choose profile — standing seam or another metal system PRC 13 installs — plus underlayment, flashings, and ventilation as they apply to your roof.' },
  { title: 'Preparation', desc: 'Tear-off is the usual approach so the deck can be inspected. Overlay is only considered when conditions and product requirements allow.' },
  { title: 'Installation', desc: 'Panels go on with attention to layout, fastening or clips, and expansion. Many Sacramento residential metal jobs finish in about two to three days. Larger roofs take longer.' },
  { title: 'Flashing and detail work', desc: 'Walls, valleys, penetrations, ridges, and edges are where metal roofs succeed or leak. Those details are part of the job, not extras.' },
  { title: 'Final inspection', desc: 'We walk the finished work with you before the project is considered complete.' },
];

export default function Home() {
  return (
    <>
      <JsonLd faqs={homeFaqs} pageName={`${BRAND_NAME} | Metal Roofing Installation, Replacement & Repair`} />

      <section className="relative bg-charcoal-dark overflow-hidden md:min-h-screen">
        <HeroBackground
          priority
          alt="Metal roofing on a Sacramento area home"
          imageClassName="hero-mobile-roof-focus object-[58%_40%] md:object-[58%_center] contrast-[1.06] saturate-[1.06]"
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: 'linear-gradient(112deg, rgba(5,14,26,0.82) 0%, rgba(5,14,26,0.72) 40%, rgba(5,14,26,0.28) 72%, rgba(5,14,26,0.10) 100%)' }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{ background: 'linear-gradient(to right, rgba(15,20,28,0.88) 0%, rgba(15,20,28,0.70) 38%, rgba(15,20,28,0.20) 65%, rgba(15,20,28,0.05) 100%)' }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{ background: 'linear-gradient(to bottom, rgba(10,14,20,0.42) 0%, rgba(10,14,20,0.10) 30%, rgba(10,14,20,0.0) 60%)' }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{ background: 'linear-gradient(to top, rgba(10,14,20,0.62) 0%, rgba(10,14,20,0.16) 18%, rgba(10,14,20,0.0) 36%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-[calc(var(--prc13-header-offset,104px)+1rem)] pb-10 sm:pb-14 md:pt-[176px] md:pb-24 lg:pt-[180px] lg:pb-28 w-full md:min-h-screen flex items-center">
          <div className="flex flex-col lg:block">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-gold/18 border border-gold/40 px-4 py-2 mb-4 md:px-5 md:py-2.5 md:mb-6">
                <StarRating />
                <span className="text-gold text-sm sm:text-base font-bold">
                  {OPERATOR_RATING_LINE}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 md:mb-4">
                Metal Roofing in Sacramento, CA
              </h1>
              <p className="text-white text-xl sm:text-2xl font-semibold leading-snug mb-3 md:mb-4 max-w-xl">
                Installation, Replacement &amp; Repair
              </p>
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-5 md:mb-8 max-w-xl">
                Standing seam, residential and commercial metal roofs, and metal inspections across the greater Sacramento area. {OPERATOR_DISCLOSURE}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-5 md:mb-6">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold">
                  {PRIMARY_CTA}
                  <ArrowRight size={18} />
                </Link>
                <TelLink location="home" className="inline-flex items-center justify-center gap-2 border border-white/35 bg-white/8 text-white hover:bg-white/14 font-semibold rounded-brand py-4 px-8 text-base">
                  <Phone size={18} /> Call {PHONE_DISPLAY}
                </TelLink>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-200">
                <span className="flex items-center gap-1.5"><Shield size={14} className="text-gold flex-shrink-0" /> {LICENSE_CONTRACTOR_LINE}</span>
                <span className="flex items-center gap-1.5"><FileText size={14} className="text-gold flex-shrink-0" /> Written findings before work</span>
              </div>
            </div>
            <HeroLeadFormPanel
              sourcePage="home-hero"
              title="Get a Metal Roof Estimate"
              subtitle="Request a metal roof inspection and written findings. We aim to schedule during normal business hours."
              className="mt-5 lg:mt-0"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Licensed operator</p>
          <h2 className="section-heading mb-4">Operated by a licensed Sacramento-area contractor</h2>
          <p className="text-body text-base leading-relaxed max-w-3xl mb-4">
            {OPERATOR_DISCLOSURE} {BUSINESS_ENTITY_NAME} is the California licensed contractor that performs the work. Google reviews and the Google Business Profile belong to PRC 13 — not a separate Metal Roofing Sacramento listing.
          </p>
          <GoogleReviewsLink variant="button" />
        </div>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Core services</p>
          <h2 className="section-heading mb-3">Metal roofing services in Sacramento</h2>
          <p className="section-subheading mb-10 max-w-2xl">
            Seven dedicated pages, plus the{' '}
            <Link to="/metal-roofing" className="text-gold font-semibold hover:text-gold-dark">metal roofing hub</Link>.
            Pick the job you actually have.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceCards.map(service => (
              <Link
                key={service.id}
                to={getNavHref(service)}
                className="group card-brand bg-white border border-gray-100 p-6 h-full min-h-[11.5rem] flex flex-col hover:border-gold/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold transition-colors"
              >
                <h3 className="font-bold text-headline mb-2 group-hover:text-gold transition-colors">{service.name}</h3>
                <p className="text-body text-sm leading-relaxed mb-3">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold mt-auto">
                  Open page <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Sacramento climate</p>
            <h2 className="section-heading mb-4">Why metal roofing in Sacramento?</h2>
            <p className="text-body text-sm leading-relaxed mb-4">
              Long dry summers and sudden winter rain are hard on aging asphalt. Metal reflects solar energy compared with dark, worn shingles. That climate fit only shows up when underlayment, flashing, and ventilation are part of the assembly.
            </p>
            <p className="text-body text-sm leading-relaxed mb-4">
              Fire performance is discussed as an assembly rating — many metal systems can be specified as Class A — not as a guarantee about insurance, rebates, or wildfire outcomes. Durability and lower field-covering maintenance are reasons owners choose metal; they are not a promise of zero maintenance. PRC 13 does not offer metal cleaning.
            </p>
            <Link to="/blog/metal-roofing-sacramento-climate" className="text-gold font-semibold text-sm hover:text-gold-dark">
              Metal roofing and Sacramento climate →
            </Link>
          </div>
          <OptimizedImage
            src={ASSETS.metalRoofing('metal-roof-smart-investment.webp')}
            alt="Metal roof on a Sacramento-area home"
            width={800}
            height={420}
            className="h-[320px] md:h-[420px]"
          />
        </div>
      </section>

      <section className="bg-charcoal text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <OptimizedImage
            src="/assets/featured-project/standing-seam-metal-roof-01.png"
            alt="Standing seam metal roof panels"
            width={800}
            height={420}
            className="h-[280px] md:h-[380px]"
          />
          <div>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Specialty profile</p>
            <h2 className="text-3xl font-bold mb-4">Standing seam metal roofing</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Vertical panels, raised seams, concealed fasteners. PRC 13 also installs corrugated and ribbed exposed-fastener systems. Standing seam is the profile many homeowners want when they want a finished architectural surface rather than a field of screw heads.
            </p>
            <Link to="/standing-seam-metal-roofing" className="inline-flex items-center gap-2 text-gold font-semibold">
              Standing seam metal roofing <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading mb-8">Homes and commercial buildings</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <Link to="/residential-metal-roofing" className="card-brand bg-white border border-gray-100 p-8 hover:border-gold/40 transition-colors group">
              <h3 className="text-2xl font-bold text-headline mb-3 group-hover:text-gold">Residential metal roofing</h3>
              <p className="text-body text-sm leading-relaxed mb-4">
                Metal roofs for houses: replacement, new construction, standing seam, colors and styles without a fake manufacturer catalog, and homeowner FAQs.
              </p>
              <span className="text-gold text-sm font-semibold inline-flex items-center gap-1">Residential metal <ArrowRight size={14} /></span>
            </Link>
            <Link to="/commercial-metal-roofing" className="card-brand bg-white border border-gray-100 p-8 hover:border-gold/40 transition-colors group">
              <h3 className="text-2xl font-bold text-headline mb-3 group-hover:text-gold">Commercial metal roofing</h3>
              <p className="text-body text-sm leading-relaxed mb-4">
                Metal systems for commercial and light-commercial buildings where metal is the right covering. This is not a TPO or EPDM page.
              </p>
              <span className="text-gold text-sm font-semibold inline-flex items-center gap-1">Commercial metal <ArrowRight size={14} /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">How a metal project runs</p>
          <h2 className="section-heading mb-8">Metal roofing process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {processSteps.map((step, index) => (
              <div key={step.title} className="border border-gray-100 bg-cream p-5">
                <p className="text-gold font-bold text-sm mb-2">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="font-bold text-headline mb-2">{step.title}</h3>
                <p className="text-body text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F1EE] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Projects</p>
          <h2 className="section-heading mb-3">Metal roofing work</h2>
          <p className="text-body text-sm mb-8 max-w-2xl">
            Gallery images below are tagged metal roofing. Shingle, tile, and membrane projects are not shown as metal.
          </p>
          <GalleryStrip category="Metal Roofing" limit={4} showLink />
        </div>
      </section>

      <section className="relative bg-[#ECEAE6] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Service area</p>
            <h2 className="text-2xl md:text-3xl font-bold text-headline mb-2">Greater Sacramento metal roofing</h2>
            <p className="text-body text-sm max-w-xl mx-auto leading-relaxed">
              Service-area contractor — no public storefront on this site. City hubs explain local metal-roofing context without inventing offices or projects.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-1.5 max-w-2xl mx-auto mb-8">
            {serviceAreas.map(area => (
              <Link
                key={area.slug}
                to={`/service-areas/${area.slug}`}
                className={`inline-flex items-center px-3 py-1.5 text-sm font-medium ${
                  area.slug === 'sacramento' ? 'bg-charcoal-dark text-white' : 'bg-[#2E3744] text-gray-200'
                } hover:text-gold`}
              >
                {area.name}
              </Link>
            ))}
          </div>
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-xs font-semibold text-gold uppercase tracking-widest mb-3 flex items-center justify-center gap-1.5">
              <MapPin size={14} /> {BUSINESS_ENTITY_NAME} on Google Maps
            </p>
            <div className="overflow-hidden rounded-brand shadow-md">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                className="w-full h-[240px] sm:h-[280px] md:h-[360px] block"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PRC 13 Roofing Inc. service area (operator of Metal Roofing Sacramento)"
              />
            </div>
          </div>
        </div>
      </section>

      <RetrievalAnswers
        heading="Direct answers about metal roofing in Sacramento"
        items={[
          {
            question: 'What metal roofing services are available in Sacramento?',
            answer: 'Installation, replacement, repair, standing seam, residential metal, commercial metal, and metal inspections — each on its own page.',
          },
          {
            question: 'Who is the licensed contractor?',
            answer: `${BUSINESS_ENTITY_NAME}, ${LICENSE_SHORT}, operates Metal Roofing Sacramento and performs the contracted work.`,
          },
          {
            question: 'Does the company install standing seam and work on homes and commercial buildings?',
            answer: 'Yes. Standing seam is a core profile. Residential and commercial metal are separate pages. Commercial metal is not TPO or EPDM.',
          },
        ]}
      />

      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Questions</p>
          <h2 className="section-heading mb-8">Metal roofing questions</h2>
          <FaqAccordion items={homeFaqs} variant="light" />
        </div>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Guides</p>
          <h2 className="section-heading mb-8">Metal roofing resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {metalGuides.map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="card-brand bg-white border border-gray-100 p-5 hover:border-gold/30 group">
                <h3 className="font-bold text-headline text-sm mb-2 group-hover:text-gold">{post.title}</h3>
                <p className="text-body text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/blog" className="text-gold font-semibold text-sm inline-flex items-center gap-1">
              All metal roofing articles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section data-final-cta className="relative overflow-hidden bg-charcoal-dark py-14 md:py-16 mobile-section-bottom">
        <img src={HOME_FINAL_CTA_IMAGE} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" aria-hidden />
        <div className="absolute inset-0 bg-black/65" aria-hidden />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Next step</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get a Metal Roof Estimate</h2>
          <p className="text-gray-400 leading-relaxed mb-4 max-w-xl mx-auto">
            Call or text PRC 13 Roofing during Monday through Friday business hours. {OPERATOR_DISCLOSURE}
          </p>
          <p className="text-gray-500 text-sm mb-8">{LICENSE_SHORT}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <TelLink location="home-final" className="inline-flex items-center justify-center gap-2 btn-gold px-8 py-4 text-base font-semibold">
              <Phone size={18} /> Call {PHONE_DISPLAY}
            </TelLink>
            <a
              href={PHONE_SMS}
              onClick={() => trackClickToSms('home-final')}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 text-base hover:border-gold hover:text-gold rounded-brand"
            >
              Text Us
            </a>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 text-gold text-sm font-semibold">
            Prefer a form? Contact page <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
