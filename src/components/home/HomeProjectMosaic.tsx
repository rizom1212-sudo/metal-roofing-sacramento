import { Link } from 'react-router-dom';
import OptimizedImage from '../OptimizedImage';
import { HOME_IMAGES } from './homeImages';

export default function HomeProjectMosaic() {
  return (
    <section className="bg-[color:var(--home-paper)] py-[var(--home-section)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8 md:mb-10">
          <div className="max-w-[34rem]">
            <p className="home-kicker">Our work</p>
            <h2 className="home-display mb-0">Recent metal roofing projects</h2>
          </div>
          <Link to="/gallery" className="home-cta shrink-0 min-h-11">
            View Metal Roofing Projects{' '}
            <span className="home-cta-arrow" aria-hidden>
              →
            </span>
          </Link>
        </div>

        <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 lg:pt-2">
            <p className="home-spec mb-3">Featured project</p>
            <h3 className="text-[1.65rem] md:text-[1.9rem] font-bold tracking-tight text-headline leading-[1.1] mb-6 max-w-[14ch]">
              Standing Seam Residential Roof
            </h3>
            <dl className="border-t border-black/15 max-w-[20rem]">
              <div className="py-4 border-b border-black/10">
                <dt className="home-spec mb-1">System</dt>
                <dd className="font-semibold text-headline tracking-tight">Standing Seam</dd>
              </div>
              <div className="py-4 border-b border-black/10">
                <dt className="home-spec mb-1">Project</dt>
                <dd className="font-semibold text-headline tracking-tight">Residential Metal Roof</dd>
              </div>
            </dl>
          </div>

          <figure className="relative lg:col-span-8 min-h-[16rem] md:min-h-[26rem] overflow-hidden bg-charcoal-dark home-zoom">
            <div className="absolute inset-0 home-fill">
              <OptimizedImage
                src={HOME_IMAGES.projectFeatured.src}
                alt={HOME_IMAGES.projectFeatured.alt}
                width={HOME_IMAGES.projectFeatured.width}
                height={HOME_IMAGES.projectFeatured.height}
                className="h-full"
              />
            </div>
          </figure>
        </article>
      </div>
    </section>
  );
}
