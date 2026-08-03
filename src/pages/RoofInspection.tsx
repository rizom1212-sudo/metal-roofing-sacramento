import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight, Shield, Award, Eye, FileText, AlertTriangle, Clock, Wind, BookOpen } from 'lucide-react';
import { handleSamePageAnchorClick } from '../lib/scroll';
import LeadForm from '../components/LeadForm';
import HeroLeadFormPanel from '../components/HeroLeadFormPanel';
import TelLink from '../components/TelLink';
import { PRIMARY_CTA } from '../data/cta';
import { PHONE_DISPLAY } from '../data/site';
import Breadcrumbs from '../components/Breadcrumbs';
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

const checkItems = [
  { icon: Eye, title: 'Shingle Condition', desc: 'We check for granule loss, curling edges, cracks, blistering, and missing sections across the full roof surface.' },
  { icon: Shield, title: 'Flashing & Seals', desc: 'Chimney, vent, and skylight flashing failures are the most common leak source. We check every penetration.' },
  { icon: AlertTriangle, title: 'Deck & Structural', desc: 'Signs of rot, soft spots, and sagging decking that indicate structural issues beneath the shingles.' },
  { icon: FileText, title: 'Gutters & Drainage', desc: 'We review gutters, downspouts, and slope because poor drainage can speed up roof wear and fascia rot.' },
  { icon: Wind, title: 'Attic Ventilation', desc: 'Improper attic airflow causes premature shingle failure from heat buildup. We check ventilation as part of every inspection.' },
  { icon: Clock, title: 'Age & Remaining Life', desc: 'Based on material type, visible wear, and Sacramento climate patterns, we estimate remaining useful life.' },
];

const maintenanceItems = [
  'Annual roof maintenance inspections',
  'Preventative maintenance recommendations',
  'Sealant, flashing, and penetration checks',
  'Drainage, gutter, and debris concerns',
  'Written condition notes for your records',
];

const process = [
  { num: '01', title: 'Schedule Free Inspection', desc: 'Call or fill out the form. Most Sacramento homeowners are scheduled within 24 hours.' },
  { num: '02', title: 'On-Site Assessment', desc: 'Our roofing team inspects the roof, walks it when safe, and checks the attic, gutters, and all penetration points.' },
  { num: '03', title: 'Honest Walkthrough', desc: 'After the inspection, we walk you through exactly what we found with no pressure and no sales tactics.' },
  { num: '04', title: 'Written Findings', desc: 'You receive a written summary of the inspection, including any issues found and our recommendation for next steps.' },
];

const faqs: FaqItem[] = [
  {
    question: 'How much does a roof inspection cost?',
    answer: 'Our roof inspections are free with no obligation. We inspect your roof, share our honest findings, and let you decide what to do next with no pressure.',
  },
  {
    question: 'How long does a roof inspection take?',
    answer: 'Most residential inspections take 30 to 60 minutes depending on roof size and complexity. If we identify issues that require closer examination, we take the time needed.',
  },
  {
    question: 'Do you offer annual roof maintenance inspections?',
    answer: 'Yes. Roof maintenance is handled through our inspection service. We check wear points, sealant, flashing, drainage, debris buildup, and early warning signs before they become expensive repairs.',
  },
  {
    question: 'What is preventative roof maintenance?',
    answer: 'Preventative maintenance means finding small issues early, such as cracked sealant, loose flashing, clogged drainage, damaged shingles, or aging penetrations. Fixing them early helps prevent water damage from spreading.',
  },
  {
    question: 'What will you tell me after the inspection?',
    answer: 'We give you an honest assessment of your roof\'s condition, including its estimated remaining lifespan, any issues we found, and whether repair, replacement, or no action is needed.',
  },
  {
    question: 'Do I need an inspection before buying or selling a home?',
    answer: 'Yes. A professional roof inspection before buying or selling protects both parties. Buyers get peace of mind, and sellers can address issues before they become negotiating problems.',
  },
  {
    question: 'Will you try to sell me something during the inspection?',
    answer: 'No. If a repair is all you need, we\'ll say that. If your roof is fine, we\'ll say that too. We build our reputation on honest assessments, not upselling.',
  },
  {
    question: 'Can you document roof condition for an insurance claim?',
    answer: 'Yes. We can provide written documentation and photos of storm damage, which is often critical when filing an insurance claim. We can also be present during the adjuster\'s visit.',
  },
];

const inspectionResources = blogPosts.filter(post => post.category === 'Roof Inspection');

export default function RoofInspection() {
  return (
    <>
      <JsonLd
        faqs={faqs}
        pageName="Roof Inspection Sacramento"
        schemaType="Service"
        serviceName="Roof Inspection"
        breadcrumbs={[{ label: 'Roof Inspection' }]}
      />
      {/* HERO */}
      <section className="relative bg-charcoal-dark text-white overflow-hidden">
        <HeroBackground
          image={ASSETS.roofInspection('Screenshot_2026-05-20_at_09.37.55.png')}
          alt="Roofer inspecting roof damage on a Sacramento home"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(15,20,28,0.96) 0%, rgba(15,20,28,0.82) 50%, rgba(15,20,28,0.40) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-24 md:pt-24 md:pb-28 lg:py-28 w-full">
          <Breadcrumbs items={[{ label: 'Roof Inspection' }]} />
          <div className="flex flex-col lg:block">
          <div className="max-w-2xl">
            <span className="inline-block text-xs bg-gold text-white px-3 py-1 font-semibold uppercase tracking-wider mb-5">Free, No Obligation</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Roof Inspection<br />
              <span className="text-gold">Know Exactly What You're Dealing With</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Schedule a free roof inspection in Sacramento, California. You get written findings covering leak detection, storm damage, aging materials, flashing problems, and clear repair-versus-replacement guidance—from a licensed roofer, not a salesperson.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <TelLink location="hero-inspection" className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold">
                <Phone size={18} /> Call {PHONE_DISPLAY}
              </TelLink>
              <a
                href="#inspection-quote"
                onClick={e => handleSamePageAnchorClick(e, 'inspection-quote')}
                className="inline-flex items-center justify-center gap-2 btn-outline py-4 px-8 text-base font-semibold"
              >
                {PRIMARY_CTA} <ArrowRight size={18} />
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
              <span className="flex items-center gap-1.5"><Shield size={13} className="text-gold" /> Free Inspection</span>
              <span className="flex items-center gap-1.5"><Award size={13} className="text-gold" /> No Obligation</span>
              <span className="flex items-center gap-1.5"><Clock size={13} className="text-gold" /> Within 24 Hours</span>
            </div>
          </div>
            <HeroLeadFormPanel
              sourcePage="roof-inspection-hero"
              title="Request a Free Roof Inspection"
              subtitle="Most Sacramento inspections are scheduled within one business day."
              submitLabel={PRIMARY_CTA}
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-wrap justify-center md:justify-between gap-4 text-sm font-medium">
            <span className="flex items-center gap-2"><CheckCircle size={15} /> Always Free, No Obligation</span>
            <span className="flex items-center gap-2"><Clock size={15} /> Scheduled Within 24 Hours</span>
            <span className="flex items-center gap-2"><Shield size={15} /> Licensed Roofing Team</span>
            <span className="flex items-center gap-2"><FileText size={15} /> Written Findings Provided</span>
          </div>
        </div>
      </div>

      {/* WHAT WE CHECK */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnswerSummary
            title="Sacramento roof inspection: quick answer"
            points={[
              'Free inspection with no obligation',
              'Checks shingles, flashing, drainage, and attic ventilation',
              'Written findings and honest next steps',
              'Helpful before repairs, replacement, buying, or selling',
            ]}
          >
            A roof inspection tells you whether your Sacramento roof needs repair, replacement, maintenance, or no action. PRC 13 Roofing checks the roof system and explains the findings without pressure.
          </AnswerSummary>
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Comprehensive</p>
          <h2 className="section-heading mb-4">What We Check During Your Roof Inspection</h2>
          <p className="section-subheading mb-10 max-w-2xl">
            Our inspection covers every part of the roofing system, not just a quick visual walk. We document findings clearly and explain your options.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {checkItems.map(item => (
              <div key={item.title} className="bg-white border border-gray-100 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/25 hover:shadow-md">
                <item.icon size={22} className="text-gold mb-4" />
                <h3 className="font-bold text-headline text-sm mb-2">{item.title}</h3>
                <p className="text-body text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AN INSPECTION */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/Roof Inspection Page image/6998f81b20c035b044719a8d.jpg"
                alt="Roof damage inspection"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Why It Matters</p>
              <h2 className="section-heading mb-5">Catch Small Problems Before They Become Big Ones</h2>
              <p className="text-body text-sm leading-relaxed mb-5">
                Most roof failures don't happen overnight. They often start as minor issues like a cracked shingle, failed flashing, or a small membrane split that goes undetected for years. By the time water appears inside your home, the damage may have already spread to the decking, insulation, or structure below.
              </p>
              <p className="text-body text-sm leading-relaxed mb-6">
                A free inspection by a licensed contractor costs you nothing and can prevent thousands of dollars in damage. We recommend Sacramento homeowners inspect their roofs every 2 to 3 years, or after any significant storm. When damage is active, see our{' '}
                <Link to="/emergency-roof-repair" className="text-gold font-semibold hover:text-gold-dark transition-colors">emergency roof repair</Link>{' '}
                page or read about{' '}
                <Link to="/blog/roof-inspection-after-storm" className="text-gold font-semibold hover:text-gold-dark transition-colors">inspections after storms</Link>.
              </p>
              <p className="text-body text-sm leading-relaxed mb-6">
                We serve homeowners across{' '}
                <Link to="/service-areas/sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">Sacramento</Link>,{' '}
                <Link to="/service-areas/folsom" className="text-gold font-semibold hover:text-gold-dark transition-colors">Folsom</Link>, and{' '}
                <Link to="/service-areas/el-dorado-hills" className="text-gold font-semibold hover:text-gold-dark transition-colors">El Dorado Hills</Link>.
                Need repair instead of inspection? Visit{' '}
                <Link to="/roof-repair" className="text-gold font-semibold hover:text-gold-dark transition-colors">roof repair</Link>{' '}
                or{' '}
                <Link to="/contact" className="text-gold font-semibold hover:text-gold-dark transition-colors">contact us</Link>{' '}
                to schedule.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Ideal before buying or selling a home',
                  'After any hail, wind, or heavy rain event',
                  'When your roof is 15+ years old',
                  'If you\'ve noticed energy bill increases',
                  'When a neighbor has already replaced their roof',
                ].map(item => (
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

      {/* MAINTENANCE */}
      <section className="bg-charcoal text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Preventative Maintenance</p>
              <h2 className="text-3xl font-bold text-white mb-4">Annual Roof Maintenance Starts With a Good Inspection</h2>
              <p className="text-gray-400 leading-relaxed">
                Sacramento heat, seasonal rain, and wind can wear down small roof details long before a leak appears. Our inspection service helps you catch those issues early and plan practical maintenance before damage spreads.
              </p>
            </div>
            <ul className="space-y-2.5">
              {maintenanceItems.map(item => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Simple Process</p>
          <h2 className="section-heading mb-10">How Our Roof Inspection Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
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

      {/* GALLERY STRIP */}
      <section className="bg-white py-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Work</p>
          <h2 className="section-heading mb-8">Inspection & Repair Projects in Sacramento</h2>
          <GalleryStrip category="Inspections" limit={4} showLink />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-cream py-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">5.0 Google Rating · 81 Reviews</p>
          <h2 className="section-heading mb-8">What Sacramento Homeowners Say</h2>
          <ReviewStrip count={3} variant="light" indices={[1, 2, 5]} />
        </div>
      </section>

      {/* ROOF INSPECTION RESOURCES */}
      <section className="bg-cream py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-3 mb-6">
            <BookOpen size={22} className="text-gold flex-shrink-0 mt-1" aria-hidden />
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Roof Inspection Resources</p>
              <h2 className="section-heading mb-3">Learn Before You Schedule</h2>
              <p className="text-body text-sm leading-relaxed max-w-3xl">
                Homeowners across{' '}
                <Link to="/service-areas/sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">Sacramento</Link>,{' '}
                <Link to="/service-areas/el-dorado-hills" className="text-gold font-semibold hover:text-gold-dark transition-colors">El Dorado Hills</Link>,{' '}
                <Link to="/service-areas/folsom" className="text-gold font-semibold hover:text-gold-dark transition-colors">Folsom</Link>, and nearby communities ask us about inspection costs, insurance visits, storm checks, and commercial roofs. Browse guides like{' '}
                <Link to="/blog/free-roof-inspection-sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">free inspections</Link>{' '}
                and{' '}
                <Link to="/blog/roof-inspection-checklist" className="text-gold font-semibold hover:text-gold-dark transition-colors">the homeowner checklist</Link>.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {inspectionResources.map(resource => (
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
      <section className="bg-white py-[72px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
          <h2 className="section-heading mb-8">Roof Inspection FAQs</h2>
          <FaqAccordion items={faqs} variant="light" />
        </div>
      </section>

      <SacramentoGuideCallout
        href="/service-areas/sacramento"
        label="View our Sacramento service area page"
      />

      <LocalSeoLinks />

      {/* FINAL CTA */}
      <section id="inspection-quote" data-final-cta className="bg-charcoal-dark py-12 md:py-16 mobile-section-bottom md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Schedule Today</p>
              <h2 className="text-3xl font-bold text-white mb-4">Get Your Free Roof Inspection</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                No cost, no obligation. Our roofing team inspects your roof and gives you an honest written assessment. Most Sacramento homeowners are scheduled within 24 hours.
              </p>
              <ul className="space-y-2 mb-6">
                {['Free with no obligation', 'Licensed roofing team', 'Written findings provided', 'Insurance documentation available'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle size={14} className="text-gold flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <TelLink location="inspection-final" className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors">
                <Phone size={16} /> Or call: {PHONE_DISPLAY}
              </TelLink>
            </div>
            <LeadForm sourcePage="roof-inspection" variant="full" hideEmail hideReason compactSpacing />
          </div>
        </div>
      </section>
    </>
  );
}
