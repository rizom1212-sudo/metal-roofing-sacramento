import { Phone, CheckCircle, ArrowRight, Shield, Award, Zap, Sun, Wrench, Timer } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import HeroLeadFormPanel from '../components/HeroLeadFormPanel';
import Breadcrumbs from '../components/Breadcrumbs';
import { PRIMARY_CTA } from '../data/cta';
import FaqAccordion, { type FaqItem } from '../components/FaqAccordion';
import ReviewStrip from '../components/ReviewStrip';
import GalleryStrip from '../components/GalleryStrip';
import HeroBackground from '../components/HeroBackground';
import JsonLd from '../components/JsonLd';
import MetalComparisonTable from '../components/MetalComparisonTable';
import OptimizedImage from '../components/OptimizedImage';
import { ASSETS } from '../data/assets';

const benefits = [
  { icon: Timer, title: '50+ Year Lifespan', desc: 'Outlasts asphalt shingles by 2 to 3 times. Many Sacramento homeowners install metal as their last roof ever.' },
  { icon: Sun, title: 'Energy Efficient', desc: "Metal reflects solar heat, which helps during Sacramento's hot summers. Lower cooling bills year round." },
  { icon: Shield, title: 'Wind & Fire Resistant', desc: 'Class A fire rating and rated for high winds. Metal stands up to California weather without buckling.' },
  { icon: Wrench, title: 'Virtually No Maintenance', desc: 'No granule loss, no curling shingles, no rotting. Metal holds up year after year with minimal upkeep.' },
  { icon: Award, title: 'Manufacturer Warranty', desc: 'Metal roofing products carry strong manufacturer warranties. Our workmanship is also fully warranted.' },
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
  { num: '03', title: 'Written Quote', desc: 'A clear, itemized written quote with no hidden fees. Financing available on qualifying projects.' },
  { num: '04', title: 'Installation', desc: 'Our crew installs your new metal roof with proper underlayment, flashing, trim, and fasteners. Most jobs are completed in 2 to 3 days.' },
  { num: '05', title: 'Final Walkthrough', desc: 'We walk the finished job with you before we leave. You approve the work.' },
];

const faqs: FaqItem[] = [
  {
    question: 'Is metal roofing right for Sacramento\'s climate?',
    answer: 'Yes, metal is an excellent choice for Sacramento. It handles intense summer heat better than asphalt by reflecting solar energy, and it performs well in winter rain without the leak risk of aging shingles.',
  },
  {
    question: 'How much more does metal roofing cost vs. shingles?',
    answer: 'Metal roofing typically costs 40 to 60% more upfront than architectural shingles. However, the 50+ year lifespan means you may never replace it again, making the lifetime cost competitive or lower.',
  },
  {
    question: 'Is metal roofing noisy when it rains?',
    answer: 'Modern metal roofing installed over solid decking with proper underlayment is not significantly louder than shingles. The decking and insulation absorb most of the sound.',
  },
  {
    question: 'What metal roofing styles do you install?',
    answer: 'We install standing seam, corrugated, and exposed fastener ribbed metal panels in steel and aluminum. We\'ll show you profile options during your free consultation.',
  },
  {
    question: 'Do you install standing seam metal roofing?',
    answer: 'Yes. Standing seam roofing is our premium metal option. It uses concealed fasteners, clean vertical lines, and strong weather performance for Sacramento homes.',
  },
  {
    question: 'Can you replace my shingle roof with metal?',
    answer: 'Yes. Metal roof replacement includes removal when needed, decking inspection, underlayment, flashing, trim, and panel installation. We explain the cost and lifespan tradeoffs before you decide.',
  },
  {
    question: 'How long does metal roof installation take?',
    answer: 'Most Sacramento residential metal roof installations take 2 to 3 days. Larger or more complex roofs may take an additional day.',
  },
  {
    question: 'Can metal roofing be installed over existing shingles?',
    answer: 'In some cases, yes. Installing over existing shingles can avoid full removal. However, we typically recommend full removal so we can inspect and repair the decking. We advise based on your specific roof.',
  },
];

export default function MetalRoofing() {
  return (
    <>
      <JsonLd
        faqs={faqs}
        pageName="Metal Roofing Built to Last"
        schemaType="Service"
        serviceName="Metal Roofing"
        breadcrumbs={[{ label: 'Metal Roofing' }]}
      />
      {/* HERO */}
      <section className="relative bg-charcoal-dark text-white overflow-hidden lg:min-h-[75vh]">
        <HeroBackground image={ASSETS.metalRoofing('Screenshot_2026-05-20_at_09.30.58.png')} />
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
                <a href="tel:9167613866" className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold">
                  <Phone size={18} /> Call 916-761-3866
                </a>
                <a href="#metal-quote" className="inline-flex items-center justify-center gap-2 btn-outline py-4 px-8 text-base font-semibold">
                  {PRIMARY_CTA} <ArrowRight size={18} />
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
                <span className="flex items-center gap-1.5"><Shield size={13} className="text-gold" /> Licensed &amp; Insured</span>
                <span className="flex items-center gap-1.5"><Award size={13} className="text-gold" /> Workmanship Warranty</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={13} className="text-gold" /> Financing Available</span>
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
            <span className="flex items-center gap-2"><CheckCircle size={15} /> Financing Available</span>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Why Metal?</p>
              <h2 className="section-heading mb-5">Sacramento's Climate Makes Metal a Smart Investment</h2>
              <p className="text-body text-sm leading-relaxed mb-4">
                Sacramento summers are brutal on asphalt shingles. High heat accelerates granule loss, dries out sealants, and causes shingles to curl years ahead of schedule. Metal roofing reflects solar energy instead of absorbing it, which keeps your attic cooler and your cooling bills lower.
              </p>
              <p className="text-body text-sm leading-relaxed mb-6">
                Beyond energy efficiency, metal roofing simply lasts. Most Sacramento homeowners who install metal today will never replace their roof again. That's a fundamentally different value proposition than a 25-year shingle replacement cycle.
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

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
          <h2 className="section-heading mb-8">Metal Roofing FAQs</h2>
          <FaqAccordion items={faqs} variant="light" />
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="metal-quote" className="bg-charcoal-dark py-12 md:py-16 mobile-section-bottom md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Free Consultation</p>
              <h2 className="text-3xl font-bold text-white mb-4">Get Your Free Metal Roofing Quote</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We will inspect your current roof, walk you through metal roofing options, and give you a clear written quote with no pressure and no obligation.
              </p>
              <ul className="space-y-2 mb-6">
                {['Same day or next day inspection available', 'Panel style consultation included', 'Financing options available', 'Full workmanship warranty'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle size={14} className="text-gold flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="tel:9167613866" className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors">
                <Phone size={16} /> Or call directly: 916-761-3866
              </a>
            </div>
            <LeadForm sourcePage="metal-roofing" variant="full" hideEmail hideReason compactSpacing />
          </div>
        </div>
      </section>
    </>
  );
}
