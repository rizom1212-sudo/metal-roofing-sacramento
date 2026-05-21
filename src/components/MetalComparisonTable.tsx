import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const rows = [
  { label: 'Upfront cost', shingles: 'Lower and most economical', metal: 'Higher due to premium materials' },
  { label: 'Lifespan', shingles: '20 to 30 years in Sacramento', metal: '50+ years and often the last roof' },
  { label: 'Heat performance', shingles: 'Absorbs heat; granule wear in summer', metal: 'Reflects solar heat; cooler attic' },
  { label: 'Maintenance', shingles: 'Periodic repairs; granule loss over time', metal: 'Very low once installed' },
  { label: 'Repairability', shingles: 'Easy spot repairs on sections', metal: 'Panel/flash repairs; less frequent' },
  { label: 'Best for', shingles: 'Budget-focused or selling within 10 yrs', metal: 'Long-term owners; lifetime value' },
];

export default function MetalComparisonTable() {
  return (
    <section className="bg-white py-14 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Compare Options</p>
        <h2 className="section-heading mb-2">Metal Roofing vs. Architectural Shingles</h2>
        <p className="text-body text-sm mb-8 max-w-2xl">
          Honest comparison for Sacramento homeowners, based on our{' '}
          <Link to="/blog/metal-roofing-vs-shingles-sacramento" className="text-gold font-semibold hover:underline">
            metal vs. shingles guide
          </Link>
          .
        </p>
        <div className="overflow-x-auto card-brand border border-gray-100">
          <table className="w-full text-sm text-left min-w-[520px]">
            <thead>
              <tr className="bg-cream border-b border-gray-100">
                <th scope="col" className="px-4 py-3 font-semibold text-headline">Factor</th>
                <th scope="col" className="px-4 py-3 font-semibold text-headline">Shingles</th>
                <th scope="col" className="px-4 py-3 font-semibold text-gold">Metal</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/80'}>
                  <th scope="row" className="px-4 py-3 font-medium text-headline whitespace-nowrap">
                    {row.label}
                  </th>
                  <td className="px-4 py-3 text-body">{row.shingles}</td>
                  <td className="px-4 py-3 text-body">{row.metal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-body text-sm mt-6">
          Not sure which fits your home?{' '}
          <Link to="/contact" className="inline-flex items-center gap-1 text-gold font-semibold hover:underline">
            Schedule a free inspection <ArrowRight size={14} />
          </Link>
        </p>
      </div>
    </section>
  );
}
