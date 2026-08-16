import { useId, useState } from 'react';
import { homeFaqs } from './homeFaqs';

const FEATURED_COUNT = 3;

export default function HomeBuyerQuestions() {
  const featured = homeFaqs.slice(0, FEATURED_COUNT);
  const remaining = homeFaqs.slice(FEATURED_COUNT);
  const [expanded, setExpanded] = useState(false);
  const moreId = useId();

  return (
    <section className="bg-white py-10 md:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 md:mb-7">
            <p className="home-kicker justify-center">Buyer questions</p>
            <h2 className="home-display mx-auto">
              Questions Sacramento homeowners ask about metal roofing
            </h2>
          </div>

          {featured.map(item => (
            <article key={item.question} className="border-t border-black/15 py-4 first:border-t">
              <h3 className="text-[1.1rem] md:text-[1.2rem] font-bold text-headline tracking-tight mb-2 leading-snug">
                {item.question}
              </h3>
              <p className="text-sm leading-relaxed text-body">{item.answer}</p>
            </article>
          ))}

          {remaining.length > 0 && (
            <>
              <div id={moreId} hidden={!expanded}>
                {remaining.map(item => (
                  <article key={item.question} className="border-t border-black/15 py-4">
                    <h3 className="text-[1.1rem] md:text-[1.2rem] font-bold text-headline tracking-tight mb-2 leading-snug">
                      {item.question}
                    </h3>
                    <p className="text-sm leading-relaxed text-body">{item.answer}</p>
                  </article>
                ))}
              </div>

              <div className="border-t border-black/15 pt-4 text-center">
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={moreId}
                  onClick={() => setExpanded(open => !open)}
                  className="home-cta min-h-11"
                >
                  {expanded ? 'Show Fewer Questions ↑' : 'View More Questions ↓'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
