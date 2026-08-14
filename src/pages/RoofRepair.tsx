import { Link } from 'react-router-dom';
import { handleSamePageAnchorClick } from '../lib/scroll';
import { Phone, CheckCircle, ArrowRight, AlertTriangle, Clock, Star, Shield, MapPin, CreditCard, BookOpen } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import HeroLeadFormPanel from '../components/HeroLeadFormPanel';
import TelLink from '../components/TelLink';
import { PHONE_DISPLAY, GOOGLE_REVIEW_COUNT, LICENSE_SHORT } from '../data/site';
import Breadcrumbs from '../components/Breadcrumbs';
import FaqAccordion, { type FaqItem } from '../components/FaqAccordion';
import ReviewStrip from '../components/ReviewStrip';
import GalleryStrip from '../components/GalleryStrip';
import HeroBackground from '../components/HeroBackground';
import JsonLd from '../components/JsonLd';
import AnswerSummary from '../components/AnswerSummary';
import LocalSeoLinks from '../components/LocalSeoLinks';
import SacramentoGuideCallout from '../components/SacramentoGuideCallout';
import RetrievalAnswers from '../components/RetrievalAnswers';
import { ASSETS } from '../data/assets';
import { blogPosts } from '../data/blog';
import { ROOF_REPAIR_HUB_RESOURCE_SLUGS } from '../data/blogRoofRepairCluster';
import { SERVICE_HUB_RESOURCE_LIMIT } from '../data/internalLinking';

const repairResources = ROOF_REPAIR_HUB_RESOURCE_SLUGS.map(slug => blogPosts.find(post => post.slug === slug))
  .filter((post): post is (typeof blogPosts)[number] => Boolean(post))
  .slice(0, SERVICE_HUB_RESOURCE_LIMIT);

const repairSigns = [
  'Active leak or water stains on your ceiling',
  'Missing, cracked, or curling shingles',
  'Storm damage from wind, hail, or falling debris',
  'Damaged flashing around chimneys or vents',
  'Flat or low-slope roof ponding, bubbling, or membrane splits',
  'Visible daylight through your attic boards',
];

const repairServices = [
  {
    title: 'Leak Repair',
    desc: 'We locate the source of the leak, repair the failed area, and help stop further water intrusion inside the home.',
  },
  {
    title: 'Storm Damage',
    desc: 'We inspect storm related roof damage, document affected areas carefully, and provide repair recommendations for homeowners and insurance claims.',
  },
  {
    title: 'Flat Roof Repair',
    desc: 'We inspect seams, drainage areas, and membrane damage to help prevent ongoing leaks and standing water issues.',
  },
  {
    title: 'Shingle Repair',
    desc: 'We replace damaged or lifted shingles and repair surrounding problem areas to help extend roof life.',
  },
  {
    title: 'Flashing Repair',
    desc: 'We repair damaged flashing around chimneys, vents, skylights, and valleys to help prevent future leaks.',
  },
];

const heroTrustItems = [
  { icon: Star, label: `${GOOGLE_REVIEW_COUNT} Google Reviews` },
  { icon: Shield, label: LICENSE_SHORT },
  { icon: MapPin, label: 'Sacramento Local Team' },
  { icon: CreditCard, label: 'Financing on Qualifying Projects' },
];

const repairVisitSteps = [
  {
    num: '01',
    title: 'Roof Inspection',
    desc: 'We inspect shingles, flashing, penetrations, drainage areas, and visible damage.',
  },
  {
    num: '02',
    title: 'Leak & Damage Assessment',
    desc: 'We identify the source of leaks or roof failures and document problem areas.',
  },
  {
    num: '03',
    title: 'Photos & Findings',
    desc: 'Our team takes photos and explains what we found in clear terms.',
  },
  {
    num: '04',
    title: 'Repair vs Replacement Guidance',
    desc: 'We explain whether a repair makes sense or if larger work should be considered.',
  },
  {
    num: '05',
    title: 'Written Recommendation',
    desc: 'You receive a clear repair recommendation or estimate with no pressure.',
  },
];

const repairVsReplace = [
  {
    scenario: 'Repair is likely enough',
    points: [
      'Your roof is under 15 years old',
      'Damage is limited to a specific area',
      'Rest of the roof is in good shape',
      'No recurring leak history',
    ],
    color: 'green',
  },
  {
    scenario: 'Replacement may make more sense',
    points: [
      'Your roof is 20+ years old',
      'You\'ve repaired the same area more than once',
      'Damage covers a large portion of the roof',
      'Insurance adjuster recommends replacement',
    ],
    color: 'gold',
  },
];

const repairFaqs: FaqItem[] = [
  {
    question: 'Can a roof leak be repaired without replacing the roof?',
    answer:
      'Yes. Many Sacramento roof leaks can be repaired without replacing the whole roof when the damage is localized and the surrounding roof is still in sound condition. PRC 13 inspects the source first and explains whether a focused repair is enough.',
  },
  {
    question: 'What affects roof repair cost in Sacramento?',
    answer:
      'Repair cost depends on the leak source, how many areas are involved, material type (shingle, tile, flat membrane), roof access, and whether decking or flashing must be replaced. PRC 13 provides a written estimate after inspection. There is no flat published price because each roof differs.',
  },
  {
    question: 'How quickly can you inspect my roof?',
    answer:
      'We aim to schedule inspections quickly during normal business hours, and we prioritize active leaks and interior water damage. Exact timing depends on weather, crew routing, and demand.',
  },
  {
    question: 'What is the difference between a temporary and permanent roof repair?',
    answer:
      'A temporary repair (such as emergency dry-in) slows water intrusion so the home can stay protected while materials arrive or a permanent repair is planned. A permanent repair addresses the actual failure: flashing, shingles, membrane, or decking, so the leak source is fixed, not just covered.',
  },
  {
    question: 'Can you match discontinued shingles or tile?',
    answer:
      'Matching depends on what is still available. When an exact match is discontinued, we explain blending options, limited section repairs, or whether a larger area should be replaced for a cleaner result. We do not promise a perfect match when the original product is no longer made.',
  },
  {
    question: 'Will insurance cover roof repair?',
    answer:
      'Insurance may cover repairs when damage is caused by a covered event such as wind, hail, or falling debris. Coverage varies by policy. We document visible damage to support your claim; the insurer decides what is covered.',
  },
  {
    question: 'How do I know if my roof damage is serious?',
    answer:
      'Interior stains, active leaks, missing shingles, damaged flashing, soft decking, or repeated leaks in the same area should be inspected promptly. Waiting can let water spread into insulation and framing.',
  },
  {
    question: 'When does roof repair stop making sense?',
    answer:
      'Replacement often makes more sense when the roof is near end of life, the same area has been repaired repeatedly, damage covers a large portion of the roof, or decking problems are widespread. We explain that threshold after inspection rather than defaulting to replacement.',
  },
  {
    question: 'Do you repair flat roofs?',
    answer:
      'Yes. We inspect seams, membrane damage, drainage, and ponding areas before recommending the right flat roof repair for residential and light commercial systems we service.',
  },
];

export default function RoofRepair() {
  return (
    <>
      <JsonLd
        faqs={repairFaqs}
        pageName="Roof Repair Sacramento"
        schemaType="Service"
        serviceName="Roof Repair"
        primaryImage={ASSETS.roofRepair('roof-repair-flat-roof-work.webp')}
        breadcrumbs={[{ label: 'Roof Repair' }]}
      />
      {/* HERO */}
      <section className="relative bg-charcoal-dark text-white overflow-hidden lg:min-h-[75vh]">
        <HeroBackground
          image={ASSETS.roofRepair('roof-repair-flat-roof-work.webp')}
          alt="Flat roof repair work on a Sacramento residential building"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(15,20,28,0.93) 0%, rgba(15,20,28,0.75) 50%, rgba(15,20,28,0.35) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-24 md:pt-24 md:pb-28 lg:py-28 w-full">
          <Breadcrumbs items={[{ label: 'Roof Repair' }]} />
          <div className="flex flex-col lg:block">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 px-4 py-1.5 mb-5 rounded-brand">
                <AlertTriangle size={14} className="text-gold" />
                <span className="text-gold text-sm font-medium">
                  Active leak?{' '}
                  <Link to="/emergency-roof-repair" className="underline hover:text-gold-light">
                    Emergency help →
                  </Link>
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Roof Repair in Sacramento<br />
                <span className="text-gold">Leaks, Shingles & Flashing</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                Roof repair in Sacramento, California for roof leaks, missing or damaged shingles, flashing issues, and storm damage. We find the source, explain your options, and start with a free inspection with no pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <TelLink location="roof-repair" className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold"><Phone size={18} /> Call {PHONE_DISPLAY}</TelLink>
                <a
                  href="#repair-quote"
                  onClick={e => handleSamePageAnchorClick(e, 'repair-quote')}
                  className="inline-flex items-center justify-center gap-2 btn-outline py-4 px-8 text-base font-semibold"
                >
                  Request Roof Repair Assessment <ArrowRight size={18} />
                </a>
              </div>
              <div className="mb-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-300">
                {heroTrustItems.map(item => (
                  <span key={item.label} className="flex items-center gap-1.5">
                    <item.icon size={13} className="text-gold" />
                    {item.label}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm flex items-center gap-1.5">
                <Clock size={13} /> We aim to schedule inspections quickly during business hours
              </p>
            </div>
            <HeroLeadFormPanel
              sourcePage="roof-repair-hero"
              title="Request Roof Repair Assessment"
              subtitle="Tell us what is happening and our team will follow up quickly."
              submitLabel="Request Roof Repair Assessment"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE REPAIR */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnswerSummary
            title="Sacramento roof repair: quick answer"
            points={[
              'Leaks, flashing, shingles, storm damage, and flat roofs',
              'Inspections prioritized for active leaks',
              'Repair vs replacement guidance included',
              'Insurance documentation available for storm damage',
            ]}
          >
            Many roof leaks can be repaired without replacing the entire roof. PRC 13 Roofing inspects the leak source, checks surrounding roof conditions, and explains whether a focused repair is enough for your Sacramento home, or whether replacement is the more durable path. For flat and low-slope systems on small commercial properties, see our{' '}
            <Link to="/commercial-roofing" className="text-gold font-semibold hover:text-gold-dark transition-colors">commercial and flat-roof services</Link>.
          </AnswerSummary>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Common Repairs</p>
              <h2 className="section-heading mb-5">Signs You Need a Roof Repair</h2>
              <ul className="space-y-3 mb-6">
                {repairSigns.map(sign => (
                  <li key={sign} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-body text-sm">{sign}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-charcoal-dark/5 border-l-4 border-charcoal">
                <p className="text-sm text-body">
                  <strong className="text-headline">Seeing water damage inside your home?</strong> That's an emergency. Call us immediately at{' '}
                  <TelLink location="roof-repair-inline" className="text-gold font-semibold hover:underline">{PHONE_DISPLAY}</TelLink>
                  {' '}or go to{' '}
                  <Link to="/emergency-roof-repair" className="text-gold font-semibold hover:underline">
                    emergency roof repair
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div>
              <img
                src={ASSETS.roofRepair('Screenshot_2026-05-20_at_09.28.51.png')}
                alt="Roof repair work"
                width={800}
                height={288}
                loading="lazy"
                className="w-full h-72 object-cover rounded-brand"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Repair vs. replace guidance */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Honest Assessment</p>
          <h2 className="section-heading mb-3">Repair or Replacement?</h2>
          <p className="section-subheading mb-8 max-w-2xl">
            Sometimes a repair is all you need. Sometimes the damage points to a bigger issue. We will explain both options clearly.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {repairVsReplace.map(section => (
              <div
                key={section.scenario}
                className={`p-6 border-2 ${section.color === 'green' ? 'border-green-200 bg-green-50' : 'border-gold/30 bg-gold/5'}`}
              >
                <h3 className={`font-bold text-base mb-4 ${section.color === 'green' ? 'text-green-800' : 'text-gold-dark'}`}>
                  {section.scenario}
                </h3>
                <ul className="space-y-2">
                  {section.points.map(point => (
                    <li key={point} className="flex items-start gap-2 text-sm text-body">
                      <CheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${section.color === 'green' ? 'text-green-600' : 'text-gold'}`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-charcoal text-white p-6 max-w-2xl">
            <p className="text-sm leading-relaxed">
              <strong className="text-gold">Our promise:</strong> If a repair is enough, we will say so. If replacement should be considered, we will explain why and document the damage.
            </p>
            <Link to="/roof-replacement" className="inline-flex items-center gap-1.5 text-gold hover:text-gold-light text-sm font-semibold mt-3 transition-colors">
              Learn about our replacement process <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <RetrievalAnswers
        heading="Roof repair answers Sacramento homeowners ask"
        intro="Short, standalone answers you can use before you call. Full FAQs appear later on this page."
        items={[
          {
            question: 'What does PRC 13 do for roof repair?',
            answer:
              'PRC 13 Roofing inspects the leak or damage source, documents findings, and performs focused repairs on shingles, flashing, penetrations, and flat-roof membrane issues when a full replacement is not required.',
            detail:
              'After temporary dry-in (if needed), the permanent repair addresses the failed detail so water is not just redirected for a short time.',
          },
          {
            question: 'What affects roof repair cost?',
            answer:
              'Cost is driven by leak location, material type, how many areas need work, roof access, and whether decking or flashing must be replaced, not by a one-size published rate.',
          },
          {
            question: 'When should you repair instead of replace?',
            answer:
              'Repair is usually enough when damage is localized, the roof is otherwise sound, and there is no long pattern of repeated leaks in the same area. Widespread wear, end-of-life materials, or soft decking often push the decision toward replacement.',
          },
        ]}
      />

      {/* REPAIR SERVICES */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Repair Services</p>
          <h2 className="section-heading mb-3">Roof Repairs We Handle</h2>
          <p className="section-subheading mb-8 max-w-2xl">
            We inspect the roof, explain what failed, and recommend the repair that actually solves the problem.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {repairServices.map(service => (
              <div key={service.title} className="bg-cream border border-gray-100 p-5 rounded-brand">
                <h3 className="font-bold text-headline text-sm mb-2">{service.title}</h3>
                <p className="text-body text-xs leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section className="bg-charcoal text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Storm Damage</p>
            <h2 className="text-3xl font-bold text-white mb-4">We Help With Insurance Claims</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              If your roof was damaged by wind, hail, or falling debris, we help document the damage clearly for your insurance claim. Our team takes photos, notes visible problem areas, and works directly with homeowners during the adjuster process so important repairs are not overlooked or underpaid.
            </p>
            <TelLink location="roof-repair" className="inline-flex items-center gap-2 btn-gold px-8 py-4 text-base font-semibold"><Phone size={18} /> Call {PHONE_DISPLAY}</TelLink>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Recent Work</p>
          <h2 className="section-heading mb-8">Project Gallery</h2>
          <GalleryStrip category="Roof Repairs" limit={4} showLink />
        </div>
      </section>

      {/* REPAIR VISIT PROCESS */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Repair Visit</p>
          <h2 className="section-heading mb-10">What Happens During a Roof Repair Visit</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {repairVisitSteps.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="text-3xl font-bold text-gold/20 mb-2">{step.num}</div>
                <h3 className="font-bold text-headline text-sm mb-2">{step.title}</h3>
                <p className="text-body text-xs leading-relaxed">{step.desc}</p>
                {i < repairVisitSteps.length - 1 && (
                  <div className="hidden md:block absolute top-5 -right-3 text-gray-200">
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">5.0 Google Rating · 81 Reviews</p>
          <h2 className="section-heading mb-8">What Sacramento Homeowners Say</h2>
          <ReviewStrip count={3} variant="light" indices={[0, 4, 5]} />
        </div>
      </section>

      {/* ROOF REPAIR RESOURCES */}
      <section className="bg-cream py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-3 mb-6">
            <BookOpen size={22} className="text-gold flex-shrink-0 mt-1" aria-hidden />
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Roof Repair Resources</p>
              <h2 className="section-heading mb-3">Sacramento Roof Repair Guides</h2>
              <p className="text-body text-sm leading-relaxed max-w-3xl">
                Planning a repair, not an emergency? These guides cover cost, shingles, flashing, chimneys, skylights, and tile systems for{' '}
                <Link to="/service-areas/sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">Sacramento</Link>,{' '}
                <Link to="/service-areas/folsom" className="text-gold font-semibold hover:text-gold-dark transition-colors">Folsom</Link>,{' '}
                <Link to="/service-areas/el-dorado-hills" className="text-gold font-semibold hover:text-gold-dark transition-colors">El Dorado Hills</Link>, and{' '}
                <Link to="/service-areas/colfax" className="text-gold font-semibold hover:text-gold-dark transition-colors">Colfax</Link>.
                Hiring for a specific community? See{' '}
                <Link to="/roof-repair/granite-bay" className="text-gold font-semibold hover:text-gold-dark transition-colors">roof repair in Granite Bay</Link>.
                Active leak right now? See{' '}
                <Link to="/emergency-roof-repair" className="text-gold font-semibold hover:text-gold-dark transition-colors">emergency roof repair</Link>.
                Start with a{' '}
                <Link to="/roof-inspection" className="text-gold font-semibold hover:text-gold-dark transition-colors">free roof inspection</Link>{' '}
                or{' '}
                <Link to="/contact" className="text-gold font-semibold hover:text-gold-dark transition-colors">request a repair estimate</Link>.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {repairResources.map(resource => (
              <Link
                key={resource.slug}
                to={`/blog/${resource.slug}`}
                className="card-brand bg-white border border-gray-100 p-5 hover:border-gold/30 hover:shadow-sm transition-all duration-200 group"
              >
                <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-2">{resource.readTime}</p>
                <h3 className="font-bold text-headline text-sm leading-snug mb-2 group-hover:text-gold transition-colors">
                  {resource.title}
                </h3>
                <p className="text-body text-xs leading-relaxed line-clamp-3">{resource.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
          <h2 className="section-heading mb-8">Roof Repair FAQs</h2>
          <FaqAccordion items={repairFaqs} variant="light" />
        </div>
      </section>

      <SacramentoGuideCallout
        href="/service-areas/sacramento"
        label="View our Sacramento service area page"
      />

      <LocalSeoLinks />

      {/* FORM CTA */}
      <section id="repair-quote" data-final-cta className="bg-charcoal-dark py-12 md:py-16 mobile-section-bottom md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Get Help Fast</p>
              <h2 className="text-3xl font-bold text-white mb-4">Request a Repair Estimate</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Tell us what's going on and we'll get back to you quickly. Most repairs in Sacramento can be assessed and scheduled the same week.
              </p>
              <ul className="space-y-2 mb-6">
                {['Fast response', 'Written estimate before any work starts', 'Insurance documentation available', 'No repair too small'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle size={14} className="text-gold flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <TelLink location="roof-repair-final" className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors">
                <Phone size={16} /> Or call: {PHONE_DISPLAY}
              </TelLink>
            </div>
            <LeadForm
              sourcePage="roof-repair"
              variant="full"
              hideEmail
              hideReason
              compactSpacing
              submitLabel="Get Roof Repair Estimate"
            />
          </div>
        </div>
      </section>
    </>
  );
}
