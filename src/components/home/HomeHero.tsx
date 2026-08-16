import { Phone } from 'lucide-react';
import HeroBackground from '../HeroBackground';
import TelLink from '../TelLink';
import { PHONE_DISPLAY } from '../../data/site';
import { handleSamePageAnchorClick } from '../../lib/scroll';
import HomeHeroLeadForm from './HomeHeroLeadForm';
import { HOME_IMAGES } from './homeImages';

export default function HomeHero() {
  return (
    <section className="relative bg-charcoal-dark overflow-hidden md:min-h-[92svh]">
      <HeroBackground
        priority
        image={HOME_IMAGES.hero.src}
        alt={HOME_IMAGES.hero.alt}
        width={HOME_IMAGES.hero.width}
        height={HOME_IMAGES.hero.height}
        imageClassName="hero-cinematic-image object-[32%_58%] md:object-[46%_54%] contrast-[1.05] saturate-[1.04]"
      />
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(8,11,16,0.42) 0%, rgba(8,11,16,0.62) 38%, rgba(8,11,16,0.94) 100%)',
        }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(105deg, rgba(8,11,16,0.88) 0%, rgba(8,11,16,0.72) 28%, rgba(8,11,16,0.28) 54%, rgba(8,11,16,0.12) 74%, rgba(8,11,16,0.22) 100%)',
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-[calc(var(--prc13-header-offset,104px)+0.85rem)] pb-10 sm:pb-12 md:pt-[128px] md:pb-14 w-full md:min-h-[92svh] flex items-center">
        <div className="grid w-full gap-8 lg:grid-cols-12 lg:gap-14 lg:items-end">
          <div className="lg:col-span-7 max-w-[38rem]">
            <p className="home-kicker home-kicker-light">Metal Roofing Specialists</p>
            <h1 className="home-display mb-5">
              Metal Roofing{' '}
              <span className="block">in Sacramento, CA</span>
            </h1>
            <p className="text-[color:var(--home-ink)] text-[1.08rem] sm:text-[1.25rem] font-semibold tracking-tight mb-4">
              Installation, Replacement &amp; Repair
            </p>
            <p className="text-[color:var(--home-ink)] text-[0.98rem] sm:text-[1.05rem] leading-relaxed mb-8 max-w-[32rem]">
              Standing seam and metal roofing installation, replacement and repair by PRC 13 Roofing
              Inc.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#home-estimate"
                onClick={event => handleSamePageAnchorClick(event, 'home-estimate')}
                className="lg:hidden inline-flex items-center justify-center btn-gold py-3.5 px-6 text-[0.95rem] font-semibold min-h-12"
              >
                Request an Estimate
              </a>
              <TelLink
                location="home"
                className="inline-flex items-center justify-center gap-2 border border-[color:var(--home-ink)]/55 text-[color:var(--home-ink)] hover:bg-white/10 font-semibold py-3.5 px-6 text-[0.95rem] min-h-12"
              >
                <Phone size={17} /> Call {PHONE_DISPLAY}
              </TelLink>
            </div>
          </div>

          <div
            id="home-estimate"
            className="lg:col-span-5 lg:max-w-[400px] lg:justify-self-end w-full scroll-mt-[var(--prc13-header-offset,104px)]"
          >
            <HomeHeroLeadForm sourcePage="home-hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
