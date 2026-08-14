import { ASSETS } from './assets';

export type GalleryCategory =
  | 'All'
  | 'Roof Replacement'
  | 'Roof Repairs'
  | 'Metal Roofing'
  | 'Inspections'
  | 'Exterior Work';

export const GALLERY_FILTER_CATEGORIES: GalleryCategory[] = [
  'Metal Roofing',
];

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: Exclude<GalleryCategory, 'All'>;
  city?: string;
  tall?: boolean;
  impact?: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'suburban-shingle-roof',
    src: ASSETS.gallery('6998f81b9df4c166b8ac8255.jpg'),
    alt: 'Completed shingle roof on a Sacramento area home',
    caption: 'Completed shingle roof replacement',
    category: 'Roof Replacement',
    city: 'Sacramento, CA',
  },
  {
    id: 'hillside-residential-roof',
    src: ASSETS.gallery('masonry-roof-project-01.png'),
    alt: 'Completed residential roof on a hillside Sacramento area home',
    caption: 'Completed hillside roof replacement',
    category: 'Roof Replacement',
    city: 'Sacramento, CA',
    tall: true,
    impact: true,
  },
  {
    id: 'flat-roof-restoration',
    src: ASSETS.gallery('6998f81ba2a2c02b517b9648.jpg'),
    alt: 'Completed flat roof coating project',
    caption: 'Completed flat roof restoration',
    category: 'Roof Replacement',
    city: 'Sacramento, CA',
  },
  {
    id: 'brown-shingle-roof',
    src: ASSETS.gallery('Screenshot_2026-05-20_at_08.49.50.png'),
    alt: 'Completed brown shingle roof replacement',
    caption: 'Completed residential shingle roof',
    category: 'Roof Replacement',
    city: 'Sacramento, CA',
    tall: true,
  },
  {
    id: 'new-construction-metal-roof',
    src: ASSETS.gallery('masonry-roof-project-02.png'),
    alt: 'Metal roof installation on a new residential structure',
    caption: 'Residential metal roof installation',
    category: 'Metal Roofing',
    city: 'Sacramento, CA',
  },
  {
    id: 'roof-vent-detail',
    src: ASSETS.gallery('Screenshot_2026-05-20_at_08.50.18.png'),
    alt: 'Residential roof with vents and skylights',
    caption: 'Roof repair and ventilation detail work',
    category: 'Roof Repairs',
    city: 'Folsom, CA',
    tall: true,
  },
  {
    id: 'flat-membrane-wide',
    src: ASSETS.gallery('Screenshot_2026-05-20_at_08.50.53.png'),
    alt: 'Crew installing white flat roof membrane',
    caption: 'Flat roof membrane installation',
    category: 'Roof Replacement',
    city: 'Sacramento, CA',
  },
  {
    id: 'standing-seam-roof-detail',
    src: ASSETS.gallery('masonry-roof-project-03.png'),
    alt: 'Close view of standing seam metal roof panels',
    caption: 'Standing seam metal roofing detail',
    category: 'Metal Roofing',
    city: 'Sacramento, CA',
    tall: true,
    impact: true,
  },
  {
    id: 'flat-membrane-detail',
    src: ASSETS.gallery('Screenshot_2026-05-20_at_08.51.08.png'),
    alt: 'Flat roof membrane installation detail',
    caption: 'Flat roof installation detail work',
    category: 'Roof Replacement',
    city: 'Sacramento, CA',
    tall: true,
  },
  {
    id: 'two-story-repair-access',
    src: ASSETS.gallery('masonry-roof-project-04.png'),
    alt: 'Roofing crew accessing a two-story home for roof work',
    caption: 'Two-story roof repair access',
    category: 'Roof Repairs',
    city: 'Sacramento, CA',
    tall: true,
  },
  {
    id: 'tile-roof-front-elevation',
    src: ASSETS.gallery('Screenshot_2026-05-20_at_08.51.49.png'),
    alt: 'Completed tile roof on residential home',
    caption: 'Completed residential tile roof',
    category: 'Roof Replacement',
    city: 'Sacramento, CA',
  },
  {
    id: 'a-frame-metal-roof',
    src: ASSETS.gallery('Screenshot_2026-05-20_at_08.52.23.png'),
    alt: 'A-frame cabin with metal roof',
    caption: 'A-frame metal roof project',
    category: 'Metal Roofing',
    city: 'Sacramento, CA',
  },
  {
    id: 'shingle-roof-valley-detail',
    src: ASSETS.gallery('masonry-roof-project-05.png'),
    alt: 'Completed shingle roof with clean valley detail',
    caption: 'Finished shingle roof detail',
    category: 'Roof Replacement',
    city: 'Sacramento, CA',
  },
  {
    id: 'a-frame-cabin-roof',
    src: ASSETS.gallery('Screenshot_2026-05-20_at_08.52.30.png'),
    alt: 'A-frame cabin roof replacement project',
    caption: 'A-frame cabin metal roof project',
    category: 'Metal Roofing',
    city: 'Sacramento, CA',
    tall: true,
    impact: true,
  },
  {
    id: 'residential-gutter-install',
    src: ASSETS.gallery('masonry-roof-project-06.png'),
    alt: 'Crew installing gutter and exterior roofline components',
    caption: 'Exterior roofline and gutter work',
    category: 'Exterior Work',
    city: 'Sacramento, CA',
    tall: true,
  },
  {
    id: 'historic-home-exterior-roof-work',
    src: ASSETS.gallery('masonry-roof-project-07.png'),
    alt: 'Roofing crew working on a historic style residential home',
    caption: 'Residential roof and exterior work',
    category: 'Roof Repairs',
    city: 'Sacramento, CA',
  },
  {
    id: 'finished-metal-roof-elevation',
    src: ASSETS.gallery('masonry-roof-project-08.png'),
    alt: 'Completed dark metal roof on residential building',
    caption: 'Completed metal roof installation',
    category: 'Metal Roofing',
    city: 'Sacramento, CA',
    tall: true,
  },
  {
    id: 'turret-roof-detail',
    src: ASSETS.gallery('Screenshot_2026-05-20_at_08.52.43.png'),
    alt: 'Historic turret roof restoration work',
    caption: 'Historic roof restoration detail',
    category: 'Roof Replacement',
    city: 'Sacramento, CA',
  },
  {
    id: 'garage-roof-complete',
    src: ASSETS.gallery('Screenshot_2026-05-20_at_08.53.18.png'),
    alt: 'Completed garage roof replacement',
    caption: 'Completed garage roof replacement',
    category: 'Roof Replacement',
    city: 'Sacramento, CA',
    tall: true,
  },
];

export const GALLERY_SERVICE_PATHS: Record<Exclude<GalleryCategory, 'All'>, string> = {
  'Roof Replacement': '/metal-roof-replacement',
  'Roof Repairs': '/metal-roof-repair',
  'Metal Roofing': '/metal-roofing',
  Inspections: '/metal-roof-inspection',
  'Exterior Work': '/metal-roofing',
};

/** Public specialist gallery: metal-tagged photography only. */
export const publicGalleryImages = galleryImages.filter(img => img.category === 'Metal Roofing');

/** Hub path only when gallery.city metadata matches a known service-area slug. */
const GALLERY_CITY_HUB_SLUGS: Record<string, string> = {
  sacramento: 'sacramento',
  folsom: 'folsom',
};

export function galleryCityName(city?: string): string | undefined {
  if (!city) return undefined;
  return city.replace(/,\s*CA$/i, '').trim() || undefined;
}

export function galleryCityHubPath(city?: string): string | undefined {
  const name = galleryCityName(city)?.toLowerCase();
  if (!name) return undefined;
  const slug = GALLERY_CITY_HUB_SLUGS[name];
  return slug ? `/service-areas/${slug}` : undefined;
}

export function galleryServicePath(category: GalleryImage['category']): string {
  return GALLERY_SERVICE_PATHS[category];
}

export function normalizeGalleryCity(city?: string): string | undefined {
  return galleryCityName(city)?.toLowerCase();
}

export function filterGalleryByCity(
  cityName: string,
  images: GalleryImage[] = galleryImages,
): GalleryImage[] {
  const wanted = normalizeGalleryCity(cityName);
  if (!wanted) return [];
  return images.filter(img => normalizeGalleryCity(img.city) === wanted);
}

export function filterGalleryByCategory(
  category: GalleryCategory,
  images: GalleryImage[] = galleryImages,
): GalleryImage[] {
  if (category === 'All') return images;
  return images.filter(img => img.category === category);
}

export const homepageGalleryImages = publicGalleryImages;

/** Neutral heading for service-page gallery strips (no unverified city/service in the title). */
export const SERVICE_PAGE_GALLERY_HEADING = 'Project Gallery';
