import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import TelLink from '../TelLink';
import { PRIMARY_CTA } from '../../data/cta';
import { PHONE_DISPLAY } from '../../data/site';

const benefits = [
  {
    title: 'Heat & weather',
    body:
      'A properly specified metal roof assembly can make sense for Sacramento heat and seasonal weather when underlayment, flashing, and ventilation are part of the system.',
  },
  {
    title: 'Fire performance',
    body:
      'Many metal systems can be specified as Class A assemblies. That is an assembly rating, not a guarantee about insurance or wildfire outcomes.',
  },
  {
    title: 'Longevity',
    body:
      'Owners choose metal for a longer covering interval than many conventional materials when it is properly designed and installed — not a guaranteed year count or zero maintenance. PRC 13 does not offer metal cleaning.',
  },
  {
    title: 'Cleaner system design',
    body: 'Standing seam conceals fasteners for a clean architectural finish.',
  },
] as const;

export default function HomeWhyMetal() {
  return (
    <section className="bg-[#0b1016] text-[#f6f1e8] py-10 md:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-[36rem] mb-6">
          <p className="home-kicker home-kicker-light">Why metal</p>
          <h2 className="home-display home-display-on-dark mb-4">
            Why metal roofing makes sense in Sacramento.
          </h2>
          <Link to="/blog/metal-roofing-sacramento-climate" className="home-cta home-cta-on-dark min-h-11">
            See whether metal makes sense for your roof{' '}
            <span className="home-cta-arrow" aria-hidden>
              →
            </span>
          </Link>
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-4 mb-7">
          {benefits.map((benefit, index) => (
            <li
              key={benefit.title}
              className={`min-w-0 py-4 md:py-5 lg:py-0 md:px-6 lg:px-7 first:md:pl-0 last:lg:pr-0 border-white/15 ${
                index < benefits.length - 1 ? 'border-b lg:border-b-0 lg:border-r' : ''
              } ${index % 2 === 0 ? 'md:border-r' : ''} ${
                index < 2 ? 'md:border-b lg:border-b-0' : 'md:border-b-0'
              }`}
            >
              <span className="block w-6 h-px bg-gold mb-3" aria-hidden />
              <h3 className="text-[1.05rem] md:text-[1.15rem] font-bold tracking-[0.14em] uppercase text-[#f6f1e8] mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-[#e8e4db] leading-relaxed">{benefit.body}</p>
            </li>
          ))}
        </ul>

        <div className="border-t border-white/15 pt-6 md:grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-10 lg:gap-16 md:items-end">
          <div className="min-w-0 mb-6 md:mb-0">
            <p className="home-kicker home-kicker-light">Find the right system</p>
            <h3 className="text-[1.35rem] md:text-[1.5rem] font-bold tracking-tight text-[#f6f1e8] leading-tight mb-2">
              Not sure which metal roof is right for your property?
            </h3>
            <p className="text-sm text-[#e8e4db] leading-relaxed max-w-[34rem]">
              Standing seam, exposed fastener, residential or commercial — we&apos;ll help determine
              what makes sense for the property.
            </p>
          </div>
          <div className="min-w-0">
            <Link to="/metal-roofing" className="home-cta home-cta-on-dark min-h-11 mb-4">
              Compare Metal Roofing Systems <span className="home-cta-arrow" aria-hidden>→</span>
            </Link>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center btn-gold px-7 py-3.5 text-base font-semibold min-h-12"
              >
                {PRIMARY_CTA}
              </Link>
              <TelLink
                location="home-why-metal"
                className="inline-flex items-center justify-center gap-2 border border-[#f6f1e8] text-[#f6f1e8] font-semibold px-7 py-3.5 text-base min-h-12 hover:bg-white/10"
              >
                <Phone size={18} aria-hidden /> Call {PHONE_DISPLAY}
              </TelLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
