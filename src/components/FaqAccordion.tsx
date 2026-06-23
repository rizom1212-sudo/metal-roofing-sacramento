import { useState, useRef, useEffect, useId } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  variant?: 'light' | 'dark';
  /** Tighter vertical spacing between items */
  compact?: boolean;
  /** Two columns from md breakpoint upward; single column on mobile */
  columns?: 1 | 2;
  /** Show this many items initially; remainder stay in the DOM and expand on demand */
  defaultVisibleCount?: number;
  expandLabel?: string;
  collapseLabel?: string;
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
  compact,
  itemBorder,
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
  compact?: boolean;
  itemBorder?: boolean;
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

  const buttonPadding = compact ? 'py-3 px-2 md:px-3' : 'py-5 px-3 md:px-4';
  const answerPadding = compact ? 'pb-3 pr-6' : 'pb-5 pr-8';
  const answerLeading = compact ? 'leading-6' : 'leading-7';

  return (
    <div
      data-stagger-item
      className={`transition-colors duration-200 ${itemBorder ? `border-b ${borderColor}` : ''} ${isOpen ? 'bg-gold/[0.03]' : ''}`}
    >
      <button
        type="button"
        id={`${panelId}-button`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className={`w-full flex items-start justify-between gap-3 md:gap-4 ${buttonPadding} text-left transition-all duration-200 ease-out ${hoverBg} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded-brand`}
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
          className={answerPadding}
          style={reducedMotion && !isOpen ? { display: 'none' } : undefined}
        >
          <p className={`text-sm ${answerLeading} transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'} ${answerColor}`}>
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion({
  items,
  variant = 'light',
  compact = false,
  columns = 1,
  defaultVisibleCount,
  expandLabel = 'View More FAQs',
  collapseLabel = 'Show Less',
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const collapsible =
    typeof defaultVisibleCount === 'number' && items.length > defaultVisibleCount;
  const isItemCollapsed = (index: number) =>
    collapsible && !expanded && index >= defaultVisibleCount!;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (
      collapsible &&
      !expanded &&
      openIndex !== null &&
      openIndex >= defaultVisibleCount!
    ) {
      setOpenIndex(null);
    }
  }, [collapsible, expanded, openIndex, defaultVisibleCount]);

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  const borderColor = variant === 'dark' ? 'border-white/10' : 'border-gray-200';
  const questionColor = variant === 'dark' ? 'text-white' : 'text-headline';
  const answerColor = variant === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const chevronColor = 'text-gold';
  const hoverBg = variant === 'dark' ? 'hover:bg-white/5' : 'hover:bg-gray-50/60';
  const useGrid = columns === 2;
  const itemBorder = useGrid;

  const rowProps = {
    borderColor,
    questionColor,
    answerColor,
    chevronColor,
    hoverBg,
    reducedMotion,
    compact,
    itemBorder,
  };

  const listClassName = useGrid
    ? 'grid grid-cols-1 md:grid-cols-2 md:gap-x-6'
    : `divide-y ${borderColor}`;

  return (
    <div>
      <div className={listClassName}>
        {items.map((item, i) => (
          <div key={`${item.question}-${i}`} className={isItemCollapsed(i) ? 'hidden' : undefined}>
            <FaqItemRow
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
              {...rowProps}
            />
          </div>
        ))}
      </div>

      {collapsible && (
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setExpanded(prev => !prev)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded-brand px-2 py-1"
          >
            {expanded ? collapseLabel : expandLabel}
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
              aria-hidden
            />
          </button>
        </div>
      )}
    </div>
  );
}
