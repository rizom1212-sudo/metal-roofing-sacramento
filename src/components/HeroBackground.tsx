import { ASSETS } from '../data/assets';

interface HeroBackgroundProps {
  image?: string;
  webpImage?: string;
  alt?: string;
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
  alt = '',
  priority = false,
  className = 'absolute inset-0',
  imageClassName = '',
}: HeroBackgroundProps) {
  const webp = webpImage ?? (image === ASSETS.brand.hero ? ASSETS.brand.heroWebp : undefined);
  const priorityAttrs = priority ? ({ fetchpriority: 'high' } as Record<string, string>) : {};

  return (
    <div className={`${className} overflow-hidden`} aria-hidden>
      <div className="h-full w-full">
        <picture className="block w-full h-full">
          {webp && <source srcSet={webp} type="image/webp" />}
          <img
            src={image}
            alt={alt}
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
