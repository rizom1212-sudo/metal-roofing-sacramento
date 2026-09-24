/**
 * Builds public/llms.txt from canonical entity + service + area data.
 * Keep this file factual; do not invent offerings.
 */
import {
  BBB_URL,
  BRAND_NAME,
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
  LICENSE_CSLB,
  LICENSE_TEXT,
  OPERATOR_DISCLOSURE,
  OPERATOR_DISPLAY_NAME,
  PHONE_DISPLAY,
  YELP_URL,
} from './site';
import { absoluteUrl, SITE_URL } from './domain';
import { getOfferedServices, SERVICES_NOT_OFFERED } from './services';
import { serviceAreas, serviceAreaNames } from './serviceAreas';
import { blogSummaries } from './blogSummaries';

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
    `# ${BRAND_NAME}`,
    '',
    BUSINESS_DESCRIPTION,
    OPERATOR_DISCLOSURE,
    IS_SERVICE_AREA_BUSINESS
      ? `${BUSINESS_ENTITY_NAME} does not currently promote a public storefront office address; service coverage is defined by its Sacramento-area service areas.`
      : '',
    '',
    `Official website: ${SITE_URL}/`,
    `Website brand: ${BRAND_NAME}`,
    `Legal/operator company: ${BUSINESS_ENTITY_NAME} (${OPERATOR_DISPLAY_NAME})`,
    `Phone: ${PHONE_DISPLAY}`,
    `California contractor license: ${LICENSE_CSLB}`,
    `License/trust statement: ${LICENSE_TEXT.includes('Fully Licensed') ? 'Fully Licensed & Insured' : LICENSE_TEXT}`,
    `Google rating for ${OPERATOR_DISPLAY_NAME}: ${GOOGLE_RATING_VALUE.toFixed(1)} from ${GOOGLE_REVIEW_COUNT} Google reviews`,
    '',
    'Business hours:',
    ...BUSINESS_HOURS.map(day => `- ${day.day}: ${formatHourLabel(day.opens, day.closes)}`),
    ...BUSINESS_DAYS_CLOSED.map(day => `- ${day}: Closed`),
    '',
    'Core metal roofing services:',
    ...services.map(service => `- ${service.schemaName}: ${absoluteUrl(service.canonicalUrl)}`),
    '',
    'Services not offered:',
    ...SERVICES_NOT_OFFERED.map(service => `- ${service.name}: ${service.note ?? service.description}`),
    '',
    'Related metal coverage:',
    '- Metal roofing includes metal roof installation, metal roof replacement, standing seam metal roofing, residential metal roofing, commercial metal roofing, metal roof repair, and metal roof inspection.',
    '- Generic cloned PRC 13 pages for shingle, tile, TPO, gutters, and 24/7 emergency repair were retired or consolidated. They are not primary offerings of this specialist site.',
    '',
    'Service areas:',
    ...serviceAreaNames.map(name => `- ${name}`),
    '',
    'Important pages:',
    `- Home: ${absoluteUrl('/')}`,
    `- About: ${absoluteUrl('/about')}`,
    `- Contact: ${absoluteUrl('/contact')}`,
    `- Areas served: ${absoluteUrl('/service-areas')}`,
    `- Project gallery: ${absoluteUrl('/gallery')}`,
    `- Roofing blog: ${absoluteUrl('/blog')}`,
    ...services.map(service => `- ${service.schemaName}: ${absoluteUrl(service.canonicalUrl)}`),
    ...serviceAreas.map(area => `- ${area.name} service-area page: ${absoluteUrl(`/service-areas/${area.slug}`)}`),
    '',
    'Colfax entity notes:',
    '- Colfax is a city in Placer County, California.',
    `- ${BUSINESS_ENTITY_NAME} provides metal roof inspection, repair, and replacement services to homeowners in Colfax, California.`,
    '- The City of Colfax operates a Home Hardening and Defensible Space Program for eligible residential properties.',
    '- City program information currently states that assistance may cover up to 90% of eligible home-hardening and defensible-space costs. That is not a guarantee that every roof replacement is 90% funded.',
    `- ${BUSINESS_ENTITY_NAME} independently offers Colfax homeowners an additional 5% off qualifying roofing work. That offer is separate from the City program.`,
    '',
    'Useful metal roofing answers:',
    ...blogSummaries.map(post => `- ${post.title}: ${absoluteUrl(`/blog/${post.slug}`)}`),
    '',
    `Social and citation profiles (belong to ${BUSINESS_ENTITY_NAME}, not a separate Metal Roofing Sacramento Google Business Profile):`,
    `- Google Business Profile reviews: ${GOOGLE_BUSINESS_PROFILE_URL}`,
    `- Facebook: ${FACEBOOK_URL}`,
    `- Instagram: ${INSTAGRAM_URL}`,
    `- BBB: ${BBB_URL}`,
    `- Yelp: ${YELP_URL}`,
    '',
  ];

  return `${lines.filter((line, index, arr) => !(line === '' && arr[index - 1] === '')).join('\n').trim()}\n`;
}
