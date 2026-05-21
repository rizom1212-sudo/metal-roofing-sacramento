import { ASSETS } from './assets';

export type GalleryCategory =
  | 'All'
  | 'Roof Replacement'
  | 'Roof Repairs'
  | 'Metal Roofing'
  | 'Inspections'
  | 'Exterior Work';

export const GALLERY_FILTER_CATEGORIES: GalleryCategory[] = [
  'All',
  'Roof Replacement',
  'Roof Repairs',
  'Metal Roofing',
  'Inspections',
  'Exterior Work',
];

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: Exclude<GalleryCategory, 'All'>;
  city?: string;
  tall?: boolean;
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
    id: 'flat-membrane-detail',
    src: ASSETS.gallery('Screenshot_2026-05-20_at_08.51.08.png'),
    alt: 'Flat roof membrane installation detail',
    caption: 'Flat roof installation detail work',
    category: 'Roof Replacement',
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
    id: 'a-frame-cabin-roof',
    src: ASSETS.gallery('Screenshot_2026-05-20_at_08.52.30.png'),
    alt: 'A-frame cabin roof replacement project',
    caption: 'Cabin roof replacement project',
    category: 'Metal Roofing',
    city: 'Sacramento, CA',
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

export function filterGalleryByCategory(
  category: GalleryCategory,
  images: GalleryImage[] = galleryImages,
): GalleryImage[] {
  if (category === 'All') return images;
  return images.filter(img => img.category === category);
}

export const homepageGalleryImages = galleryImages.slice(0, 6);
