import { useState, useRef, useEffect, useId } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  variant?: 'light' | 'dark';
}

/** Single-open accordion (documented choice for clarity + keyboard UX). */
function FaqItemRow({
  item,
  isOpen,
  onToggle,
  borderColor,
  questionColor,
  answerColor,
  chevronColor,
  hoverBg,
  reducedMotion,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  borderColor: string;
  questionColor: string;
  answerColor: string;
  chevronColor: string;
  hoverBg: string;
  reducedMotion: boolean;
}) {
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | 'auto'>(0);

  useEffect(() => {
    if (!panelRef.current) return;
    if (reducedMotion) {
      setHeight(isOpen ? 'auto' : 0);
      return;
    }
    setHeight(isOpen ? panelRef.current.scrollHeight : 0);
  }, [isOpen, reducedMotion]);

  return (
    <div data-stagger-item className={`${borderColor} transition-colors duration-200 ${isOpen ? 'bg-gold/[0.03]' : ''}`}>
      <button
        type="button"
        id={`${panelId}-button`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className={`w-full flex items-start justify-between gap-4 py-5 px-3 md:px-4 text-left transition-all duration-200 ease-out ${hoverBg} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded-brand`}
      >
        <span className={`font-semibold text-sm md:text-base leading-snug ${questionColor}`}>
          {item.question}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 mt-0.5 transition-transform duration-300 ease-out motion-reduce:transition-none ${chevronColor} ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={`${panelId}-button`}
        hidden={!isOpen && reducedMotion}
        className="motion-reduce:transition-none"
        style={{
          height: reducedMotion ? undefined : height,
          overflow: reducedMotion ? undefined : 'hidden',
          transition: reducedMotion ? undefined : 'height 280ms cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div
          ref={panelRef}
          className="pb-5 pr-8"
          style={reducedMotion && !isOpen ? { display: 'none' } : undefined}
        >
          <p className={`text-sm leading-7 transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'} ${answerColor}`}>
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion({ items, variant = 'light' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  const borderColor = variant === 'dark' ? 'border-white/10' : 'border-gray-200';
  const questionColor = variant === 'dark' ? 'text-white' : 'text-headline';
  const answerColor = variant === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const chevronColor = 'text-gold';
  const hoverBg = variant === 'dark' ? 'hover:bg-white/5' : 'hover:bg-gray-50/60';

  return (
    <div className={`divide-y ${borderColor}`}>
      {items.map((item, i) => (
        <FaqItemRow
          key={`${item.question}-${i}`}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => toggle(i)}
          borderColor={borderColor}
          questionColor={questionColor}
          answerColor={answerColor}
          chevronColor={chevronColor}
          hoverBg={hoverBg}
          reducedMotion={reducedMotion}
        />
      ))}
    </div>
  );
}
