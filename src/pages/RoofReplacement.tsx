import { Phone, CheckCircle, ArrowRight, Shield, Award, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { handleSamePageAnchorClick } from '../lib/scroll';
import LeadForm from '../components/LeadForm';
import HeroLeadFormPanel from '../components/HeroLeadFormPanel';
import Breadcrumbs from '../components/Breadcrumbs';
import { PRIMARY_CTA } from '../data/cta';
import FaqAccordion, { type FaqItem } from '../components/FaqAccordion';
import ReviewStrip from '../components/ReviewStrip';
import GalleryStrip from '../components/GalleryStrip';
import HeroBackground from '../components/HeroBackground';
import JsonLd from '../components/JsonLd';
import AnswerSummary from '../components/AnswerSummary';
import LocalSeoLinks from '../components/LocalSeoLinks';
import SacramentoGuideCallout from '../components/SacramentoGuideCallout';
import { ASSETS } from '../data/assets';
import { blogPosts } from '../data/blog';
import { REPLACEMENT_CLUSTER_CATEGORY } from '../data/blogRoofReplacementCluster';

const steps = [
  { num: '01', title: 'Free Inspection', desc: 'Our roofing team comes to your home, evaluates your roof, and gives you an honest assessment with no pressure.' },
  { num: '02', title: 'Clear Quote', desc: 'You get a straightforward written quote with no hidden fees. We explain every line.' },
  { num: '03', title: 'Material Selection', desc: 'We walk you through your shingle, tile, or metal options and recommend the best fit for your home and budget.' },
  { num: '04', title: 'Replacement Day', desc: 'Our crew arrives on schedule, completes the tear-off and installation, and cleans up completely. Most jobs are done in 1 to 2 days.' },
  { num: '05', title: 'Final Walkthrough', desc: 'We walk the completed job with you. You approve the work before we consider the job done.' },
];

const replacementFaqs: FaqItem[] = [
  {
    question: 'How long does a roof replacement take?',
    answer:
      'Most Sacramento residential roof replacements are completed in one to two days. Steep or large roofs may require a third day. We give you a firm timeline before the project starts.',
  },
  {
    question: 'What does a roof replacement cost in Sacramento?',
    answer:
      'Cost depends on roof size, pitch, material selection, and deck condition. We provide clear written quotes with no hidden fees and explain every line item. Financing is available on qualifying projects.',
  },
  {
    question: 'Do I need to be home during the replacement?',
    answer:
      'You do not need to be home during the work day, but we do ask that you\'re available for the final walkthrough when the job is complete. We won\'t sign off until you\'ve reviewed and approved the work.',
  },
  {
    question: 'What roofing materials do you use?',
    answer:
      'We install architectural (dimensional) shingles, standing seam and corrugated metal roofing, and tile roofing. The right choice depends on your budget, your home\'s style, and how long you plan to stay. We\'ll help you decide during your free inspection.',
  },
  {
    question: 'Does a new roof come with a warranty?',
    answer:
      'Yes. All replacements include a workmanship warranty from PRC 13, plus the manufacturer\'s material warranty on the shingles or metal panels installed.',
  },
  {
    question: 'Will you help with my insurance claim?',
    answer:
      'Yes. If your replacement is storm-related, we document the damage, work alongside your adjuster, and help ensure the full scope of damage is captured. Many homeowners only pay their deductible.',
  },
];

const materials = [
  { name: 'Architectural Shingles', desc: 'Most popular choice. Durable, cost-effective, available in dozens of styles and colors.', badge: 'Most Popular' },
  { name: 'Metal Roofing', desc: '50+ year lifespan. Energy-efficient, low maintenance, excellent for California weather.', badge: 'Long-Term Value' },
  { name: 'Tile Roofing', desc: 'Classic Sacramento look. Extremely durable with excellent insulation properties.', badge: 'Premium Option' },
];

const replacementResources = blogPosts.filter(post => post.category === REPLACEMENT_CLUSTER_CATEGORY);

export default function RoofReplacement() {
  return (
    <>
      <JsonLd
        faqs={replacementFaqs}
        pageName="Roof Replacement Done Right"
        schemaType="Service"
        serviceName="Roof Replacement"
        breadcrumbs={[{ label: 'Roof Replacement' }]}
      />
      {/* HERO */}
      <section className="relative bg-charcoal-dark text-white overflow-hidden lg:min-h-[75vh]">
        <HeroBackground
          image={ASSETS.roofReplacement('roof-replacement-hero-installation.png')}
          alt="Roof replacement installation on a Sacramento home"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(15,20,28,0.93) 0%, rgba(15,20,28,0.75) 50%, rgba(15,20,28,0.35) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-24 md:pt-24 md:pb-28 lg:py-28 w-full">
          <Breadcrumbs items={[{ label: 'Roof Replacement' }]} />
          <div className="flex flex-col lg:block">
            <div className="max-w-2xl">
              <span className="inline-block text-xs bg-gold text-white px-3 py-1 font-semibold uppercase tracking-wider mb-5 rounded-brand">Our Specialty</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Roof Replacement<br />
                <span className="text-gold">Done Right, the First Time</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                Roof replacement in Sacramento, California for shingle roof replacement, tile roof replacement, and metal roofing options. Free inspection, a clear written estimate, and financing on qualifying projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a href="tel:9167613866" className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold">
                  <Phone size={18} /> Call 916-761-3866
                </a>
                <a
                  href="#get-quote"
                  onClick={e => handleSamePageAnchorClick(e, 'get-quote')}
                  className="inline-flex items-center justify-center gap-2 btn-outline py-4 px-8 text-base font-semibold"
                >
                  {PRIMARY_CTA} <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <HeroLeadFormPanel sourcePage="roof-replacement-hero" />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-wrap justify-center md:justify-between gap-4 text-sm font-medium">
            <span className="flex items-center gap-2"><Shield size={15} /> Licensed &amp; Insured</span>
            <span className="flex items-center gap-2"><CheckCircle size={15} /> Workmanship Warranty Included</span>
            <span className="flex items-center gap-2"><Award size={15} /> Financing Available</span>
            <span className="flex items-center gap-2"><Clock size={15} /> Most Replacements in 1 to 2 Days</span>
          </div>
        </div>
      </div>

      {/* WHY REPLACE */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnswerSummary
            title="Sacramento roof replacement: quick answer"
            points={[
              'Most residential replacements take 1 to 2 days',
              'Free inspection before any quote',
              'Shingle, tile, and metal options available',
              'Financing available on qualifying projects',
            ]}
          >
            Roof replacement usually makes sense when a Sacramento roof is near the end of its life, has repeated leaks, widespread shingle damage, or decking concerns that make another repair a short-term fix.
          </AnswerSummary>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Is It Time?</p>
              <h2 className="section-heading mb-5">Signs Your Sacramento Roof Needs Replacement</h2>
              <ul className="space-y-3">
                {[
                  'Your roof is 20+ years old',
                  'Repairs are becoming more frequent',
                  'You have recurring leaks that keep coming back',
                  'You can see missing, curling, or cracked shingles from the street',
                  'You notice sagging, stains, or soft spots inside the home',
                  'Your neighbor has already replaced their roof',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-body text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-gold/10 border-l-4 border-gold">
                <p className="text-sm text-body">
                  <strong className="text-headline">Not sure?</strong> That's what the free inspection is for. We will give you an honest answer, even if a repair is all you actually need.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={ASSETS.roofReplacement('roof-replacement-signs-completed.png')}
                alt="Roof replacement in progress"
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Simple Process</p>
          <h2 className="section-heading mb-10">How Roof Replacement Works With PRC 13</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="text-3xl font-bold text-gold/20 mb-2">{step.num}</div>
                <h3 className="font-bold text-headline text-sm mb-2">{step.title}</h3>
                <p className="text-body text-xs leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-3 text-gray-200">
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Options</p>
          <h2 className="section-heading mb-10">Roofing Materials We Install</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {materials.map(m => (
              <div key={m.name} className="bg-white border border-gray-100 p-6 hover:border-gold/30 hover:shadow-sm transition-all duration-200">
                <span className="inline-block text-xs bg-charcoal text-white px-2.5 py-1 font-semibold mb-4">{m.badge}</span>
                <h3 className="font-bold text-headline text-lg mb-2">{m.name}</h3>
                <p className="text-body text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-body text-sm mt-6">
            Not sure which material is right for your home? We will walk you through it during your{' '}
            <Link to="/roof-inspection" className="text-gold font-semibold hover:text-gold-dark transition-colors">free roof inspection</Link>.
            Compare{' '}
            <Link to="/metal-roofing" className="text-gold font-semibold hover:text-gold-dark transition-colors">metal roofing</Link>{' '}
            with shingles in our{' '}
            <Link to="/blog/metal-roofing-vs-shingles-sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">Sacramento materials guide</Link>.
            We serve{' '}
            <Link to="/service-areas/sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">Sacramento</Link>,{' '}
            <Link to="/service-areas/folsom" className="text-gold font-semibold hover:text-gold-dark transition-colors">Folsom</Link>, and{' '}
            <Link to="/service-areas/el-dorado-hills" className="text-gold font-semibold hover:text-gold-dark transition-colors">El Dorado Hills</Link>.
            See also{' '}
            <Link to="/blog/roof-replacement-folsom-ca" className="text-gold font-semibold hover:text-gold-dark transition-colors">Folsom replacement planning</Link>,{' '}
            <Link to="/blog/roof-replacement-el-dorado-hills-ca" className="text-gold font-semibold hover:text-gold-dark transition-colors">El Dorado Hills replacement</Link>, and{' '}
            <Link to="/blog/signs-you-need-roof-replacement-sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">when replacement makes sense</Link>.
            {' '}
            <Link to="/contact" className="text-gold font-semibold hover:text-gold-dark transition-colors">Contact us</Link>{' '}
            for a quote.
          </p>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Recent Work</p>
          <h2 className="section-heading mb-8">Roof Replacement Projects in Sacramento</h2>
          <GalleryStrip category="Roof Replacement" limit={4} showLink />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">5.0 Google Rating · 81 Reviews</p>
          <h2 className="section-heading mb-8">What Sacramento Homeowners Say</h2>
          <ReviewStrip count={3} variant="light" />
        </div>
      </section>

      {/* ROOF REPLACEMENT RESOURCES */}
      <section className="bg-cream py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-3 mb-6">
            <BookOpen size={22} className="text-gold flex-shrink-0 mt-1" aria-hidden />
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Roof Replacement Resources</p>
              <h2 className="section-heading mb-3">Plan Your Sacramento Replacement</h2>
              <p className="text-body text-sm leading-relaxed max-w-3xl">
                Homeowners across{' '}
                <Link to="/service-areas/sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">Sacramento</Link>,{' '}
                <Link to="/service-areas/folsom" className="text-gold font-semibold hover:text-gold-dark transition-colors">Folsom</Link>, and{' '}
                <Link to="/service-areas/el-dorado-hills" className="text-gold font-semibold hover:text-gold-dark transition-colors">El Dorado Hills</Link>{' '}
                use these guides for replacement cost, materials, insurance, financing, and timelines. Ready to hire asphalt replacement in Rocklin? See{' '}
                <Link to="/roof-replacement/rocklin" className="text-gold font-semibold hover:text-gold-dark transition-colors">shingle roof replacement in Rocklin</Link>.
                Schedule a{' '}
                <Link to="/roof-inspection" className="text-gold font-semibold hover:text-gold-dark transition-colors">free roof inspection</Link>{' '}
                when you are ready for next steps.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {replacementResources.map(resource => (
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

      {/* FAQ */}
      <section className="bg-cream py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
          <h2 className="section-heading mb-8">Roof Replacement FAQs</h2>
          <FaqAccordion items={replacementFaqs} variant="light" />
        </div>
      </section>

      <SacramentoGuideCallout
        href="/service-areas/sacramento"
        label="View our Sacramento service area page"
      />

      <LocalSeoLinks />

      {/* FINAL CTA WITH FORM */}
      <section id="get-quote" className="bg-charcoal-dark py-12 md:py-16 mobile-section-bottom md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Free Quote</p>
              <h2 className="text-3xl font-bold text-white mb-4">Get Your Free Roof Replacement Quote</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                No obligation. No pressure. We will inspect your roof, walk you through your options, and give you a clear written quote.
              </p>
              <ul className="space-y-2 mb-6">
                {['Inspection within 24 hours', 'Written quote, no surprises', 'Financing options available', 'Insurance claim assistance'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle size={14} className="text-gold flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="tel:9167613866" className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors">
                <Phone size={16} /> Or call directly: 916-761-3866
              </a>
            </div>
            <LeadForm sourcePage="roof-replacement" variant="full" hideEmail hideReason compactSpacing />
          </div>
        </div>
      </section>
    </>
  );
}
