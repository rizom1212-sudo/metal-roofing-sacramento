import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, X, ChevronLeft, ChevronRight, Shield, CheckCircle } from 'lucide-react';
import BeforeAfter from '../components/BeforeAfter';
import JsonLd from '../components/JsonLd';
import { galleryImages, type GalleryImage } from '../data/gallery';
import { PRIMARY_CTA } from '../data/cta';
import { PHONE_DISPLAY, PHONE_TEL } from '../data/site';

const featuredProjectImages = [
  {
    src: '/assets/featured-project/sacramento-roof-replacement-showcase-01.png',
    alt: 'Sacramento home roof tear off before replacement',
  },
  {
    src: '/assets/featured-project/sacramento-roof-replacement-showcase-02.png',
    alt: 'Sacramento roof replacement in progress with materials staged',
  },
  {
    src: '/assets/featured-project/sacramento-roof-replacement-showcase-03.png',
    alt: 'Residential roof replacement installation in progress',
  },
  {
    src: '/assets/featured-project/sacramento-roof-replacement-showcase-04.png',
    alt: 'Completed Sacramento residential roof replacement',
  },
];

const featuredProjectStats = [
  'Full Tear-Off',
  'Architectural Shingles',
  'Residential Roof Replacement',
  'Sacramento, CA',
];

const metalFeaturedProjectImages = [
  {
    src: '/assets/featured-project/standing-seam-metal-roof-01.png',
    alt: 'Close view of standing seam metal roof panels on a Sacramento new construction home',
  },
  {
    src: '/assets/featured-project/standing-seam-metal-roof-02.png',
    alt: 'New construction Sacramento home with standing seam metal roof installation',
  },
  {
    src: '/assets/featured-project/standing-seam-metal-roof-03.png',
    alt: 'Standing seam metal roofing installed above James Hardie siding',
  },
  {
    src: '/assets/featured-project/standing-seam-metal-roof-04.png',
    alt: 'James Hardie siding installation on new construction Sacramento residence',
  },
  {
    src: '/assets/featured-project/standing-seam-metal-roof-05.png',
    alt: 'New construction home exterior with standing seam metal roof and siding work',
  },
  {
    src: '/assets/featured-project/standing-seam-metal-roof-06.png',
    alt: 'Garage elevation during James Hardie siding installation on Sacramento project',
  },
  {
    src: '/assets/featured-project/standing-seam-metal-roof-07.png',
    alt: 'Completed James Hardie siding on new construction Sacramento home',
  },
];

const metalFeaturedProjectStats = [
  'Standing Seam Metal Roofing',
  'James Hardie Siding',
  'Residential Roofing',
  'Sacramento, CA',
  'New Construction',
];

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];
  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <div
      className="fixed inset-x-0 bottom-0 top-[var(--prc13-header-offset,126px)] z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Project image viewer"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-charcoal shadow-[0_10px_28px_rgba(0,0,0,0.28)] transition-colors hover:bg-gold hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      {hasPrev && (
        <button
          type="button"
          onClick={e => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors z-10 bg-black/30 hover:bg-black/50 rounded-full p-2"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {hasNext && (
        <button
          type="button"
          onClick={e => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors z-10 bg-black/30 hover:bg-black/50 rounded-full p-2"
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>
      )}

      <div
        className="flex w-full max-w-5xl flex-col items-center gap-3"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-h-[calc(100vh-var(--prc13-header-offset,126px)-5rem)] w-full object-contain rounded-brand"
        />
        <p className="text-gray-500 text-xs">
          {index + 1} / {images.length} · Use arrow keys to navigate
        </p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [metalFeaturedIndex, setMetalFeaturedIndex] = useState(0);
  const mainGalleryImages = galleryImages.slice(0, -1);
  const centeredGalleryImages = galleryImages.slice(-1);
  const featuredImage = featuredProjectImages[featuredIndex];
  const metalFeaturedImage = metalFeaturedProjectImages[metalFeaturedIndex];

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(
    () => setLightboxIndex(i => (i !== null && i > 0 ? i - 1 : i)),
    [],
  );
  const goNext = useCallback(
    () =>
      setLightboxIndex(i =>
        i !== null && i < galleryImages.length - 1 ? i + 1 : i,
      ),
    [],
  );
  const showPreviousFeaturedImage = useCallback(
    () => setFeaturedIndex(i => (i === 0 ? featuredProjectImages.length - 1 : i - 1)),
    [],
  );
  const showNextFeaturedImage = useCallback(
    () => setFeaturedIndex(i => (i === featuredProjectImages.length - 1 ? 0 : i + 1)),
    [],
  );
  const showPreviousMetalFeaturedImage = useCallback(
    () => setMetalFeaturedIndex(i => (i === 0 ? metalFeaturedProjectImages.length - 1 : i - 1)),
    [],
  );
  const showNextMetalFeaturedImage = useCallback(
    () => setMetalFeaturedIndex(i => (i === metalFeaturedProjectImages.length - 1 ? 0 : i + 1)),
    [],
  );

  return (
    <>
      <JsonLd pageName="Project Gallery" schemaType="WebPage" />

      {/* BEFORE / AFTER */}
      <section className="bg-cream py-12 md:py-14 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-7">
          <BeforeAfter limit={3} />
        </div>
      </section>

      {/* FEATURED PROJECT SHOWCASE */}
      <section className="bg-[#F3F1EE] py-12 md:py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-7">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="relative overflow-hidden rounded-brand bg-white shadow-[0_20px_54px_rgba(15,20,28,0.16)] ring-1 ring-black/5">
                <div className="relative bg-charcoal-dark/5">
                  <img
                    src={featuredImage.src}
                    alt={featuredImage.alt}
                    className="h-[300px] w-full object-contain sm:h-[420px] lg:h-[520px]"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    onClick={showPreviousFeaturedImage}
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal-dark/85 text-white shadow-[0_8px_24px_rgba(0,0,0,0.24)] transition-colors hover:bg-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    aria-label="Show previous featured project photo"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={showNextFeaturedImage}
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal-dark/85 text-white shadow-[0_8px_24px_rgba(0,0,0,0.24)] transition-colors hover:bg-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    aria-label="Show next featured project photo"
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>
                <div className="flex items-center justify-center gap-2 border-t border-gray-100 bg-white px-4 py-3">
                  {featuredProjectImages.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setFeaturedIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        featuredIndex === index ? 'w-8 bg-gold' : 'w-2.5 bg-gray-300 hover:bg-gold/60'
                      }`}
                      aria-label={`Show featured project photo ${index + 1}`}
                      aria-current={featuredIndex === index}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Featured Project</p>
              <h2 className="text-3xl md:text-4xl font-bold text-headline leading-tight mb-4">
                Featured Sacramento Roof Replacement
              </h2>
              <p className="text-body text-base leading-relaxed mb-6">
                See how PRC 13 Roofing completed a full residential roof replacement from tear off to final installation with clean workmanship and durable roofing materials.
              </p>
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                {featuredProjectStats.map(stat => (
                  <span
                    key={stat}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-white px-3.5 py-2 text-xs font-semibold text-headline shadow-sm"
                  >
                    <CheckCircle size={13} className="text-gold" />
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED METAL PROJECT SHOWCASE */}
      <section className="bg-[#F3F1EE] py-12 md:py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-7">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="relative overflow-hidden rounded-brand bg-white shadow-[0_20px_54px_rgba(15,20,28,0.16)] ring-1 ring-black/5">
                <div className="relative bg-charcoal-dark/5">
                  <img
                    src={metalFeaturedImage.src}
                    alt={metalFeaturedImage.alt}
                    className="h-[300px] w-full object-contain sm:h-[420px] lg:h-[520px]"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    onClick={showPreviousMetalFeaturedImage}
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal-dark/85 text-white shadow-[0_8px_24px_rgba(0,0,0,0.24)] transition-colors hover:bg-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    aria-label="Show previous standing seam metal roof project photo"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={showNextMetalFeaturedImage}
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal-dark/85 text-white shadow-[0_8px_24px_rgba(0,0,0,0.24)] transition-colors hover:bg-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    aria-label="Show next standing seam metal roof project photo"
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>
                <div className="flex items-center justify-center gap-2 border-t border-gray-100 bg-white px-4 py-3">
                  {metalFeaturedProjectImages.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setMetalFeaturedIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        metalFeaturedIndex === index ? 'w-8 bg-gold' : 'w-2.5 bg-gray-300 hover:bg-gold/60'
                      }`}
                      aria-label={`Show standing seam metal roof project photo ${index + 1}`}
                      aria-current={metalFeaturedIndex === index}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Featured Project</p>
              <h2 className="text-3xl md:text-4xl font-bold text-headline leading-tight mb-4">
                Standing Seam Metal Roof Installation – Sacramento, CA
              </h2>
              <p className="text-body text-base leading-relaxed mb-6">
                New construction residential project featuring a premium standing seam metal roofing system and James Hardie siding installation. This project highlights modern design, weather protection, energy efficiency, and long-term durability.
              </p>
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                {metalFeaturedProjectStats.map(stat => (
                  <span
                    key={stat}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-white px-3.5 py-2 text-xs font-semibold text-headline shadow-sm"
                  >
                    <CheckCircle size={13} className="text-gold" />
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="bg-[#F7F6F4] py-12 md:py-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-7">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-headline leading-tight mb-3">
              Roofing Projects Across Sacramento
            </h1>
            <p className="text-body text-base leading-relaxed max-w-2xl mx-auto mb-6">
              Recent roof replacements, repairs, and restoration projects completed by the PRC 13 team.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                'Licensed & Insured',
                'Residential Roofing Specialists',
                'Roof Replacements & Repairs',
                'Financing Available',
              ].map(item => (
                <span key={item} className="flex items-center gap-1.5 text-sm text-body">
                  <CheckCircle size={13} className="text-gold flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="[column-count:1] sm:[column-count:2] lg:[column-count:3]" style={{ columnGap: '8px' }}>
            {mainGalleryImages.map((img, idx) => (
              <button
                key={img.id}
                type="button"
                className="break-inside-avoid mb-2 w-full group overflow-hidden bg-gray-200 cursor-pointer rounded-brand shadow-sm transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(15,20,28,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                onClick={() => openLightbox(idx)}
                aria-label={`Open project photo ${idx + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full object-cover block transition-transform duration-500 motion-reduce:transition-none motion-reduce:group-hover:scale-100 group-hover:scale-[1.02] ${
                    img.impact ? 'h-64 md:h-[320px]' : 'h-44 md:h-52'
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="mx-auto mt-2 grid w-full max-w-md gap-2">
            {centeredGalleryImages.map((img, idx) => {
              const imageIndex = mainGalleryImages.length + idx;

              return (
                <button
                  key={img.id}
                  type="button"
                  className="w-full group overflow-hidden bg-gray-200 cursor-pointer rounded-brand shadow-sm transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(15,20,28,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  onClick={() => openLightbox(imageIndex)}
                  aria-label={`Open project photo ${imageIndex + 1}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className={`w-full object-cover block transition-transform duration-500 motion-reduce:transition-none motion-reduce:group-hover:scale-100 group-hover:scale-[1.02] ${
                      img.impact ? 'h-64 md:h-[320px]' : 'h-44 md:h-52'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-charcoal-dark py-16 mobile-section-bottom">
        <div className="max-w-4xl mx-auto px-5 sm:px-7 text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Get Started</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Roofing Help?</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            From roof repairs to full replacements, our team is ready to help. Most Sacramento homeowners are scheduled within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 btn-gold py-4 px-8 text-base font-semibold"
            >
              <Phone size={18} /> Call {PHONE_DISPLAY}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 text-base hover:border-gold hover:text-gold transition-colors rounded-brand"
            >
              {PRIMARY_CTA} <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-gray-600 text-xs">
            <Shield size={12} className="text-gold" />
            Lic. No. 1087153 · Licensed & Insured · Sacramento, CA
          </div>
        </div>
      </section>

      {lightboxIndex !== null && galleryImages.length > 0 && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  );
}
