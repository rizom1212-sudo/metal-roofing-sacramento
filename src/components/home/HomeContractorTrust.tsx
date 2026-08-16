import { Link } from 'react-router-dom';
import GoogleReviewsLink from '../GoogleReviewsLink';
import {
  BUSINESS_ENTITY_NAME,
  GOOGLE_RATING_VALUE,
  GOOGLE_REVIEW_COUNT,
  LICENSE_SHORT,
  OPERATOR_DISCLOSURE,
} from '../../data/site';
import { PRIMARY_CTA } from '../../data/cta';

export default function HomeContractorTrust() {
  return (
    <section className="bg-[#0b1016] text-[#f6f1e8] py-[var(--home-section)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <p className="home-kicker home-kicker-light">Licensed. Local. Accountable.</p>
        <h2 className="home-display home-display-on-dark mb-8 md:mb-10">
          The contractor behind every roof.
        </h2>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="home-spec home-spec-on-dark mb-2">Operated by</p>
            <p className="text-[1.75rem] md:text-[2.15rem] font-bold tracking-tight text-[#f6f1e8] mb-2">
              {BUSINESS_ENTITY_NAME}
            </p>
            <p className="home-spec home-spec-on-dark mb-6">{LICENSE_SHORT}</p>
            <p className="home-lede home-lede-on-dark max-w-[32rem]">
              {OPERATOR_DISCLOSURE}
            </p>
          </div>

          <div className="lg:col-span-6">
            <dl className="grid sm:grid-cols-2 border-t border-white/20">
              <div className="py-5 pr-6 border-b border-white/15">
                <dt className="home-spec home-spec-on-dark mb-2">Google rating</dt>
                <dd className="text-[2rem] font-bold tracking-tight text-[#f6f1e8] leading-none">
                  {GOOGLE_RATING_VALUE.toFixed(1)}
                </dd>
                <p className="home-caption home-caption-on-dark mt-2">
                  {GOOGLE_REVIEW_COUNT} reviews
                </p>
              </div>
              <div className="py-5 pr-6 border-b border-white/15">
                <dt className="home-spec home-spec-on-dark mb-2">Coverage</dt>
                <dd className="text-[1.2rem] font-bold tracking-tight text-[#f6f1e8] leading-snug">
                  Greater Sacramento
                </dd>
              </div>
              <div className="py-5 pr-6 border-b border-white/15 sm:col-span-2">
                <dt className="home-spec home-spec-on-dark mb-2">Work</dt>
                <dd className="text-[1.2rem] font-bold tracking-tight text-[#f6f1e8]">
                  Residential + Commercial Metal Roofing
                </dd>
              </div>
            </dl>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center btn-gold px-6 py-3 text-sm min-h-12"
              >
                {PRIMARY_CTA}
              </Link>
              <GoogleReviewsLink className="min-h-12 text-[#e0b06a]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
