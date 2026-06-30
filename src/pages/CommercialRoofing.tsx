import { Phone, CheckCircle, ArrowRight, Shield, Award, Building2, Clock, Wrench, FileText, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { handleSamePageAnchorClick } from '../lib/scroll';
import LeadForm from '../components/LeadForm';
import FaqAccordion, { type FaqItem } from '../components/FaqAccordion';
import ReviewStrip from '../components/ReviewStrip';
import GalleryStrip from '../components/GalleryStrip';
import HeroBackground from '../components/HeroBackground';
import JsonLd from '../components/JsonLd';
import AnswerSummary from '../components/AnswerSummary';
import LocalSeoLinks from '../components/LocalSeoLinks';
import { ASSETS } from '../data/assets';
import { blogPosts } from '../data/blog';
import { COMMERCIAL_CLUSTER_CATEGORY } from '../data/blogCommercialRoofingCluster';

const problems = [
  'Standing water or ponding after rain',
  'Interior leaks or ceiling water stains',
  'Blistering, bubbling, or cracked membrane',
  'Failed or deteriorating roof seams',
  'HVAC unit penetration leaks',
  'Visible cracks or splits in flat roof surface',
];

const benefits = [
  { icon: Shield, title: 'Prevent Interior Damage', desc: 'Commercial leaks can damage inventory, equipment, and flooring. A properly installed roof prevents costly interior losses.' },
  { icon: Clock, title: 'Minimal Business Disruption', desc: 'We schedule commercial work to minimize impact on your operations, including after-hours or weekend installation when needed.' },
  { icon: FileText, title: 'Insurance Documentation', desc: 'We document all damage thoroughly for insurance claims. Storm-damaged commercial roofs are often covered.' },
  { icon: Building2, title: 'Flat & Low-Slope Expertise', desc: 'Commercial roofs require different materials and techniques. Our team is experienced with TPO, EPDM, and modified bitumen systems.' },
  { icon: Wrench, title: 'Repair or Full Replacement', desc: "We assess what's actually needed. Not every commercial roof needs full replacement, and honest recommendations are our standard." },
  { icon: Award, title: 'Licensed & Insured', desc: 'All commercial work is performed by a licensed, fully insured roofing contractor. Certificates of insurance available on request.' },
];

const process = [
  { num: '01', title: 'Commercial Inspection', desc: 'We assess the full roof system, including membrane condition, drainage, penetrations, seams, and flashing.' },
  { num: '02', title: 'Detailed Assessment', desc: 'You get a written report of findings and a clear scope of work recommendation with no ambiguity.' },
  { num: '03', title: 'Written Quote', desc: 'Itemized quote covering materials, labor, and timeline. No surprises.' },
  { num: '04', title: 'Scheduled Installation', desc: 'We work around your business hours. Crew arrives on schedule and completes work efficiently.' },
  { num: '05', title: 'Final Inspection', desc: 'We walk the completed installation with you and document completion for your records and insurance.' },
];

const faqs: FaqItem[] = [
  {
    question: 'What types of commercial roofs do you work on?',
    answer: 'We work on flat and low-slope commercial roofs, including TPO, EPDM, modified bitumen, and built-up roofing systems. We primarily serve small to mid-size commercial properties in the Sacramento area.',
  },
  {
    question: 'Can you work around our business hours?',
    answer: 'Yes. We can schedule commercial roofing work before or after business hours, or on weekends, to minimize disruption to your operations.',
  },
  {
    question: 'Do you help with commercial insurance claims?',
    answer: 'Yes. We document storm damage, work alongside your commercial insurance adjuster, and help ensure the full scope of damage is captured in your claim.',
  },
  {
    question: 'How do I know if my commercial roof needs repair or full replacement?',
    answer: 'That\'s exactly what our inspection is for. We give you an honest, documented assessment that explains what can be repaired and what has reached end of life. We don\'t push replacement when repair is sufficient.',
  },
  {
    question: 'How long does a commercial roof replacement take?',
    answer: 'Timeline depends on roof size and system type. Small commercial roofs are often completed in 2 to 3 days. Larger jobs are scoped and scheduled with a firm timeline before work begins.',
  },
  {
    question: 'Do you serve Sacramento area businesses?',
    answer: 'Yes. We serve commercial properties throughout Sacramento, Rancho Cordova, Roseville, Folsom, Elk Grove, and surrounding communities.',
  },
];

const commercialResources = blogPosts.filter(post => post.category === COMMERCIAL_CLUSTER_CATEGORY);

export default function CommercialRoofing() {
  return (
    <>
      <JsonLd
        faqs={faqs}
        pageName="Commercial Roofing Sacramento"
        schemaType="Service"
        serviceName="Commercial Roofing"
        breadcrumbs={[{ label: 'Commercial Roofing' }]}
      />
      {/* HERO */}
      <section className="relative bg-charcoal-dark text-white overflow-hidden">
        <HeroBackground
          image={ASSETS.commercialRoofing('Screenshot_2026-05-20_at_09.33.13.png')}
          alt="Commercial roofing project in the Sacramento area"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(15,20,28,0.93) 0%, rgba(15,20,28,0.75) 50%, rgba(15,20,28,0.35) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="inline-block text-xs bg-gold text-white px-3 py-1 font-semibold uppercase tracking-wider mb-5">Sacramento Commercial</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Commercial Roofing<br />
              <span className="text-gold">Done Right, On Schedule</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Flat roof repair, replacement, and maintenance for Sacramento area commercial properties. Licensed, insured, and focused on clear assessments, practical recommendations, and reliable project timelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href="tel:9167613866" className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold">
                <Phone size={18} /> Call 916-761-3866
              </a>
              <a
                href="#commercial-quote"
                onClick={e => handleSamePageAnchorClick(e, 'commercial-quote')}
                className="inline-flex items-center justify-center gap-2 btn-outline py-4 px-8 text-base font-semibold"
              >
                Request Commercial Assessment <ArrowRight size={18} />
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
              <span className="flex items-center gap-1.5"><Shield size={13} className="text-gold" /> Licensed &amp; Insured</span>
              <span className="flex items-center gap-1.5"><Award size={13} className="text-gold" /> COI Available on Request</span>
              <span className="flex items-center gap-1.5"><Clock size={13} className="text-gold" /> Flexible Scheduling</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnswerSummary
            title="Commercial roofing in Sacramento: quick answer"
            points={[
              'Flat and low-slope roof inspections',
              'Repair or replacement recommendations',
              'Scheduling around business operations',
              'Insurance documentation for storm damage',
            ]}
          >
            Commercial roofing problems should be inspected when you see ponding water, membrane damage, failed seams, or interior leaks. PRC 13 Roofing documents the roof condition and explains whether repair or replacement is the right next step. Read our{' '}
            <Link to="/blog/commercial-roof-leak-repair-sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">commercial leak repair guide</Link>{' '}
            and{' '}
            <Link to="/blog/tpo-vs-epdm-commercial-roofing" className="text-gold font-semibold hover:text-gold-dark transition-colors">TPO vs EPDM comparison</Link>.
          </AnswerSummary>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Warning Signs</p>
              <h2 className="section-heading mb-5">Signs Your Commercial Roof Needs Attention</h2>
              <ul className="space-y-3 mb-6">
                {problems.map(p => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-body text-sm">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-gold/10 border-l-4 border-gold">
                <p className="text-sm text-body">
                  <strong className="text-headline">Catching problems early saves money.</strong> Small membrane cracks and failed seams are inexpensive to fix. Left alone, they become full-replacement jobs.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/Commercial roofing page image/6998f81ba2a2c02b517b9648-1.jpg"
                alt="Commercial roofing assessment"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Why PRC 13</p>
          <h2 className="section-heading mb-10">Commercial Roofing You Can Count On</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="bg-white border border-gray-100 p-6 hover:border-gold/30 hover:shadow-sm transition-all duration-200">
                <b.icon size={22} className="text-gold mb-4" />
                <h3 className="font-bold text-headline text-sm mb-2">{b.title}</h3>
                <p className="text-body text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
          <h2 className="section-heading mb-10">How We Handle Commercial Projects</h2>
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

      {/* GALLERY STRIP */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Work</p>
          <h2 className="section-heading mb-3">Sacramento Roofing Project Gallery</h2>
          <p className="section-subheading max-w-2xl mb-8">
            Recent roofing repair, replacement, and maintenance work completed by the PRC 13 team across the Sacramento area.
          </p>
          <GalleryStrip category="Roof Replacement" limit={4} showLink />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">5.0 Google Rating · 81 Reviews</p>
          <h2 className="section-heading mb-8">What Sacramento Business Owners Say</h2>
          <ReviewStrip count={3} variant="light" indices={[0, 1, 4]} />
        </div>
      </section>

      {/* COMMERCIAL ROOFING RESOURCES */}
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-3 mb-6">
            <BookOpen size={22} className="text-gold flex-shrink-0 mt-1" aria-hidden />
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Commercial Roofing Resources</p>
              <h2 className="section-heading mb-3">Plan Your Sacramento Commercial Roof</h2>
              <p className="text-body text-sm leading-relaxed max-w-3xl">
                Property owners across{' '}
                <Link to="/service-areas/sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">Sacramento</Link>{' '}
                and nearby communities use these guides for replacement, repair, TPO vs EPDM, maintenance, and leak response. Schedule a{' '}
                <Link to="/roof-inspection" className="text-gold font-semibold hover:text-gold-dark transition-colors">roof inspection</Link>{' '}
                or{' '}
                <Link to="/contact" className="text-gold font-semibold hover:text-gold-dark transition-colors">request a commercial roofing estimate</Link>.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commercialResources.map(resource => (
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

      {/* FAQ */}
      <section className="bg-cream py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
          <h2 className="section-heading mb-8">Commercial Roofing FAQs</h2>
          <FaqAccordion items={faqs} variant="light" />
        </div>
      </section>

      <LocalSeoLinks />

      {/* FINAL CTA */}
      <section id="commercial-quote" className="bg-charcoal-dark py-12 md:py-16 mobile-section-bottom md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Get Started</p>
              <h2 className="text-3xl font-bold text-white mb-4">Request a Commercial Roofing Assessment</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Tell us about your property and we'll get back to you quickly. Free assessment, honest scope of work, written quote.
              </p>
              <ul className="space-y-2 mb-6">
                {['Flexible scheduling around business hours', 'COI available on request', 'Insurance claim documentation available', 'Honest repair vs. replace guidance'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle size={14} className="text-gold flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="tel:9167613866" className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors">
                <Phone size={16} /> Or call: 916-761-3866
              </a>
            </div>
            <LeadForm
              sourcePage="commercial-roofing"
              variant="full"
              hideEmail
              hideReason
              compactSpacing
              submitLabel="Request Commercial Assessment"
            />
          </div>
        </div>
      </section>
    </>
  );
}
