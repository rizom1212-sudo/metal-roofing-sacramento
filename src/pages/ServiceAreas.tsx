import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import JsonLd from '../components/JsonLd';
import { serviceAreas } from '../data/serviceAreas';
import { PRIMARY_CTA } from '../data/cta';
import { PHONE_DISPLAY, PHONE_SMS, PHONE_TEL } from '../data/site';

export default function ServiceAreas() {
  const location = useLocation();
  const [activeSlug, setActiveSlug] = useState('');
  const [highlightSlug, setHighlightSlug] = useState('');

  useEffect(() => {
    const slug = decodeURIComponent(location.hash.replace('#', ''));
    if (!slug) return;

    setActiveSlug(slug);
    setHighlightSlug(slug);
    window.setTimeout(() => {
      document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);

    const timer = window.setTimeout(() => setHighlightSlug(''), 2800);
    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <>
      <JsonLd pageName="Areas We Serve" schemaType="WebPage" />
      <section className="bg-charcoal-dark text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> Service Areas</span>
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Areas We Serve
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            PRC 13 Roofing is based in Sacramento and serves homeowners across the greater Sacramento region with honest inspections, repairs, and replacements.
          </p>
        </div>
      </section>

      <section id="service-area-list" className="bg-cream py-10 md:py-14 scroll-mt-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-5">
            {serviceAreas.map(area => (
              <article
                key={area.slug}
                id={area.slug}
                className={`card-brand bg-white border p-6 scroll-mt-32 md:scroll-mt-36 transition-all duration-300 ${
                  activeSlug === area.slug
                    ? 'border-gold/80 shadow-[0_12px_34px_rgba(201,151,0,0.22)] scale-[1.015] -translate-y-1'
                    : 'border-gray-100'
                } ${highlightSlug === area.slug ? 'animate-[service-area-pulse_1.4s_ease-out_2]' : ''}`}
              >
                <h2 className="text-xl font-bold text-headline mb-2">{area.name}</h2>
                <p className="text-body text-sm leading-relaxed mb-4">{area.blurb}</p>
                {activeSlug === area.slug && (
                  <Link
                    to="/#service-areas"
                    className="mb-4 inline-flex items-center text-xs font-semibold uppercase tracking-widest text-gold hover:text-gold-dark transition-colors"
                  >
                    Back to Service Areas
                  </Link>
                )}
                <div className="flex flex-wrap gap-3 text-sm">
                  <Link to="/roof-inspection" className="text-gold font-semibold hover:underline">
                    Free inspection
                  </Link>
                  <Link to="/roof-replacement" className="text-body hover:text-gold transition-colors">
                    Replacement
                  </Link>
                  <Link to="/roof-repair" className="text-body hover:text-gold transition-colors">
                    Repair
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 card-brand bg-charcoal-dark text-white p-8 text-center">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Get Started</p>
            <h2 className="text-2xl font-bold mb-4">Serving Your Neighborhood</h2>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Not sure if we cover your address? Call or text and we&apos;ll confirm quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center justify-center gap-2 btn-gold py-3 px-6 text-sm font-semibold">
                <Phone size={16} /> {PHONE_DISPLAY}
              </a>
              <a href={PHONE_SMS} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold py-3 px-6 text-sm rounded-brand hover:border-gold transition-colors">
                Text Us
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 text-gold font-semibold text-sm hover:underline">
                {PRIMARY_CTA} <ArrowRight size={14} />
              </Link>
            </div>
            <p className="flex items-center justify-center gap-2 text-gray-500 text-xs mt-6">
              <CheckCircle size={12} className="text-gold" /> Licensed &amp; insured · Lic. 1087153
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
