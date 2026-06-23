import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SacramentoGuideCalloutProps {
  href: string;
  label: string;
}

export default function SacramentoGuideCallout({ href, label }: SacramentoGuideCalloutProps) {
  return (
    <section className="bg-cream py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-body text-sm">
          Looking for Sacramento-specific help?{' '}
          <Link to={href} className="inline-flex items-center gap-1 text-gold font-semibold hover:underline">
            {label} <ArrowRight size={14} />
          </Link>
        </p>
      </div>
    </section>
  );
}
