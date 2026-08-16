import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import TelLink from '../TelLink';
import { LICENSE_SHORT, OPERATOR_DISCLOSURE, PHONE_DISPLAY } from '../../data/site';
import { PRIMARY_CTA } from '../../data/cta';
import { HOME_IMAGES } from './homeImages';

export default function HomeFinalConversion() {
  return (
    <section data-final-cta className="relative overflow-hidden bg-[#0b1016] py-16 md:py-20 mobile-section-bottom">
      <img
        src={HOME_IMAGES.finalCta.src}
        alt=""
        width={HOME_IMAGES.finalCta.width}
        height={HOME_IMAGES.finalCta.height}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[40%_55%]"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(8,11,16,0.94) 0%, rgba(8,11,16,0.88) 48%, rgba(8,11,16,0.62) 100%)',
        }}
        aria-hidden
      />
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-[34rem]">
          <p className="home-kicker home-kicker-light">Next step</p>
          <h2 className="home-display home-display-on-dark mb-4">
            Ready for a metal roof?
          </h2>
          <p className="home-lede home-lede-on-dark mb-8">
            Start with an inspection and a straightforward conversation about the right system for
            the property.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center btn-gold px-8 py-4 text-base font-semibold min-h-12"
            >
              {PRIMARY_CTA}
            </Link>
            <TelLink
              location="home-final"
              className="inline-flex items-center justify-center gap-2 border border-[#f6f1e8] text-[#f6f1e8] font-semibold px-8 py-4 text-base min-h-12 hover:bg-white/10"
            >
              <Phone size={18} /> Call {PHONE_DISPLAY}
            </TelLink>
          </div>
          <p className="home-caption home-caption-on-dark max-w-lg">
            {OPERATOR_DISCLOSURE} {LICENSE_SHORT}
          </p>
        </div>
      </div>
    </section>
  );
}
