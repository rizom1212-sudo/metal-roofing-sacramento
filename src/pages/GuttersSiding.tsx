import { Phone, CheckCircle, ArrowRight, Shield, Award, Droplets, Home, Wind, Layers, Hammer } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import ReviewStrip from '../components/ReviewStrip';
import HeroBackground from '../components/HeroBackground';
import FaqAccordion, { type FaqItem } from '../components/FaqAccordion';
import JsonLd from '../components/JsonLd';
import { ASSETS } from '../data/assets';

// ─── FAQ data split by group ────────────────────────────────────────────────

const exteriorFaqs: FaqItem[] = [
  {
    question: 'How much do new gutters or siding cost in Sacramento?',
    answer: 'Cost depends on the home size, material, access, and whether fascia or soffit repairs are needed. We inspect the exterior first and provide a clear written estimate before work starts.',
  },
  {
    question: 'How long does gutter or siding work usually take?',
    answer: 'Most gutter installations are completed in one day. Siding timelines vary by project size and material, and we give you the schedule before installation begins.',
  },
  {
    question: 'Do you replace damaged fascia and soffit boards?',
    answer: 'Yes. Fascia and soffit damage often appears when gutters fail or water reaches the roofline. We assess and replace damaged boards as part of the exterior scope when needed.',
  },
  {
    question: 'How do I know if my gutters need to be replaced vs. repaired?',
    answer: 'Small leaks may be repairable, but gutters pulling from fascia, sagging, rusting through, or overflowing during rain often need replacement. We tell you which option makes sense after inspection.',
  },
  {
    question: 'What siding materials work best in Sacramento heat?',
    answer: 'Fiber cement and quality vinyl are both practical Sacramento options. Fiber cement handles heat well, resists moisture, and holds paint; vinyl is lower cost and low maintenance.',
  },
  {
    question: 'Can exterior water damage affect my roof?',
    answer: 'Yes. Failed gutters, rotted fascia, and poor drainage can push water into the roof edge and lead to leaks. Fixing exterior protection helps prevent future roofline damage.',
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function GuttersSiding() {
  return (
    <>
      <JsonLd
        faqs={exteriorFaqs}
        pageName="Gutters and Siding Sacramento"
        schemaType="Service"
        serviceName="Gutters and Siding"
      />
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-charcoal-dark text-white overflow-hidden">
        <HeroBackground image={ASSETS.guttersSiding('1e8ea3b0-e1a4-4e74-97d2-2209fbeeeb89.webp')} />
        {/* Dark overlay with stronger contrast on the left. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(12,17,24,0.95) 0%, rgba(12,17,24,0.82) 45%, rgba(12,17,24,0.40) 100%)',
          }}
        />
        {/* bottom fade for legibility */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,14,20,0.60) 0%, transparent 35%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-7 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="inline-block text-xs bg-gold text-white px-3 py-1 font-semibold uppercase tracking-wider mb-5">
              Gutters &bull; Siding &bull; Fascia &bull; Soffit &bull; Exterior Protection
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-5">
              Exterior Protection<br />
              <span className="text-gold">Services</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Protect your Sacramento home with professional gutter, siding, and exterior protection services built to prevent costly damage.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="#exterior-quote"
                className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold"
              >
                Free Inspection <ArrowRight size={17} />
              </a>
              <a
                href="tel:9167613866"
                className="inline-flex items-center justify-center gap-2 btn-outline py-4 px-8 text-base font-semibold"
              >
                <Phone size={17} /> Call Now
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-300">
              <span className="flex items-center gap-1.5"><Shield size={13} className="text-gold" /> Licensed &amp; Insured</span>
              <span className="flex items-center gap-1.5"><Award size={13} className="text-gold" /> Financing Available</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={13} className="text-gold" /> Sacramento Area</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={13} className="text-gold" /> Free Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY EXTERIOR PROTECTION MATTERS ─────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-7">
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: Droplets,
                title: 'Prevent Water Damage',
                desc: 'Protect your foundation, roofline, and exterior from moisture issues that lead to expensive structural repairs.',
              },
              {
                icon: Home,
                title: 'Improve Curb Appeal',
                desc: 'Keep your home looking clean, maintained, and protected while improving appearance and resale value.',
              },
              {
                icon: Shield,
                title: 'Protect Home Structure',
                desc: 'Prevent long-term exterior deterioration and costly repairs by maintaining your home\'s first line of defense.',
              },
            ].map(item => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-9 h-9 bg-gold/10 flex items-center justify-center mt-0.5">
                  <item.icon size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-bold text-headline text-sm mb-1">{item.title}</p>
                  <p className="text-body text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUTTERS HUB ──────────────────────────────────────────────────── */}
      <section id="gutters-section" className="bg-[#F3F1EE] py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-7">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={ASSETS.guttersSiding('prc-13-roofing-website-image-hh-2880w.webp')}
                alt="Gutter installation on Sacramento home"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-charcoal-dark/75 px-5 py-3">
                <p className="text-white text-xs font-medium">Seamless gutter installation in Sacramento</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Gutters</p>
              <h2 className="text-3xl md:text-4xl font-bold text-headline leading-tight mb-4">
                Gutter Installation &amp; Protection
              </h2>
              <p className="text-body text-base leading-relaxed mb-8 max-w-lg">
                Gutters are the first line of defense for your foundation, fascia, and landscaping. Failing gutters can cause damage that costs far more than replacement. We install seamless systems built to last.
              </p>

              {/* 2 service cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border border-gray-100 p-5">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <Layers size={17} className="text-gold flex-shrink-0" />
                    <p className="font-bold text-headline text-sm">Seamless Gutters</p>
                  </div>
                  <p className="text-body text-xs leading-relaxed mb-4">
                    Custom-formed aluminum gutters with no seams reduce the most common failure point and provide lasting protection.
                  </p>
                  <a href="#exterior-quote" className="inline-flex items-center gap-1 text-gold text-xs font-semibold hover:underline">
                    Get estimate <ArrowRight size={12} />
                  </a>
                </div>
                <div className="bg-white border border-gray-100 p-5">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <Shield size={17} className="text-gold flex-shrink-0" />
                    <p className="font-bold text-headline text-sm">Gutter Guards</p>
                  </div>
                  <p className="text-body text-xs leading-relaxed mb-4">
                    Leaf and debris guards reduce cleaning frequency and prevent blockages that cause overflow and fascia damage.
                  </p>
                  <a href="#exterior-quote" className="inline-flex items-center gap-1 text-gold text-xs font-semibold hover:underline">
                    Get estimate <ArrowRight size={12} />
                  </a>
                </div>
              </div>

              <p className="text-body text-xs leading-relaxed mb-6 border-l-2 border-gold/40 pl-3 max-w-lg">
                Also offering gutter repair, gutter replacement, fascia repair, soffit repair, and drainage solutions.
              </p>

              {/* Signs list */}
              <div>
                <p className="font-semibold text-headline text-sm mb-3">Signs Your Gutters Need Attention</p>
                <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-4">
                  {[
                    'Water pooling near foundation after rain',
                    'Gutters pulling away from fascia',
                    'Visible rust, holes, or cracks',
                    'Water overflowing during rainfall',
                    'Peeling paint or rot on fascia/soffit',
                    'Erosion in landscaping below roofline',
                  ].map(p => (
                    <li key={p} className="flex items-start gap-2 text-xs text-body">
                      <CheckCircle size={12} className="text-gold mt-0.5 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIDING HUB ───────────────────────────────────────────────────── */}
      <section id="siding-section" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-7">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Content on the left for this section. */}
            <div className="lg:order-1">
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Siding</p>
              <h2 className="text-3xl md:text-4xl font-bold text-headline leading-tight mb-4">
                Siding Installation &amp; Replacement
              </h2>
              <p className="text-body text-base leading-relaxed mb-8 max-w-lg">
                New siding transforms your home's curb appeal while providing a critical moisture barrier. Sacramento homes need materials that handle heat, resist moisture, and hold up year after year.
              </p>

              {/* 2 service cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#F3F1EE] border border-gray-200 p-5">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <Wind size={17} className="text-gold flex-shrink-0" />
                    <p className="font-bold text-headline text-sm">Vinyl Siding</p>
                  </div>
                  <p className="text-body text-xs leading-relaxed mb-4">
                    Low-maintenance, weather-resistant vinyl in a wide range of styles. Cost-effective and durable for Sacramento's climate.
                  </p>
                  <a href="#exterior-quote" className="inline-flex items-center gap-1 text-gold text-xs font-semibold hover:underline">
                    Get estimate <ArrowRight size={12} />
                  </a>
                </div>
                <div className="bg-[#F3F1EE] border border-gray-200 p-5">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <Hammer size={17} className="text-gold flex-shrink-0" />
                    <p className="font-bold text-headline text-sm">Fiber Cement Siding</p>
                  </div>
                  <p className="text-body text-xs leading-relaxed mb-4">
                    Hardie Board and fiber cement panels handle heat, resist moisture, hold paint, and deliver premium curb appeal.
                  </p>
                  <a href="#exterior-quote" className="inline-flex items-center gap-1 text-gold text-xs font-semibold hover:underline">
                    Get estimate <ArrowRight size={12} />
                  </a>
                </div>
              </div>

              <p className="text-body text-xs leading-relaxed mb-6 border-l-2 border-gold/40 pl-3 max-w-lg">
                Also offering siding repair, siding replacement, wood siding, moisture barrier upgrades, and exterior trim work.
              </p>

              {/* Signs list */}
              <div>
                <p className="font-semibold text-headline text-sm mb-3">Signs Your Siding Needs Replacement</p>
                <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-4">
                  {[
                    'Warped, cracked, or rotting panels',
                    'Fading or peeling paint that won\'t hold',
                    'Soft or spongy feel when pressed',
                    'Visible gaps or separating seams',
                    'Higher heating and cooling bills',
                    'Mold or mildew growth on surface',
                  ].map(p => (
                    <li key={p} className="flex items-start gap-2 text-xs text-body">
                      <CheckCircle size={12} className="text-gold mt-0.5 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image on the right. */}
            <div className="relative overflow-hidden lg:order-2">
              <img
                src={ASSETS.guttersSiding('ee8a6aa8-96e4-4a0c-aea7-353daf796d0b.webp')}
                alt="Siding installation on Sacramento home"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-charcoal-dark/75 px-5 py-3">
                <p className="text-white text-xs font-medium">Exterior siding installation in Sacramento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECENT EXTERIOR PROJECTS ─────────────────────────────────────── */}
      <section className="bg-[#F3F1EE] py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-7">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Recent Work</p>
          <h2 className="section-heading mb-2">Recent Exterior Projects</h2>
          <p className="section-subheading max-w-xl mb-10">
            Gutter, siding, and exterior protection work completed across Sacramento.
          </p>

          {/* Masonry grid using CSS columns */}
          <div
            className="[column-count:2] md:[column-count:3] lg:[column-count:4]"
            style={{ columnGap: '10px' }}
          >
            {[
              {
                src: ASSETS.guttersSiding('ee8a6aa8-96e4-4a0c-aea7-353daf796d0b.webp'),
                label: 'Gutter Replacement',
                tall: true,
              },
              {
                src: ASSETS.guttersSiding('1e8ea3b0-e1a4-4e74-97d2-2209fbeeeb89.webp'),
                label: 'Siding Installation',
              },
              {
                src: ASSETS.gallery('6998f81b9df4c166b8ac8255-1.jpg'),
                label: 'Exterior Roofline Work',
                tall: true,
              },
              {
                src: ASSETS.gallery('Screenshot_2026-05-20_at_08.52.43.png'),
                label: 'Fascia Replacement',
              },
              {
                src: ASSETS.gallery('6998f81ba2a2c02b517b9648.jpg'),
                label: 'Exterior Protection Upgrade',
              },
              {
                src: ASSETS.gallery('Screenshot_2026-05-20_at_08.51.08.png'),
                label: 'Roofline & Gutter System',
                tall: true,
              },
              {
                src: ASSETS.gallery('Screenshot_2026-05-20_at_08.53.18.png'),
                label: 'Siding Repair',
              },
              {
                src: ASSETS.gallery('Screenshot_2026-05-20_at_08.49.50.png'),
                label: 'Exterior Upgrade',
              },
            ].map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid mb-[10px] group relative overflow-hidden bg-gray-200 transition-shadow duration-300 hover:shadow-lg"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  loading="lazy"
                  className={`w-full object-cover block transition-transform duration-500 group-hover:scale-[1.02] ${
                    img.tall ? 'h-64 md:h-72' : 'h-44 md:h-52'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-7">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">5.0 Google Rating · 81 Reviews</p>
          <h2 className="section-heading mb-8">What Sacramento Homeowners Say</h2>
          <ReviewStrip count={3} variant="light" indices={[0, 3, 5]} />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#F3F1EE] py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-7">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Common Questions</p>
          <h2 className="section-heading mb-10">Gutters &amp; Siding FAQs</h2>
          <FaqAccordion items={exteriorFaqs} variant="light" />
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section id="exterior-quote" className="bg-charcoal-dark py-12 md:py-16 mobile-section-bottom md:pb-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-7">
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Left */}
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Free Inspection</p>
              <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                Get Your Free<br />Exterior Inspection
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We'll inspect your gutters, siding, and exterior problem areas and provide honest recommendations with no pressure.
              </p>
              <ul className="space-y-2.5 mb-7">
                {[
                  'Free assessment, no obligation',
                  'Seamless gutter installation available',
                  'Fiber cement and vinyl siding options',
                  'Fascia and soffit repair available',
                  'Financing available on qualifying projects',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-gray-300 text-sm">
                    <CheckCircle size={14} className="text-gold flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a
                href="tel:9167613866"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors"
              >
                <Phone size={15} /> Or call directly: 916-761-3866
              </a>
            </div>

            {/* Right form */}
            <LeadForm sourcePage="gutters-siding" variant="full" hideEmail hideReason compactSpacing />
          </div>
        </div>
      </section>
    </>
  );
}