import { useEffect, useState } from 'react';
import { ASSETS } from '../data/assets';

interface HeroBackgroundProps {
  image?: string;
  webpImage?: string;
  /** LCP hero preloads and uses fetchpriority */
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}

/**
 * Accessible hero background using a real &lt;img&gt; (better LCP than CSS background-image).
 */
export default function HeroBackground({
  image = ASSETS.brand.hero,
  webpImage,
  priority = false,
  className = 'absolute inset-0',
  imageClassName = '',
}: HeroBackgroundProps) {
  const webp = webpImage ?? (image === ASSETS.brand.hero ? ASSETS.brand.heroWebp : undefined);
  const priorityAttrs = priority ? ({ fetchpriority: 'high' } as Record<string, string>) : {};
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canParallax = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canParallax || reducedMotion) return;

    const handlePointerMove = (event: PointerEvent) => {
      const x = ((event.clientX / window.innerWidth) - 0.5) * 8;
      const y = ((event.clientY / window.innerHeight) - 0.5) * 8;
      setOffset({ x, y });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div className={`${className} overflow-hidden`} aria-hidden>
      <div
        className="hero-parallax-frame h-full w-full"
        style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
      >
        <picture className="block w-full h-full">
          {webp && <source srcSet={webp} type="image/webp" />}
          <img
            src={image}
            alt=""
            className={`hero-cinematic-image w-full h-full object-cover ${imageClassName}`}
            width={1920}
            height={1080}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            {...priorityAttrs}
          />
        </picture>
      </div>
    </div>
  );
}
