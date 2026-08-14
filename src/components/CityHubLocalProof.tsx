import { Link } from 'react-router-dom';
import { reviewsForCity } from '../data/reviews';
import {
  filterGalleryByCity,
  galleryCityHubPath,
  galleryServicePath,
} from '../data/gallery';
import ReviewStrip from './ReviewStrip';

interface CityHubLocalProofProps {
  cityName: string;
  citySlug: string;
}

export default function CityHubLocalProof({ cityName, citySlug }: CityHubLocalProofProps) {
  const cityReviews = reviewsForCity(cityName);
  const cityProjects = filterGalleryByCity(cityName);

  if (cityReviews.length === 0 && cityProjects.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Local Proof</p>
        <h2 className="section-heading mb-3">Verified {cityName} Reviews &amp; Project Photos</h2>
        <p className="section-subheading max-w-3xl mb-8">
          Only reviews and gallery items whose repository metadata identifies {cityName} appear here. Captions match the recorded project type—we do not relabel photos as a different service.
        </p>

        {cityReviews.length > 0 && (
          <div className={cityProjects.length > 0 ? 'mb-10' : undefined}>
            <h3 className="font-bold text-headline text-base mb-4">Homeowner reviews from {cityName}</h3>
            <ReviewStrip items={cityReviews} count={cityReviews.length} variant="light" />
          </div>
        )}

        {cityProjects.length > 0 && (
          <div>
            <h3 className="font-bold text-headline text-base mb-4">Gallery photos tagged {cityName}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cityProjects.slice(0, 4).map(img => {
                const serviceHref = galleryServicePath(img.category);
                const cityHref = galleryCityHubPath(img.city);
                return (
                  <figure key={img.id} className="overflow-hidden bg-gray-100 border border-gray-100">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-44 object-cover"
                    />
                    <figcaption className="p-3">
                      <p className="text-headline text-sm font-semibold leading-snug mb-2">{img.caption}</p>
                      <p className="text-body text-xs leading-relaxed">
                        <Link to={serviceHref} className="text-gold font-semibold hover:text-gold-dark transition-colors">
                          {img.category}
                        </Link>
                        {cityHref && cityHref !== `/service-areas/${citySlug}` ? (
                          <>
                            {' · '}
                            <Link to={cityHref} className="text-gold font-semibold hover:text-gold-dark transition-colors">
                              {cityName}
                            </Link>
                          </>
                        ) : (
                          <> · {cityName}</>
                        )}
                      </p>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
            {cityProjects.length > 4 && (
              <p className="mt-4">
                <Link to="/gallery" className="text-gold font-semibold text-sm hover:text-gold-dark transition-colors">
                  View the full project gallery
                </Link>
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
