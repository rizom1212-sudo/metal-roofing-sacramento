import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRIMARY_CTA } from '../data/cta';

export default function FloatingInspectionCta() {
  const [visible, setVisible] = useState(false);
  const [softened, setSoftened] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const finalCta = document.querySelector('[data-final-cta]');
      const footer = document.querySelector('footer');
      const finalCtaTop = finalCta?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      const footerTop = footer?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      const hasScrolledEnough = window.scrollY > 720;
      const isApproachingFooter = footerTop < window.innerHeight + 420;
      const isNearConversionArea =
        finalCtaTop < window.innerHeight - 120 || footerTop < window.innerHeight + 120;

      setVisible(hasScrolledEnough && !isNearConversionArea);
      setSoftened(isApproachingFooter);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`hidden md:block fixed bottom-6 right-6 z-40 transition-all duration-300 ease-out ${
        softened ? 'opacity-70 translate-y-1' : 'opacity-100 translate-y-0'
      }`}
      style={{ animation: 'none' }}
    >
      <Link
        to="/contact"
        className="inline-flex items-center gap-1.5 btn-gold px-4 py-2.5 text-xs font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.16)] rounded-brand"
      >
        {PRIMARY_CTA}
        <ArrowRight size={13} />
      </Link>
    </div>
  );
}
