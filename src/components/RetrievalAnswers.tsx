/**
 * Short question → direct answer blocks for retrieval / answer-engine clarity.
 * Keep answers factual and standalone; do not invent operational guarantees.
 */
interface RetrievalAnswerItem {
  question: string;
  answer: string;
  detail?: string;
}

interface RetrievalAnswersProps {
  heading?: string;
  intro?: string;
  items: RetrievalAnswerItem[];
}

export default function RetrievalAnswers({
  heading = 'Common questions, answered directly',
  intro,
  items,
}: RetrievalAnswersProps) {
  if (!items.length) return null;

  return (
    <section className="bg-cream py-12 md:py-14 border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Straight Answers</p>
        <h2 className="section-heading mb-3">{heading}</h2>
        {intro && <p className="text-body text-sm leading-relaxed mb-8 max-w-3xl">{intro}</p>}
        <div className="space-y-7">
          {items.map(item => (
            <div key={item.question}>
              <h3 className="text-lg font-bold text-headline mb-2">{item.question}</h3>
              <p className="text-body text-sm md:text-base leading-relaxed font-medium text-headline/90">
                {item.answer}
              </p>
              {item.detail && (
                <p className="text-body text-sm leading-relaxed mt-2">{item.detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
