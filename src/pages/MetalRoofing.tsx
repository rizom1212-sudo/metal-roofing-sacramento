import { Phone, CheckCircle, ArrowRight, Shield, Award, Zap, Sun, Wrench, Timer, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { handleSamePageAnchorClick } from '../lib/scroll';
import LeadForm from '../components/LeadForm';
import HeroLeadFormPanel from '../components/HeroLeadFormPanel';
import TelLink from '../components/TelLink';
import { PHONE_DISPLAY } from '../data/site';
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
import { blogPosts } from '../data/blog';
import { METAL_CLUSTER_CATEGORY } from '../data/blogMetalRoofingCluster';
import { SERVICE_HUB_RESOURCE_LIMIT } from '../data/internalLinking';

const benefits = [
  { icon: Timer, title: '50+ Year Lifespan', desc: 'Outlasts asphalt shingles by 2 to 3 times. Many Sacramento homeowners install metal as their last roof ever.' },
  { icon: Sun, title: 'Energy Efficient', desc: "Metal reflects solar heat, which helps during Sacramento's hot summers. Lower cooling bills year round." },
  { icon: Shield, title: 'Wind & Fire Resistant', desc: 'Class A fire rating and rated for high winds. Metal stands up to California weather without buckling.' },
  { icon: Wrench, title: 'Virtually No Maintenance', desc: 'No granule loss, no curling shingles, no rotting. Metal holds up year after year with minimal upkeep.' },
  { icon: Award, title: 'Manufacturer Warranty', desc: 'Metal roofing products carry manufacturer material warranties. PRC 13 also provides a workmanship warranty on completed metal installations—terms are confirmed in writing with your project.' },
  { icon: Zap, title: 'Increases Home Value', desc: 'Metal roofing adds measurable resale value and boosts curb appeal with a modern or classic profile.' },
];

const metalServices = [
  {
    title: 'Metal Roof Installation',
    desc: 'New standing seam, corrugated, and ribbed metal roof systems installed with proper underlayment, flashing, and trim.',
  },
  {
    title: 'Metal Roof Replacement',
    desc: 'Full removal and replacement of aging shingles or failing roofing with a long life metal roof system.',
  },
  {
    title: 'Standing Seam Roofing',
    desc: 'Premium concealed fastener standing seam panels for homeowners who want durability, clean lines, and low maintenance.',
  },
];

const process = [
  { num: '01', title: 'Free Inspection & Consult', desc: 'Our roofing team evaluates your current roof, discusses metal options, and explains what the installation process looks like for your home.' },
  { num: '02', title: 'Material Selection', desc: "We walk you through panel styles like standing seam, corrugated, and ribbed, then help you choose what fits your home's architecture and budget." },
  { num: '03', title: 'Written Quote', desc: 'A clear, itemized written quote with no hidden fees. Financing may be available on qualifying projects.' },
  { num: '04', title: 'Installation', desc: 'Our crew installs your new metal roof with proper underlayment, flashing, trim, and fasteners. Many residential jobs take about 2 to 3 days; larger or complex roofs can take longer.' },
  { num: '05', title: 'Final Walkthrough', desc: 'We walk the finished job with you before we leave. You approve the work.' },
];

const faqs: FaqItem[] = [
  {
    question: 'Is metal roofing right for Sacramento\'s climate?',
    answer: 'Yes. Metal handles Sacramento summer heat well by reflecting solar energy compared with dark aging shingles, and it performs in winter rain when installed with proper underlayment and flashing.',
  },
  {
    question: 'How much more does metal roofing cost vs. shingles?',
    answer: 'Metal typically costs more upfront than architectural shingles—often roughly 40 to 60% more depending on profile and complexity. Lifetime cost can be competitive because many metal systems are designed for decades of service when installed correctly.',
  },
  {
    question: 'Is metal roofing noisy when it rains?',
    answer: 'Modern metal roofing installed over solid decking with proper underlayment is generally not significantly louder indoors than shingles. Decking and insulation absorb most rain sound.',
  },
  {
    question: 'Does metal roofing need special insulation?',
    answer: 'Metal itself is not insulation. Attic ventilation, underlayment, and the home’s existing insulation package matter more for comfort. We discuss roof assembly details during consultation so heat and condensation risks are addressed for your home.',
  },
  {
    question: 'How long does metal roofing last?',
    answer: 'Quality metal systems are commonly marketed for 50+ year service life, but actual lifespan depends on profile, coating, installation quality, and maintenance. PRC 13 explains expected performance for the specific product specified on your quote.',
  },
  {
    question: 'Can solar be mounted on a metal roof?',
    answer: 'Many metal roofs can accept solar mounting with the correct attachment method for the panel profile. Mounting details should be coordinated so penetrations and warranties are handled properly. We can discuss roof readiness during inspection; solar equipment itself is typically provided by a solar contractor.',
  },
  {
    question: 'What metal roofing styles do you install?',
    answer: 'We install standing seam, corrugated, and exposed fastener ribbed metal panels in steel and aluminum options. We show profile choices during your free consultation.',
  },
  {
    question: 'Can you replace my shingle roof with metal?',
    answer: 'Yes. Metal replacement usually includes removal so decking can be inspected, then underlayment, flashing, trim, and panel installation. Overlay over shingles is only considered when conditions allow and is not the default.',
  },
  {
    question: 'How long does metal roof installation take?',
    answer: 'Many Sacramento residential metal installations take about 2 to 3 days. Larger or more complex roofs may need additional time. Weather and material lead times also affect scheduling.',
  },
];

const metalResources = blogPosts
  .filter(post => post.category === METAL_CLUSTER_CATEGORY)
  .slice(0, SERVICE_HUB_RESOURCE_LIMIT);

export default function MetalRoofing() {
  return (
    <>
      <JsonLd
        faqs={faqs}
        pageName="Metal Roofing Built to Last"
        schemaType="Service"
        serviceName="Metal Roofing"
        primaryImage={ASSETS.metalRoofing('Screenshot_2026-05-20_at_09.30.58.png')}
        breadcrumbs={[{ label: 'Metal Roofing' }]}
      />
      {/* HERO */}
      <section className="relative bg-charcoal-dark text-white overflow-hidden lg:min-h-[75vh]">
        <HeroBackground
          image={ASSETS.metalRoofing('Screenshot_2026-05-20_at_09.30.58.png')}
          alt="Metal roof installation on a Sacramento area home"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(15,20,28,0.93) 0%, rgba(15,20,28,0.75) 50%, rgba(15,20,28,0.35) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-24 md:pt-24 md:pb-28 lg:py-28 w-full">
          <Breadcrumbs items={[{ label: 'Metal Roofing' }]} />
          <div className="flex flex-col lg:block">
            <div className="max-w-2xl">
              <span className="inline-block text-xs bg-gold text-white px-3 py-1 font-semibold uppercase tracking-wider mb-5 rounded-brand">50+ Year Lifespan</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Metal Roofing<br />
                <span className="text-gold">Built to Last a Lifetime</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                Premium standing seam and corrugated metal roofing for Sacramento homes. Built for long term durability, lower maintenance, and reliable performance through Sacramento heat and weather.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <TelLink location="metal" className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold"><Phone size={18} /> Call {PHONE_DISPLAY}</TelLink>
                <a
                  href="#metal-quote"
                  onClick={e => handleSamePageAnchorClick(e, 'metal-quote')}
                  className="inline-flex items-center justify-center gap-2 btn-outline py-4 px-8 text-base font-semibold"
                >
                  {PRIMARY_CTA} <ArrowRight size={18} />
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
                <span className="flex items-center gap-1.5"><Shield size={13} className="text-gold" /> Licensed &amp; Insured</span>
                <span className="flex items-center gap-1.5"><Award size={13} className="text-gold" /> Workmanship Warranty</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={13} className="text-gold" /> Financing on Qualifying Projects</span>
              </div>
            </div>
            <HeroLeadFormPanel sourcePage="metal-roofing-hero" />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-wrap justify-center md:justify-between gap-4 text-sm font-medium">
            <span className="flex items-center gap-2"><Timer size={15} /> 50+ Year Lifespan</span>
            <span className="flex items-center gap-2"><Sun size={15} /> Energy Efficient and Reflects Sacramento Heat</span>
            <span className="flex items-center gap-2"><Shield size={15} /> Class A Fire Rating</span>
            <span className="flex items-center gap-2"><CheckCircle size={15} /> Financing on Qualifying Projects</span>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnswerSummary
            title="Metal roofing in Sacramento: quick answer"
            points={[
              '50+ year lifespan when installed correctly',
              'Strong performance in Sacramento heat',
              'Standing seam and corrugated options',
              'Higher upfront cost, lower lifetime maintenance',
            ]}
          >
            Metal roofing is a strong fit for Sacramento homeowners who plan to stay long-term and want a durable, low-maintenance roof that handles heat, rain, and wind better than many aging shingle systems.
          </AnswerSummary>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Why Metal?</p>
              <h2 className="section-heading mb-5">Sacramento's Climate Makes Metal a Smart Investment</h2>
              <p className="text-body text-sm leading-relaxed mb-4">
                Sacramento summers are brutal on asphalt shingles. High heat accelerates granule loss, dries out sealants, and causes shingles to curl years ahead of schedule. Metal roofing reflects solar energy instead of absorbing it, which keeps your attic cooler and your cooling bills lower.
              </p>
              <p className="text-body text-sm leading-relaxed mb-6">
                Beyond energy efficiency, metal roofing simply lasts. Most Sacramento homeowners who install metal today will never replace their roof again. That is a fundamentally different value proposition than a 25-year shingle replacement cycle. Learn more in our{' '}
                <Link to="/blog/metal-roofing-vs-shingles-sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">metal vs shingles comparison</Link>{' '}
                or explore{' '}
                <Link to="/blog/metal-roofing-el-dorado-hills-ca" className="text-gold font-semibold hover:text-gold-dark transition-colors">metal roofing in El Dorado Hills</Link>.
              </p>
              <p className="text-body text-sm leading-relaxed mb-6">
                Metal installs often pair with{' '}
                <Link to="/roof-replacement" className="text-gold font-semibold hover:text-gold-dark transition-colors">roof replacement</Link>{' '}
                and start with a{' '}
                <Link to="/roof-inspection" className="text-gold font-semibold hover:text-gold-dark transition-colors">roof inspection</Link>.
                We serve{' '}
                <Link to="/service-areas/sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">Sacramento</Link>,{' '}
                <Link to="/service-areas/el-dorado-hills" className="text-gold font-semibold hover:text-gold-dark transition-colors">El Dorado Hills</Link>,{' '}
                <Link to="/service-areas/folsom" className="text-gold font-semibold hover:text-gold-dark transition-colors">Folsom</Link>, and{' '}
                <Link to="/service-areas/colfax" className="text-gold font-semibold hover:text-gold-dark transition-colors">Colfax</Link>.
                Folsom homeowners comparing materials should read{' '}
                <Link to="/blog/best-roofing-materials-folsom" className="text-gold font-semibold hover:text-gold-dark transition-colors">best roofing materials for Folsom</Link>.
                {' '}
                <Link to="/contact" className="text-gold font-semibold hover:text-gold-dark transition-colors">Contact PRC 13</Link>{' '}
                for a consultation.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Ideal for Sacramento\'s hot, dry summers',
                  'No granule loss, no curling, no seasonal maintenance',
                  'Strong resale appeal that buyers recognize',
                  'Available in profiles that match any home style',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                    <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-brand overflow-hidden">
              <OptimizedImage
                src={ASSETS.metalRoofing('metal-roof-smart-investment.webp')}
                alt="Metal roof on Sacramento home"
                width={800}
                height={400}
                className="h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Advantages</p>
          <h2 className="section-heading mb-10">Why Homeowners Choose Metal Roofing</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="bg-cream border border-gray-100 p-6 hover:border-gold/30 hover:shadow-sm transition-all duration-200">
                <b.icon size={22} className="text-gold mb-4" />
                <h3 className="font-bold text-headline text-sm mb-2">{b.title}</h3>
                <p className="text-body text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METAL SERVICES */}
      <section className="bg-charcoal text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Metal Roofing Services</p>
          <h2 className="text-3xl font-bold text-white mb-8">Installation, Replacement &amp; Standing Seam Systems</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {metalServices.map(service => (
              <div key={service.title} className="border border-white/10 bg-white/[0.04] p-6 rounded-brand">
                <h3 className="text-white font-bold text-base mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="section-heading mb-10">Our Metal Roofing Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="text-3xl font-bold text-gold/20 mb-2">{step.num}</div>
                <h3 className="font-bold text-headline text-sm mb-2">{step.title}</h3>
                <p className="text-body text-xs leading-relaxed">{step.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-5 -right-3 text-gray-200">
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <MetalComparisonTable />

      {/* GALLERY STRIP */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Recent Work</p>
          <h2 className="section-heading mb-8">Metal Roofing Projects in Sacramento</h2>
          <GalleryStrip category="Roof Replacement" limit={4} showLink />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">5.0 Google Rating · 81 Reviews</p>
          <h2 className="section-heading mb-8">What Sacramento Homeowners Say</h2>
          <ReviewStrip count={3} variant="light" />
        </div>
      </section>

      {/* METAL ROOFING RESOURCES */}
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-3 mb-6">
            <BookOpen size={22} className="text-gold flex-shrink-0 mt-1" aria-hidden />
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Metal Roofing Resources</p>
              <h2 className="section-heading mb-3">Plan Your Sacramento Metal Roof</h2>
              <p className="text-body text-sm leading-relaxed max-w-3xl">
                Homeowners across{' '}
                <Link to="/service-areas/sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">Sacramento</Link>,{' '}
                <Link to="/service-areas/folsom" className="text-gold font-semibold hover:text-gold-dark transition-colors">Folsom</Link>,{' '}
                <Link to="/service-areas/el-dorado-hills" className="text-gold font-semibold hover:text-gold-dark transition-colors">El Dorado Hills</Link>, and{' '}
                <Link to="/service-areas/colfax" className="text-gold font-semibold hover:text-gold-dark transition-colors">Colfax</Link>{' '}
                use these guides for metal cost, standing seam options, climate fit, installation steps, and shingle comparisons. Schedule a{' '}
                <Link to="/roof-inspection" className="text-gold font-semibold hover:text-gold-dark transition-colors">free roof inspection</Link>{' '}
                or{' '}
                <Link to="/contact" className="text-gold font-semibold hover:text-gold-dark transition-colors">request a metal roofing consultation</Link>.
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
        heading="Metal roofing answers Sacramento homeowners ask"
        items={[
          {
            question: 'Is metal roofing noisy in the rain?',
            answer:
              'Installed over solid decking with proper underlayment, modern metal roofs are generally not much louder indoors than shingles—decking and insulation absorb most of the sound.',
          },
          {
            question: 'How long can metal roofing last?',
            answer:
              'Quality metal systems are often designed for decades of service (commonly marketed at 50+ years), but real lifespan depends on profile, coating, installation, and maintenance.',
          },
          {
            question: 'Tear-off or install over shingles?',
            answer:
              'PRC 13 typically recommends full tear-off so decking can be inspected. Overlay is only considered when conditions and product requirements allow.',
          },
        ]}
      />

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
          <h2 className="section-heading mb-8">Metal Roofing FAQs</h2>
          <FaqAccordion items={faqs} variant="light" />
        </div>
      </section>

      <SacramentoGuideCallout
        href="/service-areas/sacramento"
        label="View Sacramento roofing services"
      />
      <LocalSeoLinks />

      {/* FINAL CTA */}
      <section id="metal-quote" data-final-cta className="bg-charcoal-dark py-12 md:py-16 mobile-section-bottom md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Free Consultation</p>
              <h2 className="text-3xl font-bold text-white mb-4">Get Your Free Metal Roofing Quote</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We will inspect your current roof, walk you through metal roofing options, and give you a clear written quote with no pressure and no obligation.
              </p>
              <ul className="space-y-2 mb-6">
                {['We aim to schedule inspections quickly', 'Panel style consultation included', 'Financing may be available on qualifying projects', 'Workmanship warranty confirmed in writing'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle size={14} className="text-gold flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <TelLink location="metal-final" className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors">
                <Phone size={16} /> Or call directly: {PHONE_DISPLAY}
              </TelLink>
            </div>
            <LeadForm sourcePage="metal-roofing" variant="full" hideEmail hideReason compactSpacing />
          </div>
        </div>
      </section>
    </>
  );
}
