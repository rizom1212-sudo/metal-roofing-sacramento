import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { serviceAreas } from '../data/serviceAreas';
import { getLocalSeoLinkServices, getNavHref } from '../data/services';
import { LOCAL_SEO_PRIORITY_CITY_SLUGS } from '../data/internalLinking';

const serviceLinks = getLocalSeoLinkServices().map(service => ({
  id: service.id,
  label: service.shortName ?? service.name,
  href: getNavHref(service),
}));

function pickLocalSeoCities(limit: number) {
  const bySlug = new Map(serviceAreas.map(area => [area.slug, area]));
  const prioritized = LOCAL_SEO_PRIORITY_CITY_SLUGS
    .map(slug => bySlug.get(slug))
    .filter((area): area is (typeof serviceAreas)[number] => Boolean(area));
  if (prioritized.length >= limit) return prioritized.slice(0, limit);
  const used = new Set(prioritized.map(area => area.slug));
  const remainder = serviceAreas.filter(area => !used.has(area.slug));
  return [...prioritized, ...remainder].slice(0, limit);
}

interface LocalSeoLinksProps {
  title?: string;
  description?: string;
  cityLimit?: number;
}

export default function LocalSeoLinks({
  title = 'Sacramento Metal Roofing Services',
  description = 'Compare metal roofing, installation, replacement, repair, standing seam, residential and commercial metal systems, and metal roof inspections across Sacramento and nearby communities.',
  cityLimit = 8,
}: LocalSeoLinksProps) {
  const cities = pickLocalSeoCities(cityLimit);

  return (
    <section className="bg-cream py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="card-brand bg-white border border-gray-100 p-6 md:p-7">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Related Services</p>
            <h2 className="text-2xl font-bold text-headline mb-3">{title}</h2>
            <p className="text-body text-sm leading-relaxed mb-5">{description}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {serviceLinks.map(link => (
                <Link
                  key={link.id}
                  to={link.href}
                  className="flex items-center justify-between gap-3 border border-gray-100 bg-cream px-4 py-3 text-sm font-semibold text-headline hover:border-gold/40 hover:text-gold transition-colors"
                >
                  {link.label}
                  <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>

          <div className="card-brand bg-charcoal-dark text-white p-6 md:p-7">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Service Areas</p>
            <h2 className="text-2xl font-bold mb-3">Metal Roofing Near Sacramento</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              City hubs explain local metal-roofing context — heat, wind, housing stock, and rain — for communities we serve across Greater Sacramento.
            </p>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {cities.map(area => (
                <Link
                  key={area.slug}
                  to={`/service-areas/${area.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-gold transition-colors"
                >
                  <MapPin size={13} className="text-gold" />
                  {area.slug === 'sacramento' ? 'Sacramento neighborhoods' : `Metal roofing in ${area.name}`}
                </Link>
              ))}
            </div>
            <Link to="/service-areas" className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm mt-5 hover:text-gold-light transition-colors">
              Browse all Sacramento-area cities <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
