import { ASSETS } from './assets';

export const BUSINESS_ENTITY_NAME = 'PRC 13 Roofing Inc.';
export const BUSINESS_DISPLAY_NAME = 'PRC 13 Roofing';
export const LICENSE_TEXT = 'Lic. No. 1087153 · Fully Licensed & Insured';
export const GOOGLE_RATING_VALUE = '5.0';
export const GOOGLE_REVIEW_COUNT = 81;

/** Google Business Profile opens reviews on Maps in a new tab. */
export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/place/PRC+13+Roofing+Inc./data=!4m2!3m1!1s0x0:0x45dcf5879ee4c590?sa=X&ved=1t:2428&ictx=111&cshid=1779356065204591';

export const FACEBOOK_URL = 'https://www.facebook.com/prc13roofinginc/?locale=nn_NO';
export const INSTAGRAM_URL = 'https://www.instagram.com/prc13roofing_/';
export const BBB_URL =
  'https://www.bbb.org/us/ca/sacramento/profile/roofing-contractors/prc-13-roofing-1156-90078382';
export const YELP_URL = 'https://www.yelp.com/biz/prc-13-roofing-sacramento';

export const SAME_AS_URLS = [GOOGLE_REVIEWS_URL, FACEBOOK_URL, INSTAGRAM_URL, BBB_URL, YELP_URL];

export const BUSINESS_HOURS = [
  { day: 'Monday', opens: '07:00', closes: '19:00' },
  { day: 'Tuesday', opens: '07:00', closes: '19:00' },
  { day: 'Wednesday', opens: '07:00', closes: '19:00' },
  { day: 'Thursday', opens: '07:00', closes: '19:00' },
  { day: 'Friday', opens: '07:00', closes: '19:00' },
] as const;

/** On-site PRC 13 work photo used on About. */
export const ABOUT_PHOTO_SRC = ASSETS.brand.ownerPhoto;
export const ABOUT_PHOTO_ALT = 'PRC 13 Roofing team member on a Sacramento roofing project';

export const PHONE_DISPLAY = '916-761-3866';
export const PHONE_TEL = '9167613866';
export const PHONE_SMS = `sms:${PHONE_TEL}?body=${encodeURIComponent('Hi PRC 13, I need help with my roof.')}`;
