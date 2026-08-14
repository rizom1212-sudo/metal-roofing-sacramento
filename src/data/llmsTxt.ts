/**
 * Builds public/llms.txt from canonical entity + service + area data.
 * Keep this file factual; do not invent offerings.
 */
import {
  BBB_URL,
  BUSINESS_DAYS_CLOSED,
  BUSINESS_DESCRIPTION,
  BUSINESS_ENTITY_NAME,
  BUSINESS_HOURS,
  FACEBOOK_URL,
  GOOGLE_BUSINESS_PROFILE_URL,
  GOOGLE_RATING_VALUE,
  GOOGLE_REVIEW_COUNT,
  INSTAGRAM_URL,
  IS_SERVICE_AREA_BUSINESS,
  LICENSE_LABEL,
  LICENSE_TEXT,
  PHONE_DISPLAY,
  YELP_URL,
} from './site';
import { absoluteUrl, SITE_URL } from './domain';
import { getOfferedServices, SERVICES_NOT_OFFERED } from './services';
import { serviceAreaNames } from './serviceAreas';

function formatHourLabel(opens: string, closes: string): string {
  const toDisplay = (value: string) => {
    const [h, m] = value.split(':').map(Number);
    const suffix = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    return m === 0 ? `${hour12} ${suffix}` : `${hour12}:${String(m).padStart(2, '0')} ${suffix}`;
  };
  return `${toDisplay(opens)}-${toDisplay(closes)}`;
}

export function buildLlmsTxt(): string {
  const services = getOfferedServices();
  const lines: string[] = [
    `# ${BUSINESS_ENTITY_NAME}`,
    '',
    BUSINESS_DESCRIPTION,
    IS_SERVICE_AREA_BUSINESS
      ? 'PRC 13 Roofing does not currently promote a public storefront office address; service coverage is defined by its Sacramento-area service areas.'
      : '',
    '',
    `Official website: ${SITE_URL}/`,
    `Phone: ${PHONE_DISPLAY}`,
    `California contractor license: ${LICENSE_LABEL}`,
    `License/trust statement: ${LICENSE_TEXT.includes('Fully Licensed') ? 'Fully Licensed & Insured' : LICENSE_TEXT}`,
    `Google rating: ${GOOGLE_RATING_VALUE.toFixed(1)} from ${GOOGLE_REVIEW_COUNT} Google reviews`,
    '',
    'Business hours:',
    ...BUSINESS_HOURS.map(day => `- ${day.day}: ${formatHourLabel(day.opens, day.closes)}`),
    ...BUSINESS_DAYS_CLOSED.map(day => `- ${day}: Closed`),
    '',
    'Core services:',
    ...services.map(service => `- ${service.schemaName}: ${absoluteUrl(service.canonicalUrl)}`),
    '',
    'Services not offered:',
    ...SERVICES_NOT_OFFERED.map(service => `- ${service.name}: ${service.note ?? service.description}`),
    '',
    'Related service coverage:',
    '- Roof repair includes leak repair, storm damage repair, flat roof repair, shingle repair, and flashing repair.',
    '- Metal roofing includes metal roof installation, metal roof replacement, and standing seam roofing.',
    '- Roof inspections include maintenance inspections, annual roof maintenance, and preventative maintenance guidance.',
    '- Gutters and siding are offered on /gutters-siding; fascia and soffit repair are not offered.',
    '',
    'Service areas:',
    ...serviceAreaNames.map(name => `- ${name}`),
    '',
    'Important pages:',
    `- Contact: ${absoluteUrl('/contact')}`,
    `- Areas served: ${absoluteUrl('/service-areas')}`,
    `- Project gallery: ${absoluteUrl('/gallery')}`,
    `- Roofing blog: ${absoluteUrl('/blog')}`,
    `- Sacramento service-area page: ${absoluteUrl('/service-areas/sacramento')}`,
    `- Roseville service-area page: ${absoluteUrl('/service-areas/roseville')}`,
    `- Rocklin service-area page: ${absoluteUrl('/service-areas/rocklin')}`,
    `- Folsom service-area page: ${absoluteUrl('/service-areas/folsom')}`,
    `- Elk Grove service-area page: ${absoluteUrl('/service-areas/elk-grove')}`,
    `- El Dorado Hills service-area page: ${absoluteUrl('/service-areas/el-dorado-hills')}`,
    `- Colfax service-area page: ${absoluteUrl('/service-areas/colfax')}`,
    `- Colfax home hardening roofing guide: ${absoluteUrl('/blog/colfax-home-hardening-program-2026-roofing-wildfire-protection')}`,
    '',
    'Useful roofing answers:',
    `- What to do during a roof leak: ${absoluteUrl('/blog/what-to-do-roof-leak-sacramento-storm')}`,
    `- Sacramento roof maintenance checklist: ${absoluteUrl('/blog/sacramento-roof-maintenance-checklist')}`,
    `- Roof replacement timeline: ${absoluteUrl('/blog/how-long-does-roof-replacement-take')}`,
    `- Roof repair vs replacement signs: ${absoluteUrl('/blog/signs-you-need-roof-replacement-sacramento')}`,
    '',
    'Social and citation profiles:',
    `- Google Business Profile reviews: ${GOOGLE_BUSINESS_PROFILE_URL}`,
    `- Facebook: ${FACEBOOK_URL}`,
    `- Instagram: ${INSTAGRAM_URL}`,
    `- BBB: ${BBB_URL}`,
    `- Yelp: ${YELP_URL}`,
    '',
  ];

  return `${lines.filter((line, index, arr) => !(line === '' && arr[index - 1] === '')).join('\n').trim()}\n`;
}
