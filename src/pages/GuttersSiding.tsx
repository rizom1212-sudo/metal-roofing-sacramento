import { Phone, CheckCircle, ArrowRight, Shield, Award, Droplets, Home, Wind, Layers, Hammer, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { handleSamePageAnchorClick } from '../lib/scroll';
import LeadForm from '../components/LeadForm';
import HeroLeadFormPanel from '../components/HeroLeadFormPanel';
import TelLink from '../components/TelLink';
import { CTA_GUTTER_EVALUATION } from '../data/cta';
import { LICENSE_SHORT, PHONE_DISPLAY } from '../data/site';
import ReviewStrip from '../components/ReviewStrip';
import HeroBackground from '../components/HeroBackground';
import FaqAccordion, { type FaqItem } from '../components/FaqAccordion';
import JsonLd from '../components/JsonLd';
import AnswerSummary from '../components/AnswerSummary';
import LocalSeoLinks from '../components/LocalSeoLinks';
import SacramentoGuideCallout from '../components/SacramentoGuideCallout';
import { ASSETS } from '../data/assets';
import { blogPosts } from '../data/blog';
import { GUTTERS_FASCIA_CLUSTER_CATEGORY } from '../data/blogGuttersFasciaCluster';
import { SERVICE_HUB_RESOURCE_LIMIT } from '../data/internalLinking';

// ─── FAQ data split by group ────────────────────────────────────────────────

const exteriorFaqs: FaqItem[] = [
  {
    question: 'How much do new gutters or siding cost in Sacramento?',
    answer:
      'Cost depends on the home size, material, and access. PRC 13 inspects the exterior first and provides a clear written estimate before work starts.',
  },
  {
    question: 'How long does gutter or siding work usually take?',
    answer:
      'Many gutter installations are completed in about one day. Siding timelines vary by home size, material, and prep work. PRC 13 confirms schedule expectations before installation begins.',
  },
  {
    question: 'What warning signs mean gutters need attention?',
    answer:
      'Overflow during rain, sagging runs, pulling away from the roofline, rust-through, seams leaking, or water staining at fascia and foundation edges all suggest gutters should be inspected. Fixing drainage early helps protect the roof edge.',
  },
  {
    question: 'Do you offer fascia or soffit repair?',
    answer:
      'No. PRC 13 focuses on gutter services and siding on this page. We do not offer fascia or soffit repair. If roofline boards are damaged, we can still evaluate gutter and roof-edge drainage needs and point you toward the right next step.',
  },
  {
    question: 'What siding materials does PRC 13 install?',
    answer:
      'We install vinyl siding and fiber cement siding, including Hardie Board panels. Fiber cement handles Sacramento heat well and holds paint; vinyl is lower cost and low maintenance.',
  },
  {
    question: 'Do you repair siding or only install new siding?',
    answer:
      'Both. We offer siding repair, siding replacement, wood siding, moisture barrier upgrades, and exterior trim work, not just full installations.',
  },
  {
    question: 'How do I know if my gutters need to be replaced vs. repaired?',
    answer:
      'Small leaks may be repairable, but gutters pulling from fascia, sagging, rusting through, or overflowing during rain often need replacement. We tell you which option makes sense after inspection.',
  },
  {
    question: 'What siding materials work best in Sacramento heat?',
    answer:
      'Fiber cement and quality vinyl are both practical Sacramento options. Fiber cement handles heat well, resists moisture, and holds paint; vinyl is lower cost and low maintenance.',
  },
  {
    question: 'Can siding or gutter problems affect my roof?',
    answer:
      'Yes. Failed gutters, rotted fascia, and poor drainage can push water into the roof edge and lead to leaks. Gaps at siding-to-roof transitions can also let moisture in. Fixing exterior protection helps prevent future roofline damage.',
  },
  {
    question: 'Should I schedule a roof inspection with exterior work?',
    answer:
      'Often yes. A roof inspection helps catch roof edge, flashing, and drainage issues before you invest in siding or gutters. PRC 13 can review the full exterior during a free assessment.',
  },
];

const gutterFasciaResources = blogPosts
  .filter(post => post.category === GUTTERS_FASCIA_CLUSTER_CATEGORY)
  .slice(0, SERVICE_HUB_RESOURCE_LIMIT);

// ─── Page ────────────────────────────────────────────────────────────────────

export default function GuttersSiding() {
  return (
    <>
      <JsonLd
        faqs={exteriorFaqs}
        pageName="Gutters and Siding Sacramento"
        schemaType="Service"
        serviceName="Gutters and Siding"
        primaryImage={ASSETS.guttersSiding('1e8ea3b0-e1a4-4e74-97d2-2209fbeeeb89.webp')}
      />
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-charcoal-dark text-white overflow-hidden">
        <HeroBackground
          image={ASSETS.guttersSiding('1e8ea3b0-e1a4-4e74-97d2-2209fbeeeb89.webp')}
          alt="Gutter and exterior work on a Sacramento area home"
        />
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
          <div className="flex flex-col lg:block">
<div className="max-w-2xl">
            <span className="inline-block text-xs bg-gold text-white px-3 py-1 font-semibold uppercase tracking-wider mb-5">
              Gutters &bull; Siding &bull; Exterior Protection
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-5">
              Gutters & Siding<br />
              <span className="text-gold">for Sacramento Homes</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Protect your Sacramento home with professional gutter and siding services built to keep water away from your roofline, walls, and foundation. PRC 13 does not offer fascia or soffit repair.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <a
                href="#gutters-section"
                onClick={e => handleSamePageAnchorClick(e, 'gutters-section')}
                className="text-xs font-semibold text-gray-300 hover:text-gold border border-white/20 px-3 py-1.5 transition-colors"
              >
                Gutters
              </a>
              <a
                href="#siding-section"
                onClick={e => handleSamePageAnchorClick(e, 'siding-section')}
                className="text-xs font-semibold text-gray-300 hover:text-gold border border-white/20 px-3 py-1.5 transition-colors"
              >
                Siding
              </a>
              <Link
                to="/roof-inspection"
                className="text-xs font-semibold text-gray-300 hover:text-gold border border-white/20 px-3 py-1.5 transition-colors"
              >
                Roof inspection
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <TelLink location="hero-gutters" className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold">
                <Phone size={17} /> Call {PHONE_DISPLAY}
              </TelLink>
              <a
                href="#exterior-quote"
                onClick={e => handleSamePageAnchorClick(e, 'exterior-quote')}
                className="inline-flex items-center justify-center gap-2 btn-outline py-4 px-8 text-base font-semibold"
              >
                {CTA_GUTTER_EVALUATION} <ArrowRight size={17} />
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-300">
              <span className="flex items-center gap-1.5"><Shield size={13} className="text-gold" /> {LICENSE_SHORT}</span>
              <span className="flex items-center gap-1.5"><Award size={13} className="text-gold" /> Financing on Qualifying Projects</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={13} className="text-gold" /> Sacramento Area</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={13} className="text-gold" /> Free Estimates</span>
            </div>
          </div>
            <HeroLeadFormPanel
              sourcePage="gutters-siding-hero"
              title="Request a Free Gutter Evaluation"
              subtitle="Tell us what you need: gutters, guards, or a roof drainage check."
              submitLabel={CTA_GUTTER_EVALUATION}
              className="lg:right-4"
            />
          </div>
        </div>
      </section>

      {/* ── WHY EXTERIOR PROTECTION MATTERS ─────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-7">
          <AnswerSummary
            title="Gutters and siding in Sacramento: quick answer"
            points={[
              'Seamless gutter installation, repair, and replacement',
              'Siding helps prevent exterior moisture damage',
              'Gutter drainage protects roof edges and foundations',
              'Exterior issues can contribute to roof leaks',
            ]}
          >
            Gutters and siding protect the parts of your Sacramento home that keep water away from the roofline and structure. PRC 13 does not offer fascia or soffit repair. Fixing exterior failures early can prevent larger{' '}
            <Link to="/roof-repair" className="text-gold font-semibold hover:text-gold-dark transition-colors">roof repair</Link>{' '}
            and interior damage. Start with a{' '}
            <Link to="/roof-inspection" className="text-gold font-semibold hover:text-gold-dark transition-colors">free roof inspection</Link>{' '}
            when you are unsure where water is entering.
          </AnswerSummary>
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
                Gutters are the first line of defense for your foundation, fascia, and landscaping. Failing gutters can cause damage that costs far more than replacement. We install seamless systems built to last. Read our{' '}
                <Link to="/blog/gutter-installation-sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">Sacramento gutter installation guide</Link>{' '}
                and{' '}
                <Link to="/blog/gutters-and-roof-leaks-sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">how gutters prevent roof leaks</Link>.
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
                  <a
                    href="#exterior-quote"
                    onClick={e => handleSamePageAnchorClick(e, 'exterior-quote')}
                    className="inline-flex items-center gap-1 text-gold text-xs font-semibold hover:underline"
                  >
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
                  <a
                    href="#exterior-quote"
                    onClick={e => handleSamePageAnchorClick(e, 'exterior-quote')}
                    className="inline-flex items-center gap-1 text-gold text-xs font-semibold hover:underline"
                  >
                    Get estimate <ArrowRight size={12} />
                  </a>
                </div>
              </div>

              <p className="text-body text-xs leading-relaxed mb-6 border-l-2 border-gold/40 pl-3 max-w-lg">
                Also offering gutter repair, gutter replacement, and drainage solutions. PRC 13 does not offer fascia or soffit repair. See our{' '}
                <Link to="/blog/fascia-repair-sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">fascia repair guide</Link>{' '}
                for educational context, plus our{' '}
                <Link to="/blog/gutter-guards-sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">gutter guards overview</Link>.
              </p>

              {/* Signs list */}
              <div className="mb-6">
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

              <p className="text-body text-xs leading-relaxed max-w-lg">
                Overflowing gutters often damage fascia first, then water can reach the{' '}
                <Link to="/roof-repair" className="text-gold font-semibold hover:text-gold-dark transition-colors">roof edge</Link>.
                {' '}
                <a
                  href="#siding-section"
                  onClick={e => handleSamePageAnchorClick(e, 'siding-section')}
                  className="text-gold font-semibold hover:text-gold-dark transition-colors"
                >
                  Jump to siding services ↓
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROOFLINE TRANSITION ──────────────────────────────────────────── */}
      <section className="bg-charcoal-dark py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-7">
          <div className="grid md:grid-cols-4 gap-6 text-center md:text-left">
            {[
              {
                step: 'Roof edge',
                desc: 'Shingles, flashing, and fascia where rain first hits',
                href: '/roof-inspection',
                label: 'Roof inspection',
              },
              {
                step: 'Gutters & drainage',
                desc: 'Gutters and downspouts that carry water away from walls',
                href: '#gutters-section',
                label: 'Gutter services',
                anchor: true,
              },
              {
                step: 'Siding & trim',
                desc: 'Exterior walls and transitions that block moisture',
                href: '#siding-section',
                label: 'Siding services',
                anchor: true,
              },
              {
                step: 'Foundation',
                desc: 'Where poor drainage causes long-term structural issues',
                href: '/blog/gutters-and-roof-leaks-sacramento',
                label: 'Gutters and roof leaks',
              },
            ].map(item => (
              <div key={item.step} className="border border-white/10 bg-white/[0.04] p-5 rounded-brand">
                <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">{item.step}</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">{item.desc}</p>
                {item.anchor ? (
                  <a
                    href={item.href}
                    onClick={e => handleSamePageAnchorClick(e, item.href.replace('#', ''))}
                    className="text-gold text-xs font-semibold hover:underline"
                  >
                    {item.label} <ArrowRight size={11} className="inline" />
                  </a>
                ) : item.href.startsWith('/blog') ? (
                  <Link to={item.href} className="text-gold text-xs font-semibold hover:underline">
                    {item.label} <ArrowRight size={11} className="inline" />
                  </Link>
                ) : (
                  <Link to={item.href} className="text-gold text-xs font-semibold hover:underline">
                    {item.label} <ArrowRight size={11} className="inline" />
                  </Link>
                )}
              </div>
            ))}
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
              <p className="text-body text-base leading-relaxed mb-4 max-w-lg">
                New siding transforms your home&apos;s curb appeal while providing a critical moisture barrier. Sacramento homes need materials that handle heat, resist moisture, and hold up year after year.
              </p>
              <p className="text-body text-sm leading-relaxed mb-8 max-w-lg">
                Siding meets your roof at the fascia and soffit. When those transitions fail, water can show up as exterior rot or{' '}
                <Link to="/roof-repair" className="text-gold font-semibold hover:text-gold-dark transition-colors">roof leaks</Link>{' '}
                indoors. PRC 13 reviews the full exterior, not just the visible wall panels. See our{' '}
                <Link to="/gallery" className="text-gold font-semibold hover:text-gold-dark transition-colors">project gallery</Link>{' '}
                for James Hardie siding paired with metal roofing on Sacramento-area homes.
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
                  <a
                    href="#exterior-quote"
                    onClick={e => handleSamePageAnchorClick(e, 'exterior-quote')}
                    className="inline-flex items-center gap-1 text-gold text-xs font-semibold hover:underline"
                  >
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
                  <a
                    href="#exterior-quote"
                    onClick={e => handleSamePageAnchorClick(e, 'exterior-quote')}
                    className="inline-flex items-center gap-1 text-gold text-xs font-semibold hover:underline"
                  >
                    Get estimate <ArrowRight size={12} />
                  </a>
                </div>
              </div>

              <p className="text-body text-xs leading-relaxed mb-6 border-l-2 border-gold/40 pl-3 max-w-lg">
                Also offering siding repair, siding replacement, wood siding, moisture barrier upgrades, and exterior trim work. Planning a full exterior update? Pair siding with{' '}
                <Link to="/roof-replacement" className="text-gold font-semibold hover:text-gold-dark transition-colors">roof replacement</Link>{' '}
                or{' '}
                <Link to="/metal-roofing" className="text-gold font-semibold hover:text-gold-dark transition-colors">metal roofing</Link>{' '}
                when both are due.
              </p>

              {/* Signs list */}
              <div className="mb-8">
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

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#exterior-quote"
                  onClick={e => handleSamePageAnchorClick(e, 'exterior-quote')}
                  className="inline-flex items-center justify-center gap-2 btn-gold px-6 py-3 text-sm font-semibold"
                >
                  Request Siding Estimate <ArrowRight size={15} />
                </a>
                <Link
                  to="/roof-inspection"
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 text-headline font-semibold px-6 py-3 text-sm hover:border-gold hover:text-gold transition-colors rounded-brand"
                >
                  Free roof inspection
                </Link>
              </div>

              <p className="text-body text-xs leading-relaxed mt-6 max-w-lg">
                Worried about water at the roofline? Read{' '}
                <Link to="/blog/fascia-repair-sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">fascia repair in Sacramento</Link>{' '}
                and{' '}
                <Link to="/blog/gutters-and-roof-leaks-sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">how gutters prevent roof leaks</Link>.
                {' '}
                <a
                  href="#gutters-section"
                  onClick={e => handleSamePageAnchorClick(e, 'gutters-section')}
                  className="text-gold font-semibold hover:text-gold-dark transition-colors"
                >
                  Back to gutter services ↑
                </a>
              </p>
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
          <h2 className="section-heading mb-2">Project Gallery</h2>
          <p className="section-subheading max-w-2xl mb-6">
            Gutter, siding, and exterior protection work completed across Sacramento, including James Hardie siding and roofline projects.
          </p>
          <p className="text-body text-sm mb-10">
            <Link to="/gallery" className="text-gold font-semibold hover:text-gold-dark transition-colors">
              View the full project gallery <ArrowRight size={13} className="inline" />
            </Link>
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
                label: 'Historic Roofline Detail',
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

      {/* ── GUTTERS & FASCIA RESOURCES ───────────────────────────────────── */}
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-7">
          <div className="flex items-start gap-3 mb-6">
            <BookOpen size={22} className="text-gold flex-shrink-0 mt-1" aria-hidden />
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Gutters, Siding &amp; Exterior Resources</p>
              <h2 className="section-heading mb-3">Protect Your Sacramento Roofline &amp; Walls</h2>
              <p className="text-body text-sm leading-relaxed max-w-3xl">
                Homeowners across{' '}
                <Link to="/service-areas/sacramento" className="text-gold font-semibold hover:text-gold-dark transition-colors">Sacramento</Link>,{' '}
                <Link to="/service-areas/folsom" className="text-gold font-semibold hover:text-gold-dark transition-colors">Folsom</Link>, and{' '}
                <Link to="/service-areas/el-dorado-hills" className="text-gold font-semibold hover:text-gold-dark transition-colors">El Dorado Hills</Link>{' '}
                use these guides for gutter installation, replacement cost, guards, fascia damage education, and leak prevention. Pair exterior work with a{' '}
                <Link to="/roof-inspection" className="text-gold font-semibold hover:text-gold-dark transition-colors">free roof inspection</Link>{' '}
                or{' '}
                <Link to="/contact" className="text-gold font-semibold hover:text-gold-dark transition-colors">request a gutter or siding estimate</Link>.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gutterFasciaResources.map(resource => (
              <Link
                key={resource.slug}
                to={`/blog/${resource.slug}`}
                className="card-brand bg-[#F3F1EE] border border-gray-100 p-5 hover:border-gold/30 hover:shadow-sm transition-all duration-200 group"
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

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#F3F1EE] py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-7">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Common Questions</p>
          <h2 className="section-heading mb-10">Gutters &amp; Siding FAQs</h2>
          <FaqAccordion items={exteriorFaqs} variant="light" />
        </div>
      </section>

      <SacramentoGuideCallout
        href="/service-areas/sacramento"
        label="View Sacramento roofing services"
      />
      <LocalSeoLinks />

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section id="exterior-quote" data-final-cta className="bg-charcoal-dark py-12 md:py-16 mobile-section-bottom md:pb-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-7">
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Left */}
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Free Inspection</p>
              <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                Get Your Free<br />Exterior Inspection
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We&apos;ll inspect your gutters, siding, and roof edge transitions, then provide honest recommendations with no pressure. Exterior problems and roof leaks often share the same source. PRC 13 does not offer fascia or soffit repair.
              </p>
              <ul className="space-y-2.5 mb-7">
                {[
                  'Free assessment, no obligation',
                  'Seamless gutter installation available',
                  'Fiber cement and vinyl siding options',
                  'Honest scope: no fascia/soffit upsells',
                  'Financing may be available on qualifying projects',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-gray-300 text-sm">
                    <CheckCircle size={14} className="text-gold flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 mb-6">
                <Link
                  to="/roof-inspection"
                  className="inline-flex items-center gap-1.5 text-gold hover:text-gold-light font-semibold text-sm transition-colors"
                >
                  Schedule roof inspection <ArrowRight size={14} />
                </Link>
                <Link
                  to="/roof-repair"
                  className="inline-flex items-center gap-1.5 text-gold hover:text-gold-light font-semibold text-sm transition-colors"
                >
                  Roof repair services <ArrowRight size={14} />
                </Link>
              </div>
              <TelLink location="gutters-final" className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors">
                <Phone size={15} /> Or call directly: {PHONE_DISPLAY}
              </TelLink>
            </div>

            {/* Right form */}
            <LeadForm sourcePage="gutters-siding" variant="full" hideEmail hideReason compactSpacing />
          </div>
        </div>
      </section>
    </>
  );
}