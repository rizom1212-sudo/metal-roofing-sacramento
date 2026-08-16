import { Link } from 'react-router-dom';
import { BUSINESS_ENTITY_NAME, GOOGLE_MAPS_EMBED_URL } from '../../data/site';
import { serviceAreas } from '../../data/serviceAreas';

const PRIORITY_SLUGS = [
  'sacramento',
  'folsom',
  'el-dorado-hills',
  'roseville',
  'rocklin',
  'granite-bay',
  'rancho-cordova',
  'elk-grove',
] as const;

export default function HomeServiceTerritory() {
  const priority = PRIORITY_SLUGS.map(slug => serviceAreas.find(area => area.slug === slug)).filter(
    (area): area is (typeof serviceAreas)[number] => Boolean(area),
  );
  const remaining = serviceAreas.filter(area => !(PRIORITY_SLUGS as readonly string[]).includes(area.slug));

  return (
    <section className="bg-[color:var(--home-paper)] py-[var(--home-section)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-[36rem] mb-8 md:mb-10">
          <p className="home-kicker">Coverage</p>
          <h2 className="home-display mb-4">
            Metal roofing across
            <span className="block">Greater Sacramento</span>
          </h2>
          <p className="home-lede">
            Serving homeowners and commercial properties throughout Sacramento and surrounding
            communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="home-spec mb-3">Primary service areas</p>
            <ol className="border-t border-black/15">
              {priority.map((area, index) => (
                <li key={area.slug} className="border-b border-black/10">
                  <Link
                    to={`/service-areas/${area.slug}`}
                    className="home-city-cell flex items-baseline gap-4 px-0 py-3.5 min-h-12"
                  >
                    <span className="home-spec w-6">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[1.05rem] font-bold text-headline tracking-tight">
                      {area.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>

            <div className="mt-6">
              <p className="home-spec mb-2">Also served</p>
              <div className="flex flex-wrap gap-x-5 gap-y-0">
                {remaining.map(area => (
                  <Link key={area.slug} to={`/service-areas/${area.slug}`} className="home-cta min-h-11">
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pt-8">
            <p className="home-spec mb-3">{BUSINESS_ENTITY_NAME} service area</p>
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              className="w-full h-[220px] sm:h-[280px] md:h-[340px] block bg-[#ebe6dd] border border-black/10"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PRC 13 Roofing Inc. service area (operator of Metal Roofing Sacramento)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
