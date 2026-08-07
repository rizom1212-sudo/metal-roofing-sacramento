import { Clock } from 'lucide-react';

export default function TrustResponseLine({ className = '' }: { className?: string }) {
  return (
    <p className={`flex items-center justify-center gap-1.5 text-xs text-gray-400 ${className}`}>
      <Clock size={12} className="text-gold flex-shrink-0" aria-hidden />
      We aim to respond quickly during normal business hours
    </p>
  );
}
