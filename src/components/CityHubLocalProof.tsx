import { Link } from 'react-router-dom';
import { reviewsForCity } from '../data/reviews';
import { filterGalleryByCity } from '../data/gallery';
import ReviewStrip from './ReviewStrip';

interface CityHubLocalProofProps {
  cityName: string;
}

export default function CityHubLocalProof({ cityName }: CityHubLocalProofProps) {
  const cityReviews = reviewsForCity(cityName);
  const cityProjects = filterGalleryByCity(cityName);

  if (cityReviews.length === 0 && cityProjects.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Local Proof</p>
        <h2 className="section-heading mb-3">{cityName} Reviews &amp; Project Photos</h2>
        <p className="section-subheading max-w-3xl mb-8">
          Homeowner reviews list a matching city when provided. Project photos here are metal roofing work tagged to this city. Broader PRC 13 Roofing Inc. shingle, tile, and membrane jobs are not shown as metal proof.
        </p>

        {cityReviews.length > 0 && (
          <div className={cityProjects.length > 0 ? 'mb-10' : undefined}>
            <h3 className="font-bold text-headline text-base mb-4">Homeowner reviews from {cityName}</h3>
            <ReviewStrip items={cityReviews} count={cityReviews.length} variant="light" />
          </div>
        )}

        {cityProjects.length > 0 && (
          <div>
            <h3 className="font-bold text-headline text-base mb-4">Metal roofing project photos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cityProjects.slice(0, 4).map(img => (
                <figure key={img.id} className="overflow-hidden bg-gray-100 border border-gray-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={400}
                    height={176}
                    className="w-full h-44 object-cover"
                  />
                  <figcaption className="p-3">
                    <p className="text-headline text-sm font-semibold leading-snug">{img.caption}</p>
                  </figcaption>
                </figure>
              ))}
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
