import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, X, ChevronLeft, ChevronRight, Shield, CheckCircle } from 'lucide-react';
import BeforeAfter from '../components/BeforeAfter';
import JsonLd from '../components/JsonLd';
import { galleryImages, type GalleryImage } from '../data/gallery';
import { PRIMARY_CTA } from '../data/cta';
import { PHONE_DISPLAY, PHONE_TEL } from '../data/site';

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
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Project image viewer"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Close"
      >
        <X size={26} />
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
        className="max-w-4xl w-full flex flex-col items-center gap-3"
        onClick={e => e.stopPropagation()}
      >
        <img src={img.src} alt={img.alt} className="max-h-[72vh] w-full object-contain rounded-brand" />
        <p className="text-gray-500 text-xs">
          {index + 1} / {images.length} · Use arrow keys to navigate
        </p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const mainGalleryImages = galleryImages.slice(0, -2);
  const centeredGalleryImages = galleryImages.slice(-2);

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

  return (
    <>
      <JsonLd pageName="Project Gallery" schemaType="WebPage" />

      {/* BEFORE / AFTER */}
      <section className="bg-cream py-12 md:py-14 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-7">
          <BeforeAfter limit={3} />
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

          <div className="[column-count:1] sm:[column-count:2] lg:[column-count:3]" style={{ columnGap: '12px' }}>
            {mainGalleryImages.map((img, idx) => (
              <button
                key={img.id}
                type="button"
                className="break-inside-avoid mb-3 w-full group overflow-hidden bg-gray-200 cursor-pointer rounded-brand shadow-sm transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(15,20,28,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                onClick={() => openLightbox(idx)}
                aria-label={`Open project photo ${idx + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full object-cover block transition-transform duration-500 motion-reduce:transition-none motion-reduce:group-hover:scale-100 group-hover:scale-[1.02] ${
                    img.tall ? 'h-72 md:h-[340px]' : 'h-52 md:h-60'
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="mt-0 grid gap-3 sm:grid-cols-2 lg:mx-auto lg:w-2/3">
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
                      img.tall ? 'h-72 md:h-[340px]' : 'h-52 md:h-60'
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
