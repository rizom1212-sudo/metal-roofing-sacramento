import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { galleryImages, type GalleryCategory } from '../data/gallery';

interface GalleryStripProps {
  /** Filter by category. 'All' shows any category. */
  category?: GalleryCategory;
  /** Max images to render. Defaults to 4. */
  limit?: number;
  /** Show the View Full Gallery link at the bottom */
  showLink?: boolean;
}

export default function GalleryStrip({ category = 'All', limit = 4, showLink = true }: GalleryStripProps) {
  const pool = category === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === category);

  // pad with fallback from other categories if not enough in this category
  const extra = pool.length < limit
    ? galleryImages.filter(img => img.category !== category).slice(0, limit - pool.length)
    : [];
  const items = [...pool, ...extra].slice(0, limit);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map(img => (
          <div
            key={img.id}
            data-stagger-item
            className="group relative overflow-hidden bg-gray-100 transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(15,20,28,0.12)]"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-44 md:h-52 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
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
