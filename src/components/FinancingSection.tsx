import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const bullets = [
  'Financing available on qualifying roof replacements',
  'Flexible monthly payment options',
  'No surprise fees, with a written quote before any work',
  'Ask which programs fit your project during your free inspection',
];

export default function FinancingSection() {
  return (
    <section className="bg-[#F3F1EE] py-10 md:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="card-brand bg-white border border-gray-100 p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Financing</p>
            <h2 className="text-2xl md:text-3xl font-bold text-headline mb-4">
              Replace Your Roof Without Waiting
            </h2>
            <p className="text-body text-sm leading-relaxed mb-5">
              A new roof is a major investment. We offer financing on qualifying projects so you can move forward when your roof needs attention, not when savings finally catch up.
            </p>
            <ul className="space-y-2">
              {bullets.map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-body">
                  <CheckCircle size={14} className="text-gold flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-cream border border-gold/20 p-5 text-center md:text-left">
            <p className="text-headline font-bold text-lg mb-2">Ask us for options</p>
            <p className="text-body text-sm mb-5">
              Every project is different. During your free inspection we&apos;ll walk you through financing that may be available for your roof.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 btn-gold px-6 py-3 text-sm font-semibold">
              Schedule Free Inspection <ArrowRight size={15} />
            </Link>
            <p className="text-body text-xs mt-4">
              <Link to="/blog/sacramento-roof-maintenance-checklist" className="text-gold font-semibold hover:underline">
                Metal roof maintenance checklist
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
