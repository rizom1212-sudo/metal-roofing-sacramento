import { Link, useLocation } from 'react-router-dom';
import { scrollToTopInstant } from '../lib/scroll';
import { Phone, Shield } from 'lucide-react';
import GoogleReviewsLink from './GoogleReviewsLink';
import { PHONE_DISPLAY, PHONE_TEL } from '../data/site';
import { serviceAreas } from '../data/serviceAreas';

const tier1Links = [
  { label: 'Roof Replacement', href: '/roof-replacement' },
  { label: 'Roof Repair', href: '/roof-repair' },
  { label: 'Emergency Roof Repair', href: '/emergency-roof-repair' },
  { label: 'Roof Inspection', href: '/roof-inspection' },
  { label: 'Metal Roofing', href: '/metal-roofing' },
  { label: 'Commercial Roofing', href: '/commercial-roofing' },
  { label: 'Gutters & Siding', href: '/gutters-siding' },
];

const footerServiceAreas = serviceAreas.slice(0, 6);

export default function Footer() {
  const location = useLocation();

  const handleHomeLogoClick = () => {
    if (location.pathname === '/') {
      scrollToTopInstant();
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-charcoal to-charcoal-dark text-gray-400 shadow-[0_-18px_44px_rgba(15,20,28,0.10)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" aria-hidden />
      <div className="max-w-7xl mx-auto px-5 sm:px-7 pt-12 footer-mobile-bottom md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" onClick={handleHomeLogoClick}>
              <img
                src="/assets/brand/prc13-logo-gold.png"
                alt="PRC 13 Roofing"
                className="h-[68px] w-auto max-w-[240px] object-contain object-left mb-3.5 block"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-4 text-gray-400">
              Sacramento residential roofing specialists focused on honest inspections, quality workmanship, and fast local service.
            </p>
            <div className="flex flex-col gap-3">
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors">
                <Phone size={15} />
                {PHONE_DISPLAY}
              </a>
              <GoogleReviewsLink className="text-sm" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2.5">
              {tier1Links.map(s => (
                <li key={s.href}>
                  <Link to={s.href} className="text-sm text-gray-400 hover:text-gold transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/gallery" className="text-sm text-gray-400 hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-400 hover:text-gold transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-gold transition-colors">Contact</Link></li>
              <li><Link to="/service-areas" className="text-sm text-gray-400 hover:text-gold transition-colors">Service Areas</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
              Service Area
            </h4>
            <div className="space-y-4">
              <p className="text-sm text-gray-400 leading-relaxed">
                Serving Sacramento, Roseville, Folsom, Elk Grove, Rocklin, and surrounding areas.
              </p>
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-2 gap-1.5">
                  {footerServiceAreas.map(area => (
                    <Link key={area.slug} to={`/service-areas/${area.slug}`} className="text-gray-400 hover:text-gold transition-colors">
                      {area.name}
                    </Link>
                  ))}
                </div>
                <p className="flex items-center gap-2 text-gray-400">
                  <Shield size={14} className="text-gold flex-shrink-0" />
                  Licensed &amp; Insured
                </p>
                <p className="text-gray-500">Lic. #1087153</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} PRC 13 Roofing Inc.
          </p>
          <p className="text-xs text-gray-600">
            Lic. #1087153 &nbsp;·&nbsp; Serving Greater Sacramento
          </p>
          <a href="/llms.txt" className="text-xs text-gray-600 hover:text-gold transition-colors">
            AI site facts
          </a>
        </div>
      </div>
    </footer>
  );
}
