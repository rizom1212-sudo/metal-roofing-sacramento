import { useRef, useState, type CSSProperties, type PointerEvent } from 'react';
import { beforeAfterPairs, type BeforeAfterPair } from '../data/beforeAfter';

function BeforeAfterSlider({ pair }: { pair: BeforeAfterPair }) {
  const [position, setPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const showBeforeLabel = position > 2;
  const showAfterLabel = position < 98;
  const sliderPositionStyle = {
    '--before-after-position': `${position}%`,
  } as CSSProperties;
  const pairText = `${pair.id} ${pair.category} ${pair.title} ${pair.description}`.toLowerCase();
  const isOldRestorationPair =
    pairText.includes('restoration') ||
    pairText.includes('historic') ||
    pairText.includes('original architecture');
  const displayPair = isOldRestorationPair
    ? {
        ...pair,
        title: 'Complete Roof Replacement',
        category: 'Roof Replacement',
        description: 'From tear off to final installation, this Sacramento home received a complete roofing upgrade.',
      }
    : pair;
  const updatePositionFromPointer = (event: PointerEvent<HTMLDivElement>) => {
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;

    const nextPosition = ((event.clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, nextPosition)));
  };

  return (
    <article className="group" data-stagger-item>
      <div className="relative overflow-hidden rounded-brand bg-charcoal-dark shadow-[0_18px_44px_rgba(15,20,28,0.16)] ring-1 ring-black/5 transition-all duration-300 ease-out group-hover:shadow-[0_22px_54px_rgba(15,20,28,0.22)] group-hover:ring-gold/20">
        <div
          ref={sliderRef}
          className="relative aspect-[4/3] touch-none select-none md:aspect-[5/4]"
          style={sliderPositionStyle}
          onPointerDown={event => {
            event.currentTarget.setPointerCapture(event.pointerId);
            updatePositionFromPointer(event);
          }}
          onPointerMove={event => {
            if (event.buttons !== 1) return;
            updatePositionFromPointer(event);
          }}
        >
          <img
            src={pair.after.src}
            alt={pair.after.alt}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            loading="lazy"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: 'var(--before-after-position)' }}
          >
            <img
              src={pair.before.src}
              alt={pair.before.alt}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              loading="lazy"
            />
          </div>

          <div
            className="absolute inset-y-0 z-10 w-0.5 bg-white/95 shadow-[0_0_18px_rgba(0,0,0,0.35)]"
            style={{ left: 'var(--before-after-position)' }}
            aria-hidden
          >
            <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-gold text-[10px] font-bold uppercase tracking-wide text-white shadow-[0_10px_26px_rgba(0,0,0,0.28)] transition-transform duration-200 ease-out group-hover:scale-105 group-[.is-visible]:animate-[handle-pulse_1.4s_ease-out_1]">
              Drag
            </span>
          </div>

          <span
            className={`absolute left-4 top-4 rounded-brand bg-charcoal-dark/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white shadow-sm backdrop-blur-sm transition-opacity duration-150 ${
              showBeforeLabel ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={!showBeforeLabel}
          >
            Before
          </span>
          <span
            className={`absolute right-4 top-4 rounded-brand bg-gold/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white shadow-sm backdrop-blur-sm transition-opacity duration-150 ${
              showAfterLabel ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={!showAfterLabel}
          >
            After
          </span>

          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={position}
            onInput={event => setPosition(Number(event.currentTarget.value))}
            onChange={event => setPosition(Number(event.target.value))}
            className="absolute inset-0 z-20 h-full w-full cursor-ew-resize touch-none opacity-0"
            aria-label={`Compare before and after photos for ${displayPair.title}`}
          />
        </div>
      </div>
      <div className="pt-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">{displayPair.category}</p>
        <h3 className="mt-1 text-base font-bold text-headline">
          {displayPair.title} in {displayPair.location}
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-body">
          {displayPair.description}
        </p>
      </div>
    </article>
  );
}

interface BeforeAfterProps {
  limit?: number;
  heading?: string;
  subheading?: string;
}

export default function BeforeAfter({
  limit,
  heading = 'Before & After',
  subheading = 'Sacramento area projects from our recent roofing work.',
}: BeforeAfterProps) {
  const pairs = limit ? beforeAfterPairs.slice(0, limit) : beforeAfterPairs;

  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Proof of Work</p>
        <h2 className="section-heading mb-3">{heading}</h2>
        <p className="section-subheading max-w-xl mx-auto">{subheading}</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        {pairs.map(pair => (
          <BeforeAfterSlider key={pair.id} pair={pair} />
        ))}
      </div>
    </div>
  );
}
