import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Star,
  Shield,
  CheckCircle,
  ArrowRight,
  Award,
  Droplets,
  CloudRain,
  Home as HomeIcon,
  Layers,
  MapPin,
  AlertTriangle,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import GoogleReviewsLink from '../components/GoogleReviewsLink';
import GoogleIcon from '../components/GoogleIcon';
import HeroLeadFormPanel from '../components/HeroLeadFormPanel';
import FloatingInspectionCta from '../components/FloatingInspectionCta';
import BeforeAfter from '../components/BeforeAfter';
import { GOOGLE_REVIEW_COUNT, PHONE_DISPLAY, PHONE_SMS, PHONE_TEL } from '../data/site';
import FaqAccordion, { type FaqItem } from '../components/FaqAccordion';
import { reviews } from '../data/reviews';
import { serviceAreas } from '../data/serviceAreas';
import { PRIMARY_CTA } from '../data/cta';
import HeroBackground from '../components/HeroBackground';
import JsonLd from '../components/JsonLd';
import ProcessStrip from '../components/ProcessStrip';
import FinancingSection from '../components/FinancingSection';
import OptimizedImage from '../components/OptimizedImage';
import { ASSETS } from '../data/assets';

const HOME_FINAL_CTA_IMAGE = '/assets/brand/home-final-cta-bg.webp';

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d398791.8191967971!2d-121.30935204999999!3d38.658971349999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x22fc7c8ee9511c53%3A0x45dcf5879ee4c590!2sPRC%2013%20Roofing%20Inc.!5e0!3m2!1sen!2sus!4v1779235670101!5m2!1sen!2sus';

const homeFaqs: FaqItem[] = [
  {
    question: 'How long does a roof replacement take?',
    answer:
      'Most Sacramento residential roof replacements are completed in one to two days. Larger or more complex roofs may take a third day. We give you a firm schedule before the project starts and stick to it.',
  },
  {
    question: 'Do you offer free inspections?',
    answer:
      'Yes, all inspections are free with no obligation. Our roofing team reviews your roof, explains what we find, and gives you an honest recommendation. If a repair is all you need, we\'ll tell you that.',
  },
  {
    question: 'Do you help with insurance claims?',
    answer:
      'Absolutely. We work alongside your insurance adjuster, document all storm damage thoroughly, and make sure nothing gets missed. We\'ve helped many Sacramento homeowners get the full coverage they\'re owed.',
  },
  {
    question: 'What roofing materials do you install?',
    answer:
      'We install architectural shingles, standing seam and corrugated metal roofing, and tile roofing. Architectural shingles are the most popular choice for Sacramento homes. We\'ll walk you through the options during your free inspection.',
  },
  {
    question: 'Is financing available?',
    answer:
      'Yes. We offer financing options on qualifying projects so you can replace your roof without waiting. Ask us about financing when you schedule your inspection.',
  },
  {
    question: 'Do you serve areas outside Sacramento?',
    answer:
      'Yes. We serve the greater Sacramento area including Roseville, Rocklin, Folsom, Rancho Cordova, Elk Grove, Granite Bay, El Dorado Hills, Orangevale, Lincoln, Woodland, Davis, and Florin.',
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

const problemCards: {
  Icon: LucideIcon;
  label: string;
  sub: string;
  href: string;
  highlight: boolean;
}[] = [
  { Icon: Droplets, label: 'I Have a Leak', sub: 'Stop the damage before it spreads', href: '/roof-repair', highlight: false },
  { Icon: CloudRain, label: 'Storm Damage', sub: 'Insurance claim help available', href: '/emergency-roof-repair', highlight: false },
  { Icon: HomeIcon, label: 'My Roof Is Old', sub: 'Time for a full replacement', href: '/roof-replacement', highlight: true },
  { Icon: Layers, label: 'I Want Metal Roofing', sub: 'Durable, long-lasting option', href: '/metal-roofing', highlight: false },
];

export default function Home() {
  const [localTab, setLocalTab] = useState<'areas' | 'map'>('areas');

  return (
    <>
      <JsonLd faqs={homeFaqs} pageName="PRC 13 Roofing Sacramento" />
      <FloatingInspectionCta />
      {/* HERO */}
      <section className="relative bg-charcoal-dark overflow-hidden md:min-h-screen">
        <HeroBackground priority imageClassName="hero-mobile-roof-focus object-[58%_40%] md:object-[58%_center] contrast-[1.06] saturate-[1.06]" />
        {/* Layered overlay system */}
        {/* Mobile overlay: strong behind copy, clearer toward image detail. */}
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: 'linear-gradient(112deg, rgba(5,14,26,0.82) 0%, rgba(5,14,26,0.72) 40%, rgba(5,14,26,0.28) 72%, rgba(5,14,26,0.10) 100%)' }}
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: 'linear-gradient(to bottom, rgba(5,14,26,0.16) 0%, rgba(5,14,26,0.04) 42%, rgba(5,14,26,0.0) 72%)' }}
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: 'linear-gradient(to top, rgba(5,14,26,0.28) 0%, rgba(5,14,26,0.06) 24%, rgba(5,14,26,0.0) 54%)' }}
        />
        {/* Desktop layer 1: base horizontal gradient with dark left and open right. */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{ background: 'linear-gradient(to right, rgba(15,20,28,0.88) 0%, rgba(15,20,28,0.70) 38%, rgba(15,20,28,0.20) 65%, rgba(15,20,28,0.05) 100%)' }}
        />
        {/* Desktop layer 2: top vignette dims sky and restores depth without flattening house. */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{ background: 'linear-gradient(to bottom, rgba(10,14,20,0.42) 0%, rgba(10,14,20,0.10) 30%, rgba(10,14,20,0.0) 60%)' }}
        />
        {/* Desktop layer 3: bottom fade improves trust strip readability. */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{ background: 'linear-gradient(to top, rgba(10,14,20,0.62) 0%, rgba(10,14,20,0.16) 18%, rgba(10,14,20,0.0) 36%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-[calc(var(--prc13-header-offset,104px)+1rem)] pb-10 sm:pb-14 md:pt-[176px] md:pb-24 lg:pt-[180px] lg:pb-28 w-full md:min-h-screen flex items-center">
          <div className="flex flex-col lg:block">
            <div className="max-w-2xl">
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 bg-gold/18 border border-gold/40 px-4 py-2 mb-4 md:gap-2.5 md:px-5 md:py-2.5 md:mb-6 shadow-[0_8px_24px_rgba(201,151,0,0.12)]">
                <StarRating />
                <span className="text-gold text-sm sm:text-base md:text-[17px] font-bold">5.0 Google Rating · {GOOGLE_REVIEW_COUNT} Reviews</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-5">
                Protect Your Home With Sacramento&apos;s Trusted Roofers
              </h1>

              <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-5 md:mb-8 max-w-xl">
                Same day inspections for Sacramento homeowners. You&apos;ll know exactly what your roof needs before spending a dime.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-4 md:mb-8">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold shadow-[0_14px_34px_rgba(201,151,0,0.26)]">
                  {PRIMARY_CTA}
                  <ArrowRight size={18} />
                </Link>
                <a href="tel:9167613866" className="inline-flex items-center justify-center gap-2 border border-white/35 bg-white/8 text-white hover:bg-white/14 hover:border-white/55 font-semibold rounded-brand py-4 px-8 text-base transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0">
                  <Phone size={18} />
                  Call 916-761-3866
                </a>
              </div>
              <p className="mb-4 md:mb-8 max-w-xl text-sm leading-relaxed text-gray-300">
                You&apos;ll know exactly what your roof needs before making a decision.
              </p>

              {/* Trust strip */}
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 md:gap-x-6 md:gap-y-2 text-sm text-gray-200">
                <span className="flex items-center gap-1.5"><Shield size={14} className="text-gold" /> Licensed &amp; Insured</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-gold" /> Insurance Claims Welcome</span>
                <span className="flex items-center gap-1.5"><Award size={14} className="text-gold" /> Financing Available</span>
              </div>
            </div>

            <HeroLeadFormPanel
              sourcePage="home-hero"
              title="Schedule Your Free Roof Inspection"
              subtitle="Most Sacramento homeowners get a same-day or next-business-day assessment."
              className="mt-5 lg:mt-0"
            />
          </div>
        </div>
      </section>

      {/* Storm season emergency (static) */}
      <div className="bg-gold/10 border-b border-gold/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-body">
          <AlertTriangle size={16} className="text-gold flex-shrink-0" aria-hidden />
          <span>
            Storm damage or active leak?{' '}
            <Link to="/emergency-roof-repair" className="text-gold font-semibold hover:text-gold-dark transition-colors">
              Emergency roof repair →
            </Link>
          </span>
        </div>
      </div>

      {/* PROBLEM ENTRY CARDS */}
      <section className="bg-white pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-sm font-semibold text-gold uppercase tracking-widest mb-3">We Can Help</p>
          <h2 className="section-heading text-center mb-10">What's Going On With Your Roof?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {problemCards.map(card => (
              <Link
                key={card.label}
                to={card.href}
                className={`group relative card-brand p-6 border-2 cursor-pointer transition-all duration-250 ease-out
                  hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                  ${card.highlight
                    ? 'border-gold bg-gold/5 hover:bg-gold/10 hover:border-gold hover:shadow-[0_8px_24px_rgba(201,151,0,0.18)]'
                    : 'border-gray-100 bg-gray-50 hover:border-gold/50 hover:bg-white'
                  }`}
              >
                {card.highlight && (
                  <span className="absolute top-3 right-3 text-xs bg-gold text-white px-2 py-0.5 font-semibold rounded-brand">
                    Most Common
                  </span>
                )}
                <card.Icon size={28} className="text-gold mb-3" strokeWidth={1.75} aria-hidden />
                <p className={`font-bold text-base mb-1 ${card.highlight ? 'text-gold-dark' : 'text-headline'} group-hover:text-gold transition-colors duration-200`}>
                  {card.label}
                </p>
                <p className="text-sm text-body">{card.sub}</p>
                <ArrowRight size={16} className="mt-3 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="section-heading mb-2">Our Roofing Services</h2>
          <p className="section-subheading mb-10 max-w-2xl">Residential roofing is our focus. Roof replacement is our specialty.</p>

          {/* Primary replacement card */}
          <div className="grid md:grid-cols-[1.08fr_0.92fr] gap-7 mb-7 items-stretch">
            <Link
              to="/roof-replacement"
              className="group relative overflow-hidden bg-charcoal-dark text-white p-9 md:p-10 hover:bg-charcoal transition-colors duration-200 min-h-[248px] flex flex-col justify-between shadow-[0_12px_32px_rgba(15,20,28,0.16)]"
            >
              <div>
                <span className="inline-block text-xs bg-gold text-white px-2.5 py-1 font-semibold uppercase tracking-wider mb-5">Most Popular Service</span>
                <h3 className="text-3xl md:text-[2.15rem] font-bold mb-4 group-hover:text-gold transition-colors">Roof Replacement</h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                  Full tear-off and replacement with quality materials. Most Sacramento roofs are replaced in 1 to 2 days. Financing available.
                </p>
              </div>
              <div className="flex items-center gap-2 text-gold text-sm font-semibold mt-6">
                Learn More <ArrowRight size={16} />
              </div>
            </Link>

            <Link
              to="/roof-repair"
              className="group relative overflow-hidden bg-white border border-gray-200 text-charcoal p-8 hover:border-gold/40 hover:shadow-sm transition-all duration-200 min-h-[220px] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-headline mb-3 group-hover:text-gold transition-colors">Roof Repair</h3>
                <p className="text-body text-sm leading-relaxed max-w-sm">
                  Leaks, storm damage, and missing shingles. We fix it fast and tell you honestly whether a repair is enough or replacement makes more sense.
                </p>
              </div>
              <div className="flex items-center gap-2 text-gold text-sm font-semibold mt-6">
                Learn More <ArrowRight size={16} />
              </div>
            </Link>
          </div>

          {/* Secondary row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Roof Inspection', desc: 'Honest condition assessment', href: '/roof-inspection' },
              { label: 'Metal Roofing', desc: '50+ year lifespan option', href: '/metal-roofing' },
              { label: 'Gutters & Siding', desc: 'Full exterior protection', href: '/gutters-siding' },
              { label: 'Commercial', desc: 'Small commercial projects', href: '/commercial-roofing' },
            ].map(s => (
              <Link
                key={s.label}
                to={s.href}
                className="group bg-white border border-gray-200 p-5 hover:border-gold/30 hover:shadow-sm transition-all duration-200"
              >
                <p className="font-semibold text-headline text-sm mb-1 group-hover:text-gold transition-colors">{s.label}</p>
                <p className="text-xs text-body">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="bg-[#F3F1EE] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left copy */}
            <div>
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">
                Locally Owned &nbsp;·&nbsp; Sacramento &nbsp;·&nbsp; Licensed &amp; Insured
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-headline leading-tight mb-5">
                Roofing Recommendations<br className="hidden sm:block" /> You Can Actually Trust
              </h2>
              <p className="text-body text-base leading-relaxed mb-7">
                We help Sacramento homeowners make confident roofing decisions without pressure or confusing sales tactics. Whether you need a repair, inspection, or full replacement, our team focuses on honest recommendations, quality workmanship, and clear communication from start to finish.
              </p>

              <ul className="space-y-2.5 mb-8">
                {[
                  'Honest inspections that explain whether repair or replacement makes more sense.',
                  'Most estimates scheduled within 24 hours.',
                  'Help with storm damage and insurance claims.',
                  'Licensed, insured, and financing available.',
                  'Residential roofing specialists serving Sacramento homeowners.',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                    <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="inline-block btn-gold px-7 py-3.5 text-sm font-semibold mb-4"
              >
                {PRIMARY_CTA}
              </Link>
              <p className="text-sm text-body">
                <Phone size={13} className="inline mr-1.5 text-gold" />
                Call us directly:{' '}
                <a href="tel:9167613866" className="text-gold font-semibold hover:underline">
                  916-761-3866
                </a>
              </p>

              {/* Review snippet */}
              <div className="mt-8 border-l-2 border-gold pl-5">
                <div className="flex gap-0.5 mb-1.5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={13} className="fill-gold text-gold" />)}
                </div>
                <p className="text-body text-sm italic leading-relaxed mb-2">
                  "Very informative and very honest. Very efficient and detail oriented. He goes above and beyond what is asked of him."
                </p>
                <p className="text-xs text-gray-400 font-medium">Ruby M.</p>
              </div>
            </div>

            {/* Right image */}
            <div className="relative">
              <OptimizedImage
                src={ASSETS.brand.recommendationsPhoto}
                alt="Roofing crew working on a Sacramento home"
                width={800}
                height={800}
                className="aspect-square"
              />
            </div>

          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Badge */}
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-2 bg-gold/10 border border-gold/30 px-5 py-2.5 mb-5 rounded-brand">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-gold text-gold" />)}
              </div>
              <span className="font-bold text-headline">5.0 Google Rating · {GOOGLE_REVIEW_COUNT} Reviews</span>
            </div>
            <h2 className="section-heading text-center">What Sacramento Homeowners Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {reviews.slice(0, 3).map(review => (
              <div
                key={review.name}
                className="relative card-brand p-7 border bg-white border-gray-200 shadow-[0_1px_4px_rgba(0,0,0,0.05)] transition-all duration-250 ease-out hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_6px_20px_rgba(0,0,0,0.09)]"
              >
                <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm" aria-label="Google review">
                  <GoogleIcon className="h-4 w-4" />
                </div>
                <StarRating count={review.rating} />
                <p className="text-body text-sm leading-relaxed mt-3 mb-5 italic">"{review.text}"</p>
                <p className="text-headline font-semibold text-sm">{review.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <GoogleReviewsLink variant="button" />
          </div>
        </div>
      </section>

      {/* Local to Sacramento areas and map */}
      <section id="service-areas" className="relative bg-[#ECEAE6] py-10 md:py-12 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Local to Sacramento</p>
            <h2 className="text-2xl md:text-3xl font-bold text-headline mb-2">
              Proudly Serving Sacramento &amp; Surrounding Communities
            </h2>
            <p className="text-body text-sm max-w-xl mx-auto leading-relaxed">
              Based in Sacramento, PRC 13 Roofing serves homeowners across the greater Sacramento area with honest roof inspections, repairs, and replacements.
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-6">
            <button
              type="button"
              onClick={() => setLocalTab('areas')}
              className={`px-5 py-2 text-sm font-semibold rounded-brand transition-colors ${
                localTab === 'areas' ? 'bg-charcoal-dark text-white' : 'bg-white text-body border border-gray-200 hover:border-gold/40'
              }`}
            >
              Service Areas
            </button>
            <button
              type="button"
              onClick={() => setLocalTab('map')}
              className={`px-5 py-2 text-sm font-semibold rounded-brand transition-colors flex items-center gap-1.5 ${
                localTab === 'map' ? 'bg-charcoal-dark text-white' : 'bg-white text-body border border-gray-200 hover:border-gold/40'
              }`}
            >
              <MapPin size={14} /> Find Us on the Map
            </button>
          </div>

          {localTab === 'areas' ? (
            <div className="flex flex-wrap justify-center gap-1.5 max-w-2xl mx-auto">
              {serviceAreas.map(area => (
                <Link
                  key={area.slug}
                  to={`/service-areas#${area.slug}`}
                  className={`group card-brand inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-sm ${
                    area.name === 'Sacramento'
                      ? 'bg-charcoal-dark text-white border border-charcoal-dark shadow-sm hover:bg-charcoal hover:text-gold'
                      : 'bg-[#2E3744] text-gray-200 border border-[#2E3744] hover:text-gold shadow-sm'
                  }`}
                >
                  {area.name}
                  <ArrowRight size={12} className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              ))}
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-1 text-gold text-sm font-semibold mt-3 hover:underline"
              >
                View all service areas <ArrowRight size={14} />
              </Link>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto overflow-hidden rounded-brand shadow-md">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                className="w-full h-[280px] md:h-[360px] block"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PRC 13 Roofing location in Sacramento"
              />
            </div>
          )}
        </div>
      </section>

      <ProcessStrip />

      {/* BEFORE / AFTER */}
      <section className="bg-cream py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <BeforeAfter limit={3} />
          <div className="text-center mt-10">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:text-gold-light transition-colors">
              View Full Project Gallery <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <FinancingSection />

      {/* FAQ */}
      <section className="bg-[#F3F1EE] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Common Questions</p>
            <h2 className="section-heading mb-3">Frequently Asked Questions</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Honest answers to the questions Sacramento homeowners ask us most.
            </p>
          </div>
          <FaqAccordion items={homeFaqs} variant="light" />
          <div className="mt-10 text-center">
            <p className="text-body text-sm mb-4">Still have questions? We're easy to reach.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:9167613866" className="inline-flex items-center justify-center gap-2 btn-gold px-7 py-3 text-sm font-semibold">
                <Phone size={15} /> Call 916-761-3866
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-charcoal text-charcoal font-semibold px-7 py-3 text-sm hover:bg-charcoal hover:text-white transition-colors">
                Send a Message <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final phone-first CTA with hero form above */}
      <section data-final-cta className="relative overflow-hidden bg-charcoal-dark py-14 md:py-16 mobile-section-bottom">
        <img
          src={HOME_FINAL_CTA_IMAGE}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/65" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/88 via-charcoal-dark/68 to-charcoal-dark/82" aria-hidden />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Free Roof Inspection?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Already filled out the form above? Call or text PRC 13 directly. Most Sacramento homes are inspected within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center justify-center gap-2 btn-gold px-8 py-4 text-base font-semibold">
              <Phone size={18} /> Call {PHONE_DISPLAY}
            </a>
            <a
              href={PHONE_SMS}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 text-base hover:border-gold hover:text-gold transition-colors rounded-brand"
            >
              Text Us
            </a>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:text-gold-light transition-colors"
          >
            Prefer a message? Contact page <ArrowRight size={14} />
          </Link>
          <p className="text-gray-600 text-xs mt-6 flex items-center justify-center gap-1.5">
            <CheckCircle size={12} className="text-gold" />
            Financing available on qualifying projects
          </p>
        </div>
      </section>
    </>
  );
}
