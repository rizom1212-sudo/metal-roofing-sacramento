import { Link } from 'react-router-dom';
import { PRIMARY_CTA } from '../../data/cta';

const stages = [
  {
    id: '01',
    title: 'Inspect',
    body: 'Existing covering, accessible deck clues, leaks, and whether repair or a new metal roof is the honest path.',
  },
  {
    id: '02',
    title: 'Specify',
    body: 'Standing seam or another metal system PRC 13 installs, plus underlayment, flashings, and ventilation.',
  },
  {
    id: '03',
    title: 'Build',
    body: 'Preparation, installation, flashing and detail work, then a final walkthrough.',
  },
] as const;

export default function HomeProcessTimeline() {
  return (
    <section className="bg-[color:var(--home-paper-2)] py-[var(--home-section)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-[34rem] mb-8 md:mb-10">
          <p className="home-kicker">Process</p>
          <h2 className="home-display">How a metal roof gets built.</h2>
        </div>

        <ol className="grid md:grid-cols-3 gap-0 mb-8">
          {stages.map((stage, index) => (
            <li key={stage.id} className="md:pr-8 py-5 md:py-0 border-b md:border-b-0 border-black/10 last:border-b-0">
              {index > 0 ? <div className="home-process-track" aria-hidden /> : null}
              <p className="text-[3rem] md:text-[3.75rem] font-bold tracking-tight text-gold leading-none mb-3">
                {stage.id}
              </p>
              <h3 className="text-[1.15rem] md:text-[1.25rem] font-bold tracking-[0.14em] uppercase text-headline mb-2">
                {stage.title}
              </h3>
              <p className="text-sm text-body leading-relaxed max-w-[20rem]">{stage.body}</p>
            </li>
          ))}
        </ol>

        <Link to="/contact" className="home-cta min-h-11">
          {PRIMARY_CTA}{' '}
          <span className="home-cta-arrow" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
