import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { PRIMARY_CTA } from '../data/cta';
import { PHONE_SMS } from '../data/site';
import SeasonalBanner, { SEASONAL_BANNER_SESSION_KEY } from './SeasonalBanner';

const allServices = [
  { label: 'Roof Repair', href: '/roof-repair' },
  { label: 'Metal Roofing', href: '/metal-roofing' },
  { label: 'Commercial Roofing', href: '/commercial-roofing' },
  { label: 'Roof Inspection', href: '/roof-inspection' },
  { label: 'Gutters & Siding', href: '/gutters-siding' },
];

function linkClass(active: boolean) {
  return active ? 'nav-link-active' : 'nav-link';
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const headerStackRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    try {
      setBannerDismissed(sessionStorage.getItem(SEASONAL_BANNER_SESSION_KEY) === '1');
    } catch {
      setBannerDismissed(false);
    }
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const updateHeaderOffset = () => {
      const height = headerStackRef.current?.getBoundingClientRect().height ?? 0;
      if (height > 0) {
        document.documentElement.style.setProperty('--prc13-header-offset', `${Math.ceil(height)}px`);
      }
    };

    updateHeaderOffset();
    const observer = typeof ResizeObserver !== 'undefined' && headerStackRef.current
      ? new ResizeObserver(updateHeaderOffset)
      : null;
    if (headerStackRef.current) observer?.observe(headerStackRef.current);
    window.addEventListener('resize', updateHeaderOffset);

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', updateHeaderOffset);
    };
  }, [bannerDismissed, mobileOpen, scrolled]);

  const handleLogoClick = () => {
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
  };

  return (
    <>
      <div ref={headerStackRef} className="fixed top-0 left-0 right-0 z-[60]">
        <SeasonalBanner dismissed={bannerDismissed} onDismiss={() => setBannerDismissed(true)} />

        <header
          className={`border-b border-white/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] backdrop-blur-sm ${
            scrolled
              ? 'bg-charcoal/95 shadow-[0_12px_32px_rgba(0,0,0,0.22)]'
              : 'bg-charcoal/95 shadow-[0_4px_18px_rgba(0,0,0,0.12)]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-7">
          <div className={`flex items-center justify-between transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled ? 'h-[64px] md:h-[74px]' : 'h-[68px] md:h-[82px]'
          }`}>

            <Link to="/" onClick={handleLogoClick} className="flex items-center flex-shrink-0" style={{ minWidth: 0 }}>
              <img
                src="/assets/brand/prc13-logo-gold.png"
                alt="PRC 13 Roofing"
                className={`w-auto max-w-[240px] object-contain object-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.015] ${
                  scrolled ? 'h-[48px] md:h-[58px]' : 'h-[52px] md:h-[64px]'
                }`}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
              <Link to="/" className={linkClass(isActive('/'))}>
                Home
              </Link>
              <Link to="/roof-replacement" className={linkClass(isActive('/roof-replacement'))}>
                Replacement
              </Link>
              <Link to="/emergency-roof-repair" className={linkClass(isActive('/emergency-roof-repair'))}>
                Emergency
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen(v => !v)}
                  className={`flex items-center gap-1 py-2 ${servicesOpen || allServices.some(s => isActive(s.href)) ? 'nav-link-active' : 'nav-link'}`}
                >
                  Services <ChevronDown size={13} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 -mt-1 pt-2 w-56 z-50">
                    <div className="bg-charcoal-dark/95 border border-white/10 shadow-[0_18px_44px_rgba(0,0,0,0.28)] py-2 rounded-brand max-h-[70vh] overflow-y-auto backdrop-blur-sm">
                      {allServices.map(s => (
                        <Link
                          key={s.href}
                          to={s.href}
                          className={`block px-4 py-2.5 text-sm transition-all duration-200 ease-out hover:bg-gold/15 hover:text-gold hover:pl-5 ${
                            isActive(s.href)
                              ? 'text-gold font-semibold bg-gold/10'
                              : 'text-gray-300'
                          }`}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/gallery" className={linkClass(isActive('/gallery'))}>
                Gallery
              </Link>
              <Link to="/about" className={linkClass(isActive('/about'))}>
                About
              </Link>
              <Link to="/contact" className={linkClass(isActive('/contact'))}>
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:9167613866"
                className="flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-all duration-200 ease-out hover:-translate-y-0.5"
              >
                <Phone size={15} />
                916-761-3866
              </a>
              <Link to="/contact" className="btn-gold text-sm px-5 py-3 font-semibold tracking-wide">
                {PRIMARY_CTA}
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 rounded-brand transition-all duration-200 hover:bg-white/10 active:scale-95"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-charcoal-dark/95 border-t border-white/10 max-h-[75vh] overflow-y-auto shadow-[0_18px_44px_rgba(0,0,0,0.25)] backdrop-blur-sm">
            <nav className="px-4 py-4 space-y-1">
              <Link to="/" className={`block px-3 py-2.5 text-sm ${isActive('/') ? 'text-gold font-semibold' : 'text-white hover:text-gold'}`}>
                Home
              </Link>
              <Link to="/roof-replacement" className={`block px-3 py-2.5 text-sm ${isActive('/roof-replacement') ? 'text-gold font-semibold' : 'text-gray-300 hover:text-gold'}`}>
                Replacement
              </Link>
              <Link to="/emergency-roof-repair" className={`block px-3 py-2.5 text-sm ${isActive('/emergency-roof-repair') ? 'text-gold font-semibold' : 'text-gold hover:text-gold-light'}`}>
                Emergency
              </Link>

              <div className="px-3 py-1.5 text-xs text-gray-500 uppercase tracking-wider mt-2">Services</div>
              {allServices.map(s => (
                <Link
                  key={s.href}
                  to={s.href}
                  className={`block px-3 py-2.5 text-sm hover:text-gold transition-colors ${
                    isActive(s.href) ? 'text-gold font-semibold' : 'text-gray-400'
                  }`}
                >
                  {s.label}
                </Link>
              ))}

              <div className="border-t border-white/10 mt-2 pt-2" />
              <Link to="/gallery" className={`block px-3 py-2.5 text-sm ${isActive('/gallery') ? 'text-gold font-semibold' : 'text-gray-300 hover:text-white'}`}>
                Gallery
              </Link>
              <Link to="/about" className={`block px-3 py-2.5 text-sm ${isActive('/about') ? 'text-gold font-semibold' : 'text-gray-300 hover:text-white'}`}>
                About
              </Link>
              <Link to="/contact" className={`block px-3 py-2.5 text-sm ${isActive('/contact') ? 'text-gold font-semibold' : 'text-gray-300 hover:text-white'}`}>
                Contact
              </Link>

              <div className="pt-3 space-y-2">
                <a href="tel:9167613866" className="flex items-center justify-center gap-2 w-full btn-gold py-3 text-sm">
                  <Phone size={16} /> Call 916-761-3866
                </a>
                <a href={PHONE_SMS} className="flex items-center justify-center w-full text-sm text-gray-400 hover:text-gold py-2 transition-colors">
                  Text us instead
                </a>
              </div>
            </nav>
          </div>
        )}
        </header>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-charcoal-dark border-t border-white/20 safe-area-bottom">
        <div className="flex">
          <a
            href="tel:9167613866"
            className="flex-1 flex items-center justify-center gap-2 bg-gold text-white font-bold py-4 text-sm hover:bg-gold-light transition-colors"
          >
            <Phone size={18} />
            Call Now
          </a>
          <Link
            to="/contact"
            className="flex-1 flex items-center justify-center gap-2 bg-charcoal text-white font-semibold py-4 text-sm hover:bg-charcoal-light transition-colors border-l border-white/10"
          >
            {PRIMARY_CTA}
          </Link>
        </div>
      </div>
    </>
  );
}
