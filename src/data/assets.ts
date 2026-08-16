/**
 * Canonical public asset paths (kebab-case, under /assets/).
 * Legacy folders in /public/ remain for backwards compatibility until removed.
 */
export const ASSETS = {
  brand: {
    logo: '/assets/prc13-logo-white.svg',
    // Specialist wordmark lives in chrome via BrandMark; SVG is used for schema.
    hero: '/assets/metal-roof-replacement/739958db-594f-4c28-9e5d-06a076554fe7.webp',
    /** Optional generated variant; keep undefined until the file exists. */
    heroWebp: undefined,
    ownerPhoto: '/assets/brand/about-roofing-team-turret.png',
    recommendationsPhoto: '/assets/brand/roofing-recommendations-team.jpg',
    /** Optional generated variant; keep undefined until the file exists. */
    ownerPhotoWebp: undefined,
    favicon: '/assets/brand/favicon.svg',
  },
  beforeAfter: (file: string) => `/assets/before-after/${file}`,
  gallery: (file: string) => `/assets/gallery/${file}`,
  blog: (file: string) => `/assets/blog/${file}`,
  emergencyRepair: (file: string) => `/assets/emergency-repair/${file}`,
  roofRepair: (file: string) => `/assets/roof-repair/${file}`,
  metalRoofing: (file: string) => `/assets/metal-roofing/${file}`,
  roofReplacement: (file: string) => `/assets/roof-replacement/${file}`,
  roofInspection: (file: string) => `/assets/roof-inspection/${file}`,
  guttersSiding: (file: string) => `/assets/gutters-siding/${file}`,
  commercialRoofing: (file: string) => `/assets/commercial-roofing/${file}`,
} as const;

/** Default OG / LCP image */
export const DEFAULT_OG_IMAGE: string = ASSETS.brand.hero;
