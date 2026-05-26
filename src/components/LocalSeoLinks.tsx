import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { serviceAreas } from '../data/serviceAreas';

const serviceLinks = [
  { label: 'Roof Replacement', href: '/roof-replacement' },
  { label: 'Roof Repair', href: '/roof-repair' },
  { label: 'Emergency Roof Repair', href: '/emergency-roof-repair' },
  { label: 'Metal Roofing', href: '/metal-roofing' },
  { label: 'Roof Inspections', href: '/roof-inspection' },
  { label: 'Commercial Roofing', href: '/commercial-roofing' },
];

interface LocalSeoLinksProps {
  title?: string;
  description?: string;
  cityLimit?: number;
}

export default function LocalSeoLinks({
  title = 'Sacramento Area Roofing Services',
  description = 'PRC 13 Roofing helps homeowners across Sacramento and nearby communities compare repair, replacement, metal roofing, and inspection options with clear local guidance.',
  cityLimit = 8,
}: LocalSeoLinksProps) {
  const cities = serviceAreas.slice(0, cityLimit);

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
                  key={link.href}
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
            <h2 className="text-2xl font-bold mb-3">Local Roofing Help Near Sacramento</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              See city-specific roofing guidance for nearby communities where heat, wind, older subdivisions, and winter rain affect roof decisions.
            </p>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {cities.map(area => (
                <Link
                  key={area.slug}
                  to={`/service-areas/${area.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-gold transition-colors"
                >
                  <MapPin size={13} className="text-gold" />
                  {area.name}
                </Link>
              ))}
            </div>
            <Link to="/service-areas" className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm mt-5 hover:text-gold-light transition-colors">
              View all service areas <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
