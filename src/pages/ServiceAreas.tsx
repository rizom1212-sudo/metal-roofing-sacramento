import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import JsonLd from '../components/JsonLd';
import { serviceAreas } from '../data/serviceAreas';
import { PRIMARY_CTA } from '../data/cta';
import { LICENSE_SHORT, PHONE_DISPLAY, PHONE_SMS, PHONE_TEL } from '../data/site';

export default function ServiceAreas() {
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
            PRC 13 Roofing is based in Sacramento and serves homeowners across the greater Sacramento region, including Placer County foothill communities such as Colfax, with honest inspections, repairs, and replacements.
          </p>
        </div>
      </section>

      <section id="service-area-list" className="bg-cream py-10 md:py-14 scroll-mt-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-5">
            {serviceAreas.map(area => (
              <Link
                key={area.slug}
                to={`/service-areas/${area.slug}`}
                id={area.slug}
                className="group card-brand bg-white border border-gray-100 p-6 scroll-mt-32 md:scroll-mt-36 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                <article>
                  <h2 className="text-xl font-bold text-headline mb-2 group-hover:text-gold transition-colors">
                    {area.name} Roofing Services
                  </h2>
                  <p className="text-body text-sm leading-relaxed mb-4">{area.blurb}</p>
                  <span className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm">
                    View {area.name} roofing guide <ArrowRight size={14} />
                  </span>
                </article>
              </Link>
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
              <CheckCircle size={12} className="text-gold" /> Licensed &amp; insured · {LICENSE_SHORT}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
