import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { handleSamePageAnchorClick } from '../lib/scroll';
import {
  COLFAX_CALFIRE_HARDENING_URL,
  COLFAX_CITY_PROGRAM_URL,
  COLFAX_FIVE_PERCENT_OFFER,
  COLFAX_FIVE_PERCENT_SEPARATION,
  COLFAX_INSPECTION_FORM_ID,
  COLFAX_NINETY_PERCENT_HERO,
} from '../data/blogColfaxHomeHardening';
import { serviceAreaFeaturedPrograms } from '../data/serviceAreaFeaturedPrograms';
import {
  GOOGLE_RATING_VALUE,
  GOOGLE_REVIEW_COUNT,
  LICENSE_INSURED_LINE,
  PHONE_DISPLAY,
} from '../data/site';
import LeadForm from './LeadForm';
import TelLink from './TelLink';
import TrustResponseLine from './TrustResponseLine';

const program = serviceAreaFeaturedPrograms.colfax;

export function ColfaxTrustRow({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-x-5 gap-y-2 text-sm text-body ${className}`}>
      <span className="inline-flex items-center gap-1.5">
        <CheckCircle size={13} className="text-gold flex-shrink-0" /> {LICENSE_INSURED_LINE}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <CheckCircle size={13} className="text-gold flex-shrink-0" /> {GOOGLE_RATING_VALUE.toFixed(1)} Google Rating · {GOOGLE_REVIEW_COUNT} Reviews
      </span>
      <span className="inline-flex items-center gap-1.5">
        <CheckCircle size={13} className="text-gold flex-shrink-0" /> Serves Colfax, CA
      </span>
    </div>
  );
}

export function ColfaxOpportunityIntro() {
  return (
    <div className="mb-10">
      <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">City of Colfax Program · 2026</p>
      <p className="text-headline text-lg md:text-xl font-semibold leading-snug mb-4">
        {COLFAX_NINETY_PERCENT_HERO}
      </p>
      <p className="text-body text-base leading-[1.7] mb-3">
        That does <span className="font-semibold text-headline">not</span> mean every roof automatically receives 90% funding.
        Roof condition still matters for wildfire readiness, and PRC 13 Roofing serves Colfax with inspections, repair, and replacement.
      </p>
      <p className="text-body text-base leading-[1.7] mb-6">
        PRC 13 independently offers Colfax homeowners an additional 5% off qualifying roofing work. The 5% offer is separate from the City program.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <a
          href={`#${COLFAX_INSPECTION_FORM_ID}`}
          onClick={e => handleSamePageAnchorClick(e, COLFAX_INSPECTION_FORM_ID)}
          className="inline-flex items-center justify-center gap-2 btn-gold py-3.5 px-6 text-sm font-semibold"
        >
          Request a Free Colfax Roof Inspection <ArrowRight size={16} />
        </a>
        <Link
          to="/service-areas/colfax"
          className="inline-flex items-center justify-center gap-2 border-2 border-charcoal text-charcoal font-semibold px-6 py-3.5 text-sm hover:bg-charcoal hover:text-white transition-colors rounded-brand"
        >
          Check Your Roofing Options
        </Link>
      </div>
      <ColfaxTrustRow className="text-body" />
    </div>
  );
}

export function ColfaxFactCards() {
  const facts = [
    {
      kicker: 'Up to 90%',
      body: 'City assistance may cover up to 90% of eligible home-hardening and defensible-space costs.',
    },
    {
      kicker: 'No Income Limit',
      body: 'The City currently states that the program is available to Colfax homeowners without an income limit.',
    },
    {
      kicker: 'Additional 5%',
      body: 'PRC 13 Roofing independently offers Colfax homeowners an additional 5% off qualifying roofing work.',
    },
  ];

  return (
    <div className="mb-10">
      <div className="grid sm:grid-cols-3 gap-3">
        {facts.map(fact => (
          <div key={fact.kicker} className="bg-white border border-gray-100 p-5">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">{fact.kicker}</p>
            <p className="text-headline text-base leading-[1.7]">{fact.body}</p>
          </div>
        ))}
      </div>
      <p className="text-body text-sm leading-[1.7] mt-4">
        Program eligibility and covered improvements are determined through the official program. PRC 13 Roofing&apos;s 5% offer is separate from the City program.
      </p>
    </div>
  );
}

export function ColfaxOfferCard() {
  return (
    <div className="mb-10 border border-gold/35 bg-white p-6 md:p-7">
      <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">{program.offerEyebrow}</p>
      <h2 className="blog-article-h2 mt-0">Colfax Roofing Offer</h2>
      <p className="text-headline text-lg md:text-xl font-semibold leading-snug mb-4">
        Additional 5% Off Qualifying Roofing Work
      </p>
      <p className="text-body text-base leading-[1.7] mb-3">{COLFAX_FIVE_PERCENT_OFFER}</p>
      <p className="text-body text-base leading-[1.7] mb-6">
        {COLFAX_FIVE_PERCENT_SEPARATION} Do not combine this 5% with the City&apos;s &quot;up to 90%&quot; figure.
      </p>
      <a
        href={`#${COLFAX_INSPECTION_FORM_ID}`}
        onClick={e => handleSamePageAnchorClick(e, COLFAX_INSPECTION_FORM_ID)}
        className="inline-flex items-center justify-center gap-2 btn-gold py-3.5 px-6 text-sm font-semibold"
      >
        Request a Colfax Roof Inspection <ArrowRight size={15} />
      </a>
    </div>
  );
}

const HOW_IT_WORKS: { title: string; body: string; href?: string; linkLabel?: string }[] = [
  {
    title: 'Learn About the City Program',
    body: 'Review the official City of Colfax Home Hardening information.',
    href: COLFAX_CITY_PROGRAM_URL,
    linkLabel: 'Open the City program page',
  },
  {
    title: 'Understand Your Roof',
    body: 'Have PRC 13 inspect the existing roof and identify repair, replacement, or wildfire-resistance considerations.',
  },
  {
    title: 'Confirm Program Eligibility',
    body: 'The applicable program administrators determine property eligibility and qualifying improvements.',
  },
  {
    title: 'Review Your Roofing Options',
    body: 'PRC 13 can explain appropriate roofing options and provide an estimate when applicable.',
  },
  {
    title: 'Use the PRC 13 Colfax Offer',
    body: 'Qualifying PRC 13 roofing work can receive PRC 13\'s independent 5% Colfax promotion.',
  },
];

export function ColfaxHowItWorks() {
  return (
    <div className="mb-10">
      <h2 className="blog-article-h2 mt-0">How to Approach Home Hardening and Your Roof</h2>
      <p className="text-body text-base leading-[1.7] mb-5">
        These steps keep City program questions and roofing decisions in a practical order.
      </p>
      <ol className="space-y-4">
        {HOW_IT_WORKS.map((step, index) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-charcoal-dark text-gold text-sm font-bold flex items-center justify-center">
              {index + 1}
            </span>
            <div>
              <h3 className="font-bold text-headline text-base mb-1">{step.title}</h3>
              <p className="text-body text-base leading-[1.7]">
                {step.body}
                {step.href && step.linkLabel ? (
                  <>
                    {' '}
                    <a
                      href={step.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold font-semibold hover:text-gold-dark transition-colors"
                    >
                      {step.linkLabel}
                    </a>
                    .
                  </>
                ) : null}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ColfaxArticleCta({
  heading,
  statement,
  ctaLabel,
  ctaHref,
}: {
  heading: string;
  statement: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  const isHash = ctaHref.startsWith('#');
  const id = isHash ? ctaHref.slice(1) : '';

  return (
    <div className="my-10 bg-white border-l-4 border-gold p-5 md:p-6">
      <h2 className="blog-article-h2 mt-0 mb-3">{heading}</h2>
      <p className="text-body text-base leading-[1.7] mb-5">{statement}</p>
      {isHash ? (
        <a
          href={ctaHref}
          onClick={e => handleSamePageAnchorClick(e, id)}
          className="inline-flex items-center justify-center gap-2 btn-gold py-3 px-5 text-sm font-semibold"
        >
          {ctaLabel} <ArrowRight size={15} />
        </a>
      ) : (
        <Link to={ctaHref} className="inline-flex items-center justify-center gap-2 btn-gold py-3 px-5 text-sm font-semibold">
          {ctaLabel} <ArrowRight size={15} />
        </Link>
      )}
    </div>
  );
}

export function ColfaxInspectionForm() {
  return (
    <div
      id={COLFAX_INSPECTION_FORM_ID}
      className="mt-12 scroll-mt-28 card-brand bg-white border border-gray-100 p-6 md:p-8"
    >
      <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Colfax Roof Inspection</p>
      <h2 className="blog-article-h2 mt-0 mb-3">Request Your Free Colfax Roof Inspection</h2>
      <p className="text-body text-base leading-[1.7] mb-6">
        Tell us how to reach you. A PRC 13 team member will contact you to schedule a Colfax roof inspection during normal business hours. The inspection evaluates roof condition and roofing options. Submitting this form does not determine or apply for City program eligibility.
      </p>
      <LeadForm
        sourcePage="blog-colfax-home-hardening"
        variant="full"
        hideEmail
        hideReason
        compactSpacing
        defaultCity="Colfax"
        defaultReason="inspection"
        submitLabel="Request My Roof Inspection"
      />
    </div>
  );
}

export function ColfaxFinalCta() {
  return (
    <div className="mt-12 card-brand bg-charcoal-dark border border-gold/20 p-6 md:p-8">
      <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Next Step</p>
      <h2 className="text-2xl font-bold text-white mb-3 leading-snug">Understand Your Roof Before Making a Decision</h2>
      <p className="text-gray-300 text-base leading-[1.7] mb-5">
        Get a professional roof inspection and understand the repair, replacement, and wildfire-resistant roofing options relevant to your property.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={`#${COLFAX_INSPECTION_FORM_ID}`}
          onClick={e => handleSamePageAnchorClick(e, COLFAX_INSPECTION_FORM_ID)}
          className="inline-flex items-center justify-center gap-2 btn-gold px-6 py-3 text-sm font-semibold"
        >
          Request a Free Colfax Roof Inspection <ArrowRight size={15} />
        </a>
        <TelLink
          location="blog-colfax-final"
          className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 text-sm hover:border-gold hover:text-gold transition-colors rounded-brand"
        >
          <Phone size={16} /> Call PRC 13 Roofing {PHONE_DISPLAY}
        </TelLink>
      </div>
    </div>
  );
}

export function ColfaxSidebarForm() {
  return (
    <div className="p-6" style={{ background: '#111827', border: '1px solid rgba(201,151,0,0.2)' }}>
      <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Colfax Inspection</p>
      <p className="text-white font-bold text-base leading-snug mb-3">Request Your Free Colfax Roof Inspection</p>
      <p className="text-gray-400 text-sm leading-[1.7] mb-5">
        We will follow up to schedule. This request is for a roof inspection, not a City program application.
      </p>
      <LeadForm
        sourcePage="blog-colfax-home-hardening-sidebar"
        variant="hero"
        hideReason
        defaultCity="Colfax"
        defaultReason="inspection"
        submitLabel="Request My Roof Inspection"
      />
      <TrustResponseLine className="mt-3 text-gray-500" />
      <TelLink
        location="blog-colfax-sidebar"
        className="flex items-center justify-center gap-2 text-gold text-sm font-semibold hover:text-gold-light transition-colors mt-4"
      >
        <Phone size={15} /> Call {PHONE_DISPLAY}
      </TelLink>
    </div>
  );
}

export function ColfaxOfficialSourceNote() {
  return (
    <p className="text-body text-sm leading-[1.7] mb-8">
      Official program source:{' '}
      <a
        href={COLFAX_CITY_PROGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold font-semibold hover:text-gold-dark transition-colors"
      >
        City of Colfax Home Hardening
      </a>
      . Statewide home-hardening context:{' '}
      <a
        href={COLFAX_CALFIRE_HARDENING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold font-semibold hover:text-gold-dark transition-colors"
      >
        CAL FIRE Ready for Wildfire
      </a>
      .
    </p>
  );
}
