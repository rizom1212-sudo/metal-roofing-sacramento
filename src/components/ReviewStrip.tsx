import { Star } from 'lucide-react';
import { reviews, type Review } from '../data/reviews';
import GoogleIcon from './GoogleIcon';

interface ReviewStripProps {
  /** How many reviews to show. Defaults to 3. */
  count?: number;
  /** Light (cream bg) or dark (charcoal bg) variant */
  variant?: 'light' | 'dark';
  /** Override which reviews to show by index */
  indices?: number[];
}

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function ReviewStrip({ count = 3, variant = 'light', indices }: ReviewStripProps) {
  const shown: Review[] = indices
    ? indices.map(i => reviews[i]).filter(Boolean)
    : reviews.slice(0, count);

  const cardBg = variant === 'dark' ? 'bg-white/5 border-white/10 hover:border-gold/30' : 'bg-white border-gray-100 hover:border-gold/20';
  const textMain = variant === 'dark' ? 'text-white' : 'text-headline';
  const textSub = variant === 'dark' ? 'text-gray-400' : 'text-body';

  return (
    <div className="grid md:grid-cols-3 gap-5">
      {shown.map(review => (
        <div
          key={review.name}
          data-stagger-item
          className={`group card-brand relative border p-6 h-full flex flex-col transition-all duration-300 ease-out ${cardBg}`}
        >
          <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white shadow-[0_4px_14px_rgba(0,0,0,0.08)] ring-1 ring-gold/0 transition-all duration-300 group-hover:ring-gold/20" aria-label="Google review">
            <GoogleIcon className="h-4 w-4" />
          </div>
          <StarRow count={review.rating} />
          <p className={`text-sm leading-relaxed mt-3.5 mb-5 italic ${textSub}`}>"{review.text}"</p>
          <p className={`font-semibold text-sm mt-auto ${textMain}`}>{review.name}</p>
        </div>
      ))}
    </div>
  );
}
