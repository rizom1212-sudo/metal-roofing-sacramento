import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME } from '../data/site';

/**
 * Client-side not-found UI. Direct requests for unknown URLs rely on
 * Vercel serving public/404.html with HTTP 404 (no SPA catch-all rewrite).
 */
export default function NotFound() {
  useEffect(() => {
    document.title = `Page Not Found | ${BRAND_NAME}`;

    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, follow');
  }, []);

  return (
    <section className="bg-cream py-20 text-center">
      <div className="max-w-xl mx-auto px-5">
        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-headline mb-4">Page not found</h1>
        <p className="text-body text-sm leading-relaxed mb-8">
          That URL is not a published {BRAND_NAME} page. Check the address or continue from one of the links below.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="inline-flex items-center justify-center btn-gold px-6 py-3 text-sm font-semibold">
            Back to home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border-2 border-charcoal text-charcoal font-semibold px-6 py-3 text-sm hover:bg-charcoal hover:text-white transition-colors"
          >
            Contact us
          </Link>
          <Link
            to="/metal-roofing"
            className="inline-flex items-center justify-center border-2 border-charcoal text-charcoal font-semibold px-6 py-3 text-sm hover:bg-charcoal hover:text-white transition-colors"
          >
            Metal roofing
          </Link>
        </div>
      </div>
    </section>
  );
}
