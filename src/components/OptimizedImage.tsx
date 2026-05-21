interface OptimizedImageProps {
  src: string;
  alt: string;
  /** Optional WebP path used in &lt;picture&gt; when provided */
  webpSrc?: string;
  width?: number;
  height?: number;
  className?: string;
  /** Responsive sizes hint for layout */
  sizes?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain';
}

/**
 * Image with CLS-friendly dimensions, lazy loading, and optional WebP source.
 */
export default function OptimizedImage({
  src,
  alt,
  webpSrc,
  width,
  height,
  className = '',
  sizes,
  priority = false,
  objectFit = 'cover',
}: OptimizedImageProps) {
  const loading = priority ? 'eager' : 'lazy';
  const priorityAttrs = priority ? ({ fetchpriority: 'high' } as Record<string, string>) : {};
  const aspectStyle =
    width && height ? { aspectRatio: `${width} / ${height}` } : undefined;

  const img = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={priority ? 'sync' : 'async'}
      sizes={sizes}
      className={`w-full h-full object-${objectFit} ${className}`}
      style={aspectStyle}
      {...priorityAttrs}
    />
  );

  if (!webpSrc) {
    return (
      <div className={width && height ? 'overflow-hidden' : undefined} style={aspectStyle}>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding={priority ? 'sync' : 'async'}
          sizes={sizes}
          className={`w-full object-${objectFit} ${className}`}
          {...priorityAttrs}
        />
      </div>
    );
  }

  return (
    <picture className="block w-full" style={aspectStyle}>
      <source srcSet={webpSrc} type="image/webp" />
      {img}
    </picture>
  );
}
