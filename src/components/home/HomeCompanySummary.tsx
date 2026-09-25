import { Link } from 'react-router-dom';
import { OPERATOR_DISCLOSURE } from '../../data/site';

export default function HomeCompanySummary() {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-[40rem]">
          <p className="home-kicker">Licensed contractor</p>
          <h2 className="home-display mb-4">Metal Roofing Built for Sacramento Homes</h2>
          <div className="space-y-4 text-sm sm:text-[0.98rem] text-body leading-relaxed">
            <p>
              {OPERATOR_DISCLOSURE} We install standing seam, corrugated, and exposed-fastener
              ribbed metal panels in steel and aluminum for homes and light-commercial buildings
              across Greater Sacramento.
            </p>
            <p>
              Sacramento summers wear dark, aging shingles. Metal reflects solar energy compared
              with that covering when underlayment, flashing, and ventilation are part of the
              assembly. Winter rain still tests flashings, penetrations, and drainage.
            </p>
            <p>
              Start with an inspection and a written estimate. Standard residential inspections
              are free and include written findings.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-1 mt-6">
            <Link to="/metal-roofing" className="home-cta min-h-11">
              Compare metal roofing services
              <span className="home-cta-arrow" aria-hidden>
                →
              </span>
            </Link>
            <Link to="/service-areas/sacramento" className="home-cta min-h-11">
              Sacramento neighborhoods
              <span className="home-cta-arrow" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
