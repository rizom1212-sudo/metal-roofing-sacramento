import { Link } from 'react-router-dom';
import OptimizedImage from '../OptimizedImage';
import { HOME_IMAGES } from './homeImages';

export default function HomeAudienceSplit() {
  return (
    <section className="bg-charcoal-dark">
      <div className="grid lg:grid-cols-2">
        <Link
          to="/residential-metal-roofing"
          className="group relative min-h-[16rem] md:min-h-[20rem] overflow-hidden"
        >
          <div className="absolute inset-0 home-fill home-zoom">
            <OptimizedImage
              src={HOME_IMAGES.residentialWork.src}
              alt={HOME_IMAGES.residentialWork.alt}
              width={HOME_IMAGES.residentialWork.width}
              height={HOME_IMAGES.residentialWork.height}
                className="h-full object-[center_18%]"
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(8,12,18,0.96) 0%, rgba(8,12,18,0.62) 42%, rgba(8,12,18,0.28) 100%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 p-7 md:p-10 text-white">
            <p className="home-spec home-spec-on-dark mb-2">Homes</p>
            <h2 className="text-[1.85rem] md:text-[2.15rem] font-bold tracking-tight text-[#f6f1e8] mb-3 max-w-[14ch]">
              Residential Metal Roofing
            </h2>
            <p className="text-[#e8e4db] text-sm max-w-md mb-4 leading-relaxed">
              Metal roofs for houses: replacement, new construction, standing seam, and options
              based on the home&apos;s design and project goals.
            </p>
            <span className="home-cta home-cta-on-dark">
              Explore Residential Metal Roofing{' '}
              <span className="home-cta-arrow" aria-hidden>
                →
              </span>
            </span>
          </div>
        </Link>

        <Link
          to="/commercial-metal-roofing"
          className="group relative min-h-[16rem] md:min-h-[20rem] overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10 bg-[#10151c]"
        >
          <div className="home-commercial-field" aria-hidden />
          <div className="relative h-full min-h-[16rem] md:min-h-[20rem] p-7 md:p-10 flex flex-col justify-end text-white">
            <p className="home-spec home-spec-on-dark mb-2">Buildings</p>
            <h2 className="text-[1.85rem] md:text-[2.15rem] font-bold tracking-tight text-[#f6f1e8] mb-3 max-w-[14ch]">
              Commercial Metal Roofing
            </h2>
            <p className="text-[#e8e4db] text-sm max-w-md mb-4 leading-relaxed">
              Commercial metal installation, reroofing, repair, standing seam, and inspection for
              buildings where a metal panel system is the right covering.
            </p>
            <span className="home-cta home-cta-on-dark">
              Explore Commercial Metal Roofing{' '}
              <span className="home-cta-arrow" aria-hidden>
                →
              </span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
