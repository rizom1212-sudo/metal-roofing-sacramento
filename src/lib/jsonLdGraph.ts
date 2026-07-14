import {
  BUSINESS_DISPLAY_NAME,
  BUSINESS_ENTITY_NAME,
  BUSINESS_HOURS,
  GOOGLE_RATING_VALUE,
  GOOGLE_REVIEW_COUNT,
  PHONE_TEL,
  SAME_AS_URLS,
} from '../data/site';
import { DEFAULT_OG_IMAGE } from '../data/assets';
import { absoluteAssetUrl, absoluteUrl, SITE_URL } from '../data/domain';
import { serviceAreaNames } from '../data/serviceAreas';
import type { BlogPost } from '../data/blog';
import type { FaqItem } from '../components/FaqAccordion';

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const tel = `+1-${PHONE_TEL.slice(0, 3)}-${PHONE_TEL.slice(3, 6)}-${PHONE_TEL.slice(6)}`;

const roofingServiceNames = [
  'Roof replacement',
  'Roof repair',
  'Emergency roof repair',
  'Metal roofing',
  'Commercial roofing',
  'Roof inspection',
  'Gutters and siding',
];

const DAY_OF_WEEK_URL: Record<string, string> = {
  Monday: 'https://schema.org/Monday',
  Tuesday: 'https://schema.org/Tuesday',
  Wednesday: 'https://schema.org/Wednesday',
  Thursday: 'https://schema.org/Thursday',
  Friday: 'https://schema.org/Friday',
  Saturday: 'https://schema.org/Saturday',
  Sunday: 'https://schema.org/Sunday',
};

/** Google-friendly area nodes (AdministrativeArea + state). */
export function areaServedPlaces(cityNames: string[]) {
  return cityNames.map(name => ({
    '@type': 'AdministrativeArea',
    name: `${name}, CA`,
    containedInPlace: {
      '@type': 'State',
      name: 'California',
    },
  }));
}

export function businessProviderReference() {
  return {
    '@type': 'RoofingContractor',
    '@id': BUSINESS_ID,
    name: BUSINESS_ENTITY_NAME,
    url: SITE_URL,
    telephone: tel,
  };
}

export function localBusinessSchema(servedAreas: string[] = serviceAreaNames) {
  const areas = areaServedPlaces(servedAreas);

  return {
    '@type': 'RoofingContractor',
    '@id': BUSINESS_ID,
    name: BUSINESS_ENTITY_NAME,
    alternateName: BUSINESS_DISPLAY_NAME,
    image: absoluteAssetUrl(DEFAULT_OG_IMAGE),
    url: SITE_URL,
    telephone: tel,
    priceRange: '$$',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.6589713,
      longitude: -121.309352,
    },
    areaServed: areas,
    openingHoursSpecification: BUSINESS_HOURS.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: DAY_OF_WEEK_URL[hours.day] ?? hours.day,
      opens: hours.opens,
      closes: hours.closes,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: GOOGLE_RATING_VALUE,
      reviewCount: GOOGLE_REVIEW_COUNT,
      bestRating: 5,
      worstRating: 1,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: tel,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'en',
      },
    ],
    knowsAbout: roofingServiceNames,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sacramento roofing services',
      itemListElement: roofingServiceNames.map((serviceName, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: serviceName,
        },
      })),
    },
    sameAs: SAME_AS_URLS,
  };
}

export function faqSchema(items: FaqItem[], pageName: string, pageUrl: string) {
  if (!items.length) return null;
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq-${pageName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    name: `${pageName}: Frequently Asked Questions`,
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function isoDate(date: string): string {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? date : parsed.toISOString().slice(0, 10);
}

export function resolveBreadcrumbItemUrl(href: string | undefined, pageUrl: string): string {
  const trimmedHref = href?.trim();
  if (!trimmedHref) return pageUrl;

  try {
    const resolved = new URL(trimmedHref, SITE_URL);
    if (resolved.protocol !== 'http:' && resolved.protocol !== 'https:') return pageUrl;
    return resolved.href;
  } catch {
    return pageUrl;
  }
}

export function serviceSchema(
  pageUrl: string,
  serviceName: string,
  servedAreas: string[] = serviceAreaNames,
) {
  const areas = areaServedPlaces(servedAreas);
  return {
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: serviceName,
    url: pageUrl,
    provider: businessProviderReference(),
    areaServed: servedAreas.length === 1 ? areas[0] : areas,
    serviceType: serviceName,
  };
}

export function buildJsonLdGraph(options: {
  pathname: string;
  pageName: string;
  schemaType: 'WebPage' | 'Service' | 'BlogPosting' | 'ContactPage';
  serviceName?: string;
  blogPost?: BlogPost;
  breadcrumbs?: { label: string; href?: string }[];
  faqs?: FaqItem[];
  includeLocalBusiness?: boolean;
  servedAreas?: string[];
}): object[] {
  const {
    pathname,
    pageName,
    schemaType,
    serviceName,
    blogPost,
    breadcrumbs,
    faqs = [],
    includeLocalBusiness = true,
    servedAreas = serviceAreaNames,
  } = options;

  const pageUrl = absoluteUrl(pathname);
  const graph: object[] = [];

  if (includeLocalBusiness) {
    // Always emit the same business entity footprint (all service areas).
    // City/page targeting belongs on Service schema via servedAreas, not on RoofingContractor.
    graph.push(localBusinessSchema(serviceAreaNames));
  }

  const pageType = schemaType === 'ContactPage' ? 'ContactPage' : 'WebPage';

  graph.push({
    '@type': pageType,
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageName,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE_URL,
      name: BUSINESS_DISPLAY_NAME,
    },
    about: { '@id': BUSINESS_ID },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: absoluteAssetUrl(DEFAULT_OG_IMAGE),
    },
  });

  if (schemaType === 'Service') {
    graph.push(serviceSchema(pageUrl, serviceName ?? pageName, servedAreas));
  }

  if (schemaType === 'BlogPosting' && blogPost) {
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${pageUrl}#blogposting`,
      headline: blogPost.title,
      description: blogPost.excerpt,
      image: absoluteAssetUrl(blogPost.coverImage),
      datePublished: isoDate(blogPost.date),
      dateModified: isoDate(blogPost.updatedDate ?? blogPost.date),
      author: {
        '@type': 'Organization',
        '@id': BUSINESS_ID,
        name: BUSINESS_ENTITY_NAME,
      },
      publisher: { '@id': BUSINESS_ID },
      mainEntityOfPage: { '@id': `${pageUrl}#webpage` },
    });
  }

  if (breadcrumbs?.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
        ...breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 2,
          name: item.label,
          item: resolveBreadcrumbItemUrl(item.href, pageUrl),
        })),
      ],
    });
  }

  const faq = faqSchema(faqs, pageName, pageUrl);
  if (faq) graph.push(faq);

  return graph;
}

/** Prevent `</script>` breakouts and keep JSON-LD parser-safe. */
export function serializeJsonLd(graph: object[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  })
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}
