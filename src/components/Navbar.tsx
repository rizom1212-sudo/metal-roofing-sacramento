import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { PRIMARY_CTA, PRIMARY_CTA_FREE } from '../data/cta';
import { PHONE_DISPLAY, PHONE_SMS } from '../data/site';
import { getNavHref, getNavServices, getServicesMenuItems } from '../data/services';
import { trackClickToSms } from '../lib/analytics';
import TelLink from './TelLink';
import BrandMark from './BrandMark';
import { handleSamePageAnchorClick, scrollToTopInstant } from '../lib/scroll';
import SeasonalBanner, { SEASONAL_BANNER_SESSION_KEY } from './SeasonalBanner';
import { COLFAX_HOME_HARDENING_SLUG, COLFAX_INSPECTION_FORM_ID } from '../data/blogColfaxConstants';

const hubLinks = getNavServices();
const serviceMenuItems = getServicesMenuItems();

const companyLinks = [
  { id: 'service-areas', label: 'Service Areas', href: '/service-areas' },
  { id: 'projects', label: 'Projects', href: '/gallery' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' },
] as const;

function splitHref(href: string) {
  const [path, hash] = href.split('#');
  return { path, hash: hash ? `#${hash}` : '' };
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const headerStackRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isActive = (href: string) => {
    const { path } = splitHref(href);
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const servicesMenuActive = serviceMenuItems.some(service => isActive(getNavHref(service)));

  function linkClass(active: boolean) {
    return `${active ? 'nav-link-active' : 'nav-link'} py-2`;
  }

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
    const { path } = splitHref(href);
    if (location.pathname === path) {
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
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setServicesOpen(false);
      setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

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

        <header className="bg-[#0b1016] border-b border-white/15">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex h-[60px] md:h-[68px] items-center justify-between gap-4">

            <BrandMark to="/" onClick={handleHomeLogoClick} size="nav" variant="onDark" />

            <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
              {hubLinks.map(service => (
                <Link
                  key={service.id}
                  to={getNavHref(service)}
                  onClick={() => handleNavLinkClick(getNavHref(service))}
                  className={linkClass(isActive(getNavHref(service)))}
                >
                  {service.name}
                </Link>
              ))}

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-haspopup="menu"
                  aria-controls="services-menu"
                  onClick={() => setServicesOpen(v => !v)}
                  onKeyDown={event => {
                    if (event.key === 'Escape') setServicesOpen(false);
                    if (event.key === 'ArrowDown') {
                      event.preventDefault();
                      setServicesOpen(true);
                    }
                  }}
                  className={`flex items-center gap-1 py-2 ${servicesOpen || servicesMenuActive ? 'nav-link-active' : 'nav-link'}`}
                >
                  Services <ChevronDown size={13} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 -mt-1 pt-2 w-72 z-50">
                    <div
                      id="services-menu"
                      role="menu"
                      className="bg-[#0b1016] border border-white/10 shadow-[0_18px_44px_rgba(0,0,0,0.28)] py-2 max-h-[70vh] overflow-y-auto"
                    >
                      {serviceMenuItems.map(service => {
                        const href = getNavHref(service);
                        return (
                          <Link
                            key={service.id}
                            role="menuitem"
                            to={href}
                            onClick={() => handleNavLinkClick(href)}
                            className={`block px-4 py-3 text-sm min-h-11 transition-colors duration-200 hover:bg-gold/15 hover:text-gold ${
                              isActive(href) ? 'text-gold font-semibold bg-gold/10' : 'text-[#e8e4db]'
                            }`}
                          >
                            {service.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {companyLinks.map(link => (
                <Link
                  key={link.id}
                  to={link.href}
                  onClick={() => handleNavLinkClick(link.href)}
                  className={linkClass(isActive(link.href))}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4 xl:gap-5">
              <TelLink
                location="nav-desktop"
                className="hidden xl:flex items-center gap-2 text-[#f6f1e8] hover:text-gold-light font-semibold text-[13px] tracking-[0.04em] transition-colors"
              >
                <Phone size={14} />
                {PHONE_DISPLAY}
              </TelLink>
              <Link
                to="/contact"
                onClick={() => handleNavLinkClick('/contact')}
                className="btn-gold text-[11px] tracking-[0.12em] uppercase px-4 xl:px-5 py-2.5 font-semibold"
              >
                {PRIMARY_CTA}
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 min-h-11 min-w-11 flex items-center justify-center rounded-brand transition-colors duration-200 hover:bg-white/10"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-charcoal-dark border-t border-white/10 max-h-[75vh] overflow-y-auto shadow-[0_18px_44px_rgba(0,0,0,0.25)]">
            <nav className="px-4 py-4 space-y-1">
              {hubLinks.map(service => {
                const href = getNavHref(service);
                return (
                  <Link
                    key={service.id}
                    to={href}
                    onClick={() => handleMobileNavLinkClick(href)}
                    className={`block px-3 py-3 text-sm min-h-11 ${isActive(href) ? 'text-gold font-semibold' : 'text-white hover:text-gold'}`}
                  >
                    {service.name}
                  </Link>
                );
              })}

              <div className="px-3 py-1.5 text-xs text-[#c8cdd3] uppercase tracking-wider mt-2">Services</div>
              {serviceMenuItems.map(service => {
                const href = getNavHref(service);
                return (
                  <Link
                    key={service.id}
                    to={href}
                    onClick={() => handleMobileNavLinkClick(href)}
                    className={`block px-3 py-3 text-sm min-h-11 hover:text-gold transition-colors ${
                      isActive(href) ? 'text-gold font-semibold' : 'text-[#d5d0c6]'
                    }`}
                  >
                    {service.name}
                  </Link>
                );
              })}

              <div className="border-t border-white/10 mt-2 pt-2" />
              {companyLinks.map(link => (
                <Link
                  key={link.id}
                  to={link.href}
                  onClick={() => handleMobileNavLinkClick(link.href)}
                    className={`block px-3 py-3 text-sm min-h-11 ${isActive(link.href) ? 'text-gold font-semibold' : 'text-[#e8e4db] hover:text-white'}`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 space-y-2">
                <TelLink location="nav-mobile-menu" className="flex items-center justify-center gap-2 w-full btn-gold py-3 text-sm">
                  <Phone size={16} /> Call {PHONE_DISPLAY}
                </TelLink>
                <a
                  href={PHONE_SMS}
                  onClick={() => trackClickToSms('nav-mobile-menu')}
                  className="flex items-center justify-center w-full text-sm text-[#d5d0c6] hover:text-[#e0b06a] py-2 transition-colors"
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
              className="flex-1 flex items-center justify-center gap-2 bg-charcoal-dark text-white font-semibold py-4 text-sm hover:bg-charcoal-light transition-colors border-l border-white/10"
            >
              {stickyInspectionLabel}
            </a>
          ) : (
            <Link
              to="/contact"
              onClick={() => handleNavLinkClick('/contact')}
              className="flex-1 flex items-center justify-center gap-2 bg-charcoal-dark text-white font-semibold py-4 text-sm hover:bg-charcoal-light transition-colors border-l border-white/10"
            >
              {stickyInspectionLabel}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
