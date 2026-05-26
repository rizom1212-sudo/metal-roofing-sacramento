import { CheckCircle } from 'lucide-react';
import type { ReactNode } from 'react';

interface AnswerSummaryProps {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  points?: string[];
  variant?: 'light' | 'dark';
}

export default function AnswerSummary({
  eyebrow = 'Quick Answer',
  title = 'What you need to know',
  children,
  points = [],
  variant = 'light',
}: AnswerSummaryProps) {
  const isDark = variant === 'dark';

  return (
    <aside className={`${isDark ? 'bg-charcoal-dark text-white border-white/10' : 'bg-white text-headline border-gold/20'} border p-5 md:p-6 rounded-brand shadow-sm mb-8`}>
      <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">{eyebrow}</p>
      <h2 className={`text-xl md:text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-headline'}`}>{title}</h2>
      <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-body'}`}>{children}</p>
      {points.length > 0 && (
        <ul className="mt-4 grid sm:grid-cols-2 gap-2.5">
          {points.map(point => (
            <li key={point} className={`flex items-start gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-body'}`}>
              <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
