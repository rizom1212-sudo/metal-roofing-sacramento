import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, CloudRain, Sun } from 'lucide-react';

export const SEASONAL_BANNER_SESSION_KEY = 'prc13-seasonal-banner-dismissed';

interface SeasonalBannerProps {
  dismissed?: boolean;
  onDismiss?: () => void;
}

function getSeason(): 'rain' | 'heat' {
  const month = new Date().getMonth();
  // November to March rain season; June to September heat season
  if (month >= 10 || month <= 2) return 'rain';
  if (month >= 5 && month <= 8) return 'heat';
  return 'rain';
}

export default function SeasonalBanner({ dismissed = false, onDismiss }: SeasonalBannerProps) {
  const [visible, setVisible] = useState(false);
  const season = getSeason();

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SEASONAL_BANNER_SESSION_KEY) !== '1') setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (dismissed || !visible) {
    return <div className="h-3 md:h-4 bg-[#071323] border-b border-[#071323]" aria-hidden />;
  }

  const isRain = season === 'rain';

  return (
    <div
      className="bg-[#071323] border-b border-gold/25 px-3 py-1.5 text-xs text-gray-100 sm:px-4 sm:py-2.5 sm:text-sm"
      role="region"
      aria-label="Seasonal roofing reminder"
    >
      <div className="relative max-w-7xl mx-auto flex items-center justify-center gap-1.5 sm:gap-2 pr-8 sm:pr-10 text-center leading-snug">
        {isRain ? <CloudRain size={15} className="text-gold flex-shrink-0" /> : <Sun size={15} className="text-gold flex-shrink-0" />}
        <span className="max-w-[19rem] sm:max-w-none">
          {isRain ? (
            <>
              Storm season?{' '}
              <Link to="/emergency-roof-repair" className="inline-flex items-center gap-1 text-gold font-extrabold hover:text-gold-light hover:underline transition-colors">
                Emergency roof help <span aria-hidden>→</span>
              </Link>{' '}
              with priority assessment when conditions allow.
            </>
          ) : (
            <>
              Sacramento heat stressing your roof?{' '}
              <Link to="/roof-inspection" className="text-gold font-semibold hover:underline">
                Book a free inspection
              </Link>{' '}
              before small issues spread.
            </>
          )}
        </span>
        <button
          type="button"
          onClick={() => {
            setVisible(false);
            onDismiss?.();
            try {
              sessionStorage.setItem(SEASONAL_BANNER_SESSION_KEY, '1');
            } catch {
              /* ignore */
            }
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-white transition-colors rounded-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          aria-label="Dismiss seasonal reminder"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
