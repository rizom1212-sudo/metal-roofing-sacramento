import { Link } from 'react-router-dom';
import OptimizedImage from '../OptimizedImage';
import { blogSummaries } from '../../data/blogSummaries';
import { HOME_IMAGES } from './homeImages';

const FEATURED_SLUG = 'metal-roofing-cost-sacramento';
const SECONDARY_SLUGS = [
  'standing-seam-metal-roofing-sacramento',
  'metal-roofing-vs-shingles-sacramento',
  'metal-roof-installation-process-sacramento',
  'metal-roof-over-shingles-sacramento',
] as const;

export default function HomeEditorialGuides() {
  const featured = blogSummaries.find(post => post.slug === FEATURED_SLUG);
  const secondary = SECONDARY_SLUGS.map(slug => blogSummaries.find(post => post.slug === slug)).filter(
    (post): post is (typeof blogSummaries)[number] => Boolean(post),
  );

  if (!featured) return null;

  return (
    <section className="bg-[color:var(--home-paper-2)] py-[var(--home-section)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 md:mb-7">
          <div className="max-w-[34rem]">
            <p className="home-kicker">Field notes</p>
            <h2 className="home-display">Metal roofing field guide</h2>
          </div>
          <Link to="/blog" className="home-cta shrink-0 min-h-11">
            View all articles{' '}
            <span className="home-cta-arrow" aria-hidden>
              →
            </span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <Link to={`/blog/${featured.slug}`} className="lg:col-span-7 group">
            <div className="relative min-h-[14rem] md:min-h-[20rem] mb-4 bg-[#ebe6dd] overflow-hidden home-zoom">
              <div className="absolute inset-0 home-fill">
                <OptimizedImage
                  src={featured.coverImage || HOME_IMAGES.fieldGuide.src}
                  alt=""
                  width={HOME_IMAGES.fieldGuide.width}
                  height={HOME_IMAGES.fieldGuide.height}
                  className="h-full"
                />
              </div>
            </div>
            <p className="home-spec mb-3">Featured</p>
            <h3 className="text-[1.7rem] md:text-[2.25rem] font-bold tracking-tight text-headline mb-4 leading-[1.08] max-w-[18ch] group-hover:text-gold-dark transition-colors">
              {featured.title}
            </h3>
            <span className="home-cta">
              Read the cost guide <span className="home-cta-arrow" aria-hidden>→</span>
            </span>
          </Link>

          <div className="lg:col-span-5 lg:pt-2">
            <p className="home-spec mb-1">Also in the guide</p>
            {secondary.map((post, index) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group grid grid-cols-[2.25rem_1fr] gap-3 border-t border-black/15 py-4 first:border-t"
              >
                <span className="home-spec pt-1">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="font-bold text-headline tracking-tight leading-snug group-hover:text-gold-dark transition-colors">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
