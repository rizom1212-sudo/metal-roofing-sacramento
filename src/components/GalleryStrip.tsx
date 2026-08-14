import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { galleryImages, type GalleryCategory } from '../data/gallery';
import OptimizedImage from './OptimizedImage';

interface GalleryStripProps {
  /** Filter by category. 'All' shows any category. */
  category?: GalleryCategory;
  /**
   * Exact gallery image IDs to show (order preserved).
   * When set, category filtering and cross-category padding are skipped.
   */
  imageIds?: string[];
  /**
   * When set, only images whose gallery.city metadata matches this city.
   * Disables cross-category padding so metro photos are not implied as local projects.
   */
  city?: string;
  /** Max images to render. Defaults to 4. */
  limit?: number;
  /** Show the View Full Gallery link at the bottom */
  showLink?: boolean;
}

const STRIP_IMAGE_WIDTH = 400;
const STRIP_IMAGE_HEIGHT = 208;

export default function GalleryStrip({
  category = 'All',
  imageIds,
  city,
  limit = 4,
  showLink = true,
}: GalleryStripProps) {
  const byId = imageIds
    ? imageIds
        .map(id => galleryImages.find(img => img.id === id))
        .filter((img): img is (typeof galleryImages)[number] => Boolean(img))
        .slice(0, limit)
    : null;

  const cityNeedle = city?.replace(/,\s*CA$/i, '').trim().toLowerCase();
  const inCity = (img: (typeof galleryImages)[number]) => {
    if (!cityNeedle) return true;
    const tagged = img.city?.replace(/,\s*CA$/i, '').trim().toLowerCase();
    return tagged === cityNeedle;
  };

  const pool = (category === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === category)
  ).filter(inCity);

  const items = byId ?? pool.slice(0, limit);

  if (items.length === 0) return null;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((img, index) => (
          <div
            key={img.id}
            data-stagger-item
            className="group relative overflow-hidden bg-gray-100 transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(15,20,28,0.12)]"
            style={{ aspectRatio: `${STRIP_IMAGE_WIDTH} / ${STRIP_IMAGE_HEIGHT}` }}
          >
            <OptimizedImage
              src={img.src}
              alt={img.alt}
              width={STRIP_IMAGE_WIDTH}
              height={STRIP_IMAGE_HEIGHT}
              sizes="(max-width: 768px) 50vw, 25vw"
              priority={index < 2}
              className="h-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>

      {showLink && (
        <div className="mt-6 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm hover:text-gold-light transition-colors"
          >
            View Full Project Gallery <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </div>
  );
}
