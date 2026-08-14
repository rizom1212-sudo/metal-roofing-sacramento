import { Link, useLocation } from 'react-router-dom';
import { scrollToTopInstant } from '../lib/scroll';
import { Phone, Shield } from 'lucide-react';
import GoogleReviewsLink from './GoogleReviewsLink';
import { BUSINESS_ENTITY_NAME, LICENSE_SHORT, OPERATOR_DISCLOSURE, PHONE_DISPLAY } from '../data/site';
import TelLink from './TelLink';
import BrandMark from './BrandMark';
import { serviceAreas } from '../data/serviceAreas';
import { getFooterServices, getNavHref } from '../data/services';
import { FOOTER_PRIORITY_CITY_SLUGS } from '../data/internalLinking';

const footerServices = getFooterServices();

const footerServiceAreas = FOOTER_PRIORITY_CITY_SLUGS
  .map(slug => serviceAreas.find(area => area.slug === slug))
  .filter((area): area is (typeof serviceAreas)[number] => Boolean(area));

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
            <BrandMark to="/" onClick={handleHomeLogoClick} size="footer" variant="onDark" className="mb-3.5" />
            <p className="text-sm leading-relaxed mb-3 text-gray-400">
              Sacramento metal roofing specialists for residential and commercial metal systems, standing seam, replacement, repair, and inspections.
            </p>
            <p className="text-xs leading-relaxed mb-4 text-gray-500">
              {OPERATOR_DISCLOSURE}
            </p>
            <div className="flex flex-col gap-3">
              <TelLink location="footer" className="flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors">
                <Phone size={15} />
                {PHONE_DISPLAY}
              </TelLink>
              <GoogleReviewsLink className="text-sm" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerServices.map(service => (
                <li key={service.id}>
                  <Link
                    key={service.id}
                    to={getNavHref(service)}
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/gallery" className="text-sm text-gray-400 hover:text-gold transition-colors">Projects</Link></li>
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
                Serving greater Sacramento, including Folsom, El Dorado Hills, Roseville, Rocklin, Colfax, and nearby communities.
              </p>
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-2 gap-1.5">
                  {footerServiceAreas.map(area => (
                    <Link key={area.slug} to={`/service-areas/${area.slug}`} className="text-gray-400 hover:text-gold transition-colors">
                      {area.name}
                    </Link>
                  ))}
                </div>
                <Link to="/service-areas" className="inline-block text-gold hover:text-gold-light transition-colors text-sm font-semibold">
                  All service areas
                </Link>
                <p className="flex items-center gap-2 text-gray-400">
                  <Shield size={14} className="text-gold flex-shrink-0" />
                  Licensed &amp; Insured
                </p>
                <p className="text-gray-500">{LICENSE_SHORT}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} {BUSINESS_ENTITY_NAME}
          </p>
          <p className="text-xs text-gray-600">
            {LICENSE_SHORT} &nbsp;·&nbsp; Serving Greater Sacramento
          </p>
        </div>
      </div>
    </footer>
  );
}
