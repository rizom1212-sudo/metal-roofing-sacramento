import {
  BUSINESS_ENTITY_NAME,
  GOOGLE_RATING_VALUE,
  LICENSE_SHORT,
} from '../../data/site';

const items = [
  LICENSE_SHORT,
  `${GOOGLE_RATING_VALUE.toFixed(1)} Google Rating`,
  BUSINESS_ENTITY_NAME,
  'Residential + Commercial',
  'Greater Sacramento',
] as const;

export default function HomeTrustStrip() {
  return (
    <section className="home-trust-strip" aria-label="Contractor credentials">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-4 md:py-5">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-3">
          {items.map(item => (
            <li key={item} className="home-trust-item text-[#f3eee4]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
