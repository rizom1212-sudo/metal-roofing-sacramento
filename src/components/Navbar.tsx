import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { PRIMARY_CTA, PRIMARY_CTA_FREE } from '../data/cta';
import { PHONE_DISPLAY, PHONE_SMS, LOGO_SRC, LOGO_ALT } from '../data/site';
import { getNavServices } from '../data/services';
import { trackClickToSms } from '../lib/analytics';
import TelLink from './TelLink';
import { handleSamePageAnchorClick, scrollToTopInstant } from '../lib/scroll';
import SeasonalBanner, { SEASONAL_BANNER_SESSION_KEY } from './SeasonalBanner';
import { COLFAX_HOME_HARDENING_SLUG, COLFAX_INSPECTION_FORM_ID } from '../data/blogColfaxHomeHardening';

const allServices = getNavServices().map(service => ({
  label: service.name,
  href: service.canonicalUrl,
}));

function linkClass(active: boolean) {
  return active ? 'nav-link-active' : 'nav-link';
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const headerStackRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  const isColfaxHomeHardeningArticle =
    location.pathname === `/blog/${COLFAX_HOME_HARDENING_SLUG}`;
  const stickyInspectionLabel = isColfaxHomeHardeningArticle ? PRIMARY_CTA_FREE : PRIMARY_CTA;

  const handleHomeLogoClick = () => {
    if (location.pathname === '/') {
      scrollToTopInstant();
    }
  };

  const handleNavLinkClick = (href: string) => {
    setServicesOpen(false);
    if (location.pathname === href) {
      scrollToTopInstant();
    }
  };

  const handleMobileNavLinkClick = (href: string) => {
    setMobileOpen(false);
    handleNavLinkClick(href);
  };

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
  }, [bannerDismissed, mobileOpen]);

  return (
    <>
      <div ref={headerStackRef} className="fixed top-0 left-0 right-0 z-[60]">
        <SeasonalBanner dismissed={bannerDismissed} onDismiss={() => setBannerDismissed(true)} />

        <header className="bg-[#071323] border-b border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.24)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-7">
          <div className="flex h-[68px] md:h-[82px] items-center justify-between">

            <Link to="/" onClick={handleHomeLogoClick} className="flex items-center flex-shrink-0" style={{ minWidth: 0 }}>
              <img
                src={LOGO_SRC}
                alt={LOGO_ALT}
                className="h-[52px] md:h-[64px] w-auto max-w-[240px] object-contain object-left transition-transform duration-200 ease-out hover:scale-[1.015]"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
              <Link to="/" onClick={() => handleNavLinkClick('/')} className={linkClass(isActive('/'))}>
                Home
              </Link>
              <Link to="/roof-replacement" onClick={() => handleNavLinkClick('/roof-replacement')} className={linkClass(isActive('/roof-replacement'))}>
                Replacement
              </Link>
              <Link to="/emergency-roof-repair" onClick={() => handleNavLinkClick('/emergency-roof-repair')} className={linkClass(isActive('/emergency-roof-repair'))}>
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
                    <div className="bg-[#071323] border border-white/10 shadow-[0_18px_44px_rgba(0,0,0,0.28)] py-2 rounded-brand max-h-[70vh] overflow-y-auto">
                      {allServices.map(s => (
                        <Link
                          key={s.href}
                          to={s.href}
                          onClick={() => handleNavLinkClick(s.href)}
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

              <Link to="/gallery" onClick={() => handleNavLinkClick('/gallery')} className={linkClass(isActive('/gallery'))}>
                Gallery
              </Link>
              <Link to="/about" onClick={() => handleNavLinkClick('/about')} className={linkClass(isActive('/about'))}>
                About
              </Link>
              <Link to="/contact" onClick={() => handleNavLinkClick('/contact')} className={linkClass(isActive('/contact'))}>
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <TelLink
                location="nav-desktop"
                className="flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-all duration-200 ease-out hover:-translate-y-0.5"
              >
                <Phone size={15} />
                {PHONE_DISPLAY}
              </TelLink>
              <Link to="/contact" onClick={() => handleNavLinkClick('/contact')} className="btn-gold text-sm px-5 py-3 font-semibold tracking-wide">
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
          <div className="lg:hidden bg-[#071323] border-t border-white/10 max-h-[75vh] overflow-y-auto shadow-[0_18px_44px_rgba(0,0,0,0.25)]">
            <nav className="px-4 py-4 space-y-1">
              <Link to="/" onClick={() => handleMobileNavLinkClick('/')} className={`block px-3 py-2.5 text-sm ${isActive('/') ? 'text-gold font-semibold' : 'text-white hover:text-gold'}`}>
                Home
              </Link>
              <Link to="/roof-replacement" onClick={() => handleMobileNavLinkClick('/roof-replacement')} className={`block px-3 py-2.5 text-sm ${isActive('/roof-replacement') ? 'text-gold font-semibold' : 'text-gray-300 hover:text-gold'}`}>
                Replacement
              </Link>
              <Link to="/emergency-roof-repair" onClick={() => handleMobileNavLinkClick('/emergency-roof-repair')} className={`block px-3 py-2.5 text-sm ${isActive('/emergency-roof-repair') ? 'text-gold font-semibold' : 'text-gold hover:text-gold-light'}`}>
                Emergency
              </Link>

              <div className="px-3 py-1.5 text-xs text-gray-500 uppercase tracking-wider mt-2">Services</div>
              {allServices.map(s => (
                <Link
                  key={s.href}
                  to={s.href}
                  onClick={() => handleMobileNavLinkClick(s.href)}
                  className={`block px-3 py-2.5 text-sm hover:text-gold transition-colors ${
                    isActive(s.href) ? 'text-gold font-semibold' : 'text-gray-400'
                  }`}
                >
                  {s.label}
                </Link>
              ))}

              <div className="border-t border-white/10 mt-2 pt-2" />
              <Link to="/gallery" onClick={() => handleMobileNavLinkClick('/gallery')} className={`block px-3 py-2.5 text-sm ${isActive('/gallery') ? 'text-gold font-semibold' : 'text-gray-300 hover:text-white'}`}>
                Gallery
              </Link>
              <Link to="/about" onClick={() => handleMobileNavLinkClick('/about')} className={`block px-3 py-2.5 text-sm ${isActive('/about') ? 'text-gold font-semibold' : 'text-gray-300 hover:text-white'}`}>
                About
              </Link>
              <Link to="/contact" onClick={() => handleMobileNavLinkClick('/contact')} className={`block px-3 py-2.5 text-sm ${isActive('/contact') ? 'text-gold font-semibold' : 'text-gray-300 hover:text-white'}`}>
                Contact
              </Link>

              <div className="pt-3 space-y-2">
                <TelLink location="nav-mobile-menu" className="flex items-center justify-center gap-2 w-full btn-gold py-3 text-sm">
                  <Phone size={16} /> Call {PHONE_DISPLAY}
                </TelLink>
                <a
                  href={PHONE_SMS}
                  onClick={() => trackClickToSms('nav-mobile-menu')}
                  className="flex items-center justify-center w-full text-sm text-gray-400 hover:text-gold py-2 transition-colors"
                >
                  Text us instead
                </a>
              </div>
            </nav>
          </div>
        )}
        </header>
      </div>

      <div className="mobile-bottom-cta md:hidden">
        <div className="flex">
          <TelLink
            location="mobile-sticky-bar"
            className="flex-1 flex items-center justify-center gap-2 bg-gold text-white font-bold py-4 text-sm hover:bg-gold-light transition-colors"
          >
            <Phone size={18} />
            Call Now
          </TelLink>
          {isColfaxHomeHardeningArticle ? (
            <a
              href={`#${COLFAX_INSPECTION_FORM_ID}`}
              onClick={e => handleSamePageAnchorClick(e, COLFAX_INSPECTION_FORM_ID)}
              className="flex-1 flex items-center justify-center gap-2 bg-[#071323] text-white font-semibold py-4 text-sm hover:bg-charcoal-light transition-colors border-l border-white/10"
            >
              {stickyInspectionLabel}
            </a>
          ) : (
            <Link
              to="/contact"
              onClick={() => handleNavLinkClick('/contact')}
              className="flex-1 flex items-center justify-center gap-2 bg-[#071323] text-white font-semibold py-4 text-sm hover:bg-charcoal-light transition-colors border-l border-white/10"
            >
              {stickyInspectionLabel}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
