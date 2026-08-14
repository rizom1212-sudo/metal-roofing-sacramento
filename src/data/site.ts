import { ASSETS } from './assets';
import { SITE_URL } from './domain';

/** Legal entity name (contracts, schema @type name, copyright). */
export const BUSINESS_ENTITY_NAME = 'PRC 13 Roofing Inc.';

/** Shorter public brand name used in UI and WebSite schema. */
export const BUSINESS_DISPLAY_NAME = 'PRC 13 Roofing';

/** One-sentence business description for entity / AI-readable summaries. */
export const BUSINESS_DESCRIPTION =
  'PRC 13 Roofing Inc. is a service-area roofing contractor based in Sacramento, California, serving homeowners and light commercial properties across the greater Sacramento region with roof repair, replacement, inspections, metal roofing, commercial roofing, gutters, and siding.';

/**
 * California contractor license number only.
 * Prefer LICENSE_* formatters below instead of hardcoding variants in UI.
 */
export const LICENSE_NUMBER = '1087153';

/** Preferred long license label: "Lic. No. 1087153" */
export const LICENSE_LABEL = `Lic. No. ${LICENSE_NUMBER}`;

/** Compact UI label: "Lic. #1087153" */
export const LICENSE_SHORT = `Lic. #${LICENSE_NUMBER}`;

/** Trust-line with insured status (Contact forms, meta, etc.). */
export const LICENSE_TEXT = `${LICENSE_LABEL} · Fully Licensed & Insured`;

/** Shorter insured line without "Fully". */
export const LICENSE_INSURED_LINE = `${LICENSE_LABEL} · Licensed & Insured`;

/** Hero / FAQ style: "California Licensed Contractor (#1087153)" */
export const LICENSE_CONTRACTOR_LINE = `California Licensed Contractor (#${LICENSE_NUMBER})`;

/** Verified in existing site copy and schema language. */
export const IS_INSURED = true;

/**
 * Google Business Profile rating constants.
 * Keep these synced manually with the live Google Business Profile.
 * Do not invent or auto-fetch values.
 */
export const GOOGLE_RATING_VALUE = 5;
export const GOOGLE_REVIEW_COUNT = 3;

/**
 * Canonical Google Business Profile / Maps URL (reviews + place).
 * Tracking/locale query params stripped; CID preserved.
 */
export const GOOGLE_BUSINESS_PROFILE_URL =
  'https://www.google.com/maps/place/prc13roofing+inc/@38.7381043,-121.3688315,10z/data=!4m15!1m8!3m7!1s0x2a17cd54bcebe9af:0xc15db07780ea27a!2sprc13roofing+inc!8m2!3d38.7381043!4d-121.3688315!10e1!16s%2Fg%2F11nr2376pr!3m5!1s0x2a17cd54bcebe9af:0xc15db07780ea27a!8m2!3d38.7381043!4d-121.3688315!16s%2Fg%2F11nr2376pr?hl=en&entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D';

/** @deprecated Use GOOGLE_BUSINESS_PROFILE_URL — alias kept for existing imports. */
export const GOOGLE_REVIEWS_URL = GOOGLE_BUSINESS_PROFILE_URL;

/** Maps embed used on the homepage (same place / CID as GOOGLE_BUSINESS_PROFILE_URL). */
export const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d398350.8250564826!2d-121.3688315!3d38.73810434999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a17cd54bcebe9af%3A0xc15db07780ea27a!2sprc13roofing%20inc!5e0!3m2!1sen!2sus!4v1786694228027!5m2!1sen!2sus';

export const FACEBOOK_URL = 'https://www.facebook.com/prc13roofinginc/';
export const INSTAGRAM_URL = 'https://www.instagram.com/prc13roofing_/';
export const BBB_URL =
  'https://www.bbb.org/us/ca/sacramento/profile/roofing-contractors/prc-13-roofing-1156-90078382';
export const YELP_URL = 'https://www.yelp.com/biz/prc-13-roofing-sacramento';

export const SAME_AS_URLS = [
  GOOGLE_BUSINESS_PROFILE_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  BBB_URL,
  YELP_URL,
] as const;

/** No public email found in the repository — leave unset intentionally. */
export const PUBLIC_EMAIL: string | null = null;

export const BUSINESS_HOURS = [
  { day: 'Monday', opens: '07:00', closes: '19:00' },
  { day: 'Tuesday', opens: '07:00', closes: '19:00' },
  { day: 'Wednesday', opens: '07:00', closes: '19:00' },
  { day: 'Thursday', opens: '07:00', closes: '19:00' },
  { day: 'Friday', opens: '07:00', closes: '19:00' },
] as const;

/** Days closed (for llms.txt / Contact copy). Not in BUSINESS_HOURS. */
export const BUSINESS_DAYS_CLOSED = ['Saturday', 'Sunday'] as const;

/**
 * Service-area business: geo associates the GBP/service region;
 * there is no public storefront street address on this site.
 */
export const IS_SERVICE_AREA_BUSINESS = true;
export const HAS_PUBLIC_STOREFRONT_ADDRESS = false;
export const PUBLIC_STREET_ADDRESS: string | null = null;

/** GBP / schema GeoCoordinates (Sacramento-area pin). */
export const GEO_LATITUDE = 38.6589713;
export const GEO_LONGITUDE = -121.309352;

/** Primary brand logo used in header/footer (gold on dark). */
export const LOGO_SRC = '/assets/brand/prc13-logo-gold.png';
export const LOGO_ALT = BUSINESS_DISPLAY_NAME;

/** Optional light/SVG logo asset from ASSETS (not used in current chrome). */
export const LOGO_LIGHT_SRC = ASSETS.brand.logo;

/** On-site PRC 13 work photo used on About. */
export const ABOUT_PHOTO_SRC = ASSETS.brand.ownerPhoto;
export const ABOUT_PHOTO_ALT = 'PRC 13 Roofing team member on a Sacramento roofing project';

export const PHONE_DISPLAY = '916-761-3866';
export const PHONE_TEL = '9167613866';

/** E.164-style telephone for schema.org */
export const PHONE_E164 = `+1-${PHONE_TEL.slice(0, 3)}-${PHONE_TEL.slice(3, 6)}-${PHONE_TEL.slice(6)}`;

export const PHONE_SMS = `sms:${PHONE_TEL}?body=${encodeURIComponent('Hi PRC 13, I need help with my roof.')}`;

export { SITE_URL };
