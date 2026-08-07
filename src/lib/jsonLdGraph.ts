/**
 * JSON-LD @graph builder for PRC 13 Roofing.
 * Uses Phase 2 canonical entity (site.ts) and service catalog (services.ts).
 * Prefer one RoofingContractor @id and stable Service @ids — no fake addresses/offices.
 */
import {
  BUSINESS_DESCRIPTION,
  BUSINESS_DISPLAY_NAME,
  BUSINESS_ENTITY_NAME,
  BUSINESS_HOURS,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  GOOGLE_RATING_VALUE,
  GOOGLE_REVIEW_COUNT,
  LICENSE_NUMBER,
  LOGO_SRC,
  PHONE_E164,
  SAME_AS_URLS,
} from '../data/site';
import { DEFAULT_OG_IMAGE } from '../data/assets';
import { absoluteAssetUrl, absoluteUrl, SITE_URL } from '../data/domain';
import {
  getOfferedServices,
  getServiceByUrl,
  type ServiceDefinition,
} from '../data/services';
import { serviceAreaNames } from '../data/serviceAreas';
import type { BlogPost } from '../data/blog';
import type { FaqItem } from '../components/FaqAccordion';

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_ID = `${SITE_URL}/#logo`;

const tel = PHONE_E164;

const DAY_OF_WEEK_URL: Record<string, string> = {
  Monday: 'https://schema.org/Monday',
  Tuesday: 'https://schema.org/Tuesday',
  Wednesday: 'https://schema.org/Wednesday',
  Thursday: 'https://schema.org/Thursday',
  Friday: 'https://schema.org/Friday',
  Saturday: 'https://schema.org/Saturday',
  Sunday: 'https://schema.org/Sunday',
};

/** Map blog categories to canonical offered service IDs (when the article is clearly about that service). */
const BLOG_CATEGORY_TO_SERVICE_ID: Record<string, string> = {
  'Sacramento Roof Repair': 'roof-repair',
  'Roof Repair': 'roof-repair',
  'Emergency Roof Repair': 'emergency-roof-repair',
  'Sacramento Roof Replacement': 'roof-replacement',
  'Metal Roofing': 'metal-roofing',
  'Commercial Roofing': 'commercial-roofing',
  'Roof Inspection': 'roof-inspection',
  'Gutters & Fascia': 'gutters-siding',
};

export function serviceEntityId(canonicalUrl: string): string {
  return `${absoluteUrl(canonicalUrl)}#service`;
}

/** Place nodes for areaServed. Single city → City; multiple → AdministrativeArea list. */
export function areaServedPlaces(cityNames: string[]) {
  return cityNames.map(name => {
    if (cityNames.length === 1) {
      return {
        '@type': 'City',
        name: `${name}, CA`,
        containedInPlace: {
          '@type': 'State',
          name: 'California',
        },
      };
    }
    return {
      '@type': 'AdministrativeArea',
      name: `${name}, CA`,
      containedInPlace: {
        '@type': 'State',
        name: 'California',
      },
    };
  });
}

/** Reference the single business entity (include @type for validators / parsers). */
export function businessProviderReference() {
  return {
    '@type': 'RoofingContractor',
    '@id': BUSINESS_ID,
  };
}

function logoImageObject() {
  return {
    '@type': 'ImageObject',
    '@id': LOGO_ID,
    url: absoluteAssetUrl(LOGO_SRC),
    contentUrl: absoluteAssetUrl(LOGO_SRC),
    caption: BUSINESS_DISPLAY_NAME,
  };
}

function primaryImageObject(imagePath: string, caption?: string) {
  const url = absoluteAssetUrl(imagePath);
  return {
    '@type': 'ImageObject',
    url,
    contentUrl: url,
    ...(caption ? { caption } : {}),
  };
}

/** Top-level WebSite node — referenced by WebPage.isPartOf via @id only. */
export function webSiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: BUSINESS_DISPLAY_NAME,
    description: BUSINESS_DESCRIPTION,
    inLanguage: 'en-US',
    publisher: { '@id': BUSINESS_ID },
    about: { '@id': BUSINESS_ID },
  };
}

/**
 * Single PRC 13 RoofingContractor entity.
 * No PostalAddress — service-area business without a public storefront.
 * License via PropertyValue identifier only (no invented issuing org / credential dates).
 */
export function localBusinessSchema() {
  const areas = areaServedPlaces(serviceAreaNames);
  const offeredServices = getOfferedServices();

  return {
    '@type': 'RoofingContractor',
    '@id': BUSINESS_ID,
    name: BUSINESS_ENTITY_NAME,
    alternateName: BUSINESS_DISPLAY_NAME,
    description: BUSINESS_DESCRIPTION,
    url: SITE_URL,
    telephone: tel,
    image: absoluteAssetUrl(DEFAULT_OG_IMAGE),
    logo: { '@id': LOGO_ID },
    priceRange: '$$',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO_LATITUDE,
      longitude: GEO_LONGITUDE,
    },
    areaServed: areas,
    openingHoursSpecification: BUSINESS_HOURS.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: DAY_OF_WEEK_URL[hours.day] ?? hours.day,
      opens: hours.opens,
      closes: hours.closes,
    })),
    identifier: {
      '@type': 'PropertyValue',
      name: 'California Contractor License Number',
      value: LICENSE_NUMBER,
    },
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
    knowsAbout: offeredServices.map(service => service.schemaName),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      '@id': `${SITE_URL}/#offer-catalog`,
      name: 'Sacramento roofing services',
      itemListElement: offeredServices.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          '@id': serviceEntityId(service.canonicalUrl),
          name: service.schemaName,
          url: absoluteUrl(service.canonicalUrl),
        },
      })),
    },
    sameAs: [...SAME_AS_URLS],
  };
}

export function faqSchema(items: FaqItem[], _pageName: string, pageUrl: string) {
  if (!items.length) return null;
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
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

/** Full Service node for a canonical catalog service page. */
export function catalogServiceSchema(
  service: ServiceDefinition,
  servedAreas: string[] = serviceAreaNames,
) {
  const areas = areaServedPlaces(servedAreas);
  return {
    '@type': 'Service',
    '@id': serviceEntityId(service.canonicalUrl),
    name: service.schemaName,
    description: service.description,
    url: absoluteUrl(service.canonicalUrl),
    provider: businessProviderReference(),
    areaServed: servedAreas.length === 1 ? areas[0] : areas,
    serviceType: service.schemaName,
  };
}

/**
 * Page-local Service node for city hubs and service×city pages.
 * Does not reuse the metro service @id (avoids conflicting Service entities).
 */
export function pageServiceSchema(
  pageUrl: string,
  serviceName: string,
  servedAreas: string[],
  description?: string,
) {
  const areas = areaServedPlaces(servedAreas);
  return {
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: serviceName,
    ...(description ? { description } : {}),
    url: pageUrl,
    provider: businessProviderReference(),
    areaServed: servedAreas.length === 1 ? areas[0] : areas,
    serviceType: serviceName,
  };
}

export function resolveBlogAboutServiceId(blogPost: BlogPost): string | undefined {
  const serviceId = BLOG_CATEGORY_TO_SERVICE_ID[blogPost.category];
  if (!serviceId) return undefined;
  const service = getOfferedServices().find(item => item.id === serviceId);
  return service ? serviceEntityId(service.canonicalUrl) : undefined;
}

export function buildJsonLdGraph(options: {
  pathname: string;
  pageName: string;
  schemaType: 'WebPage' | 'Service' | 'BlogPosting' | 'ContactPage';
  serviceName?: string;
  serviceDescription?: string;
  blogPost?: BlogPost;
  breadcrumbs?: { label: string; href?: string }[];
  faqs?: FaqItem[];
  includeLocalBusiness?: boolean;
  servedAreas?: string[];
  primaryImage?: string;
}): object[] {
  const {
    pathname,
    pageName,
    schemaType,
    serviceName,
    serviceDescription,
    blogPost,
    breadcrumbs,
    faqs = [],
    includeLocalBusiness = true,
    servedAreas = serviceAreaNames,
    primaryImage,
  } = options;

  const pageUrl = absoluteUrl(pathname);
  const graph: object[] = [];
  const catalogService = getServiceByUrl(pathname);
  const imagePath = primaryImage
    ?? (blogPost?.coverImage)
    ?? DEFAULT_OG_IMAGE;

  if (includeLocalBusiness) {
    graph.push(logoImageObject());
    graph.push(localBusinessSchema());
    graph.push(webSiteSchema());
  }

  const pageType = schemaType === 'ContactPage' ? 'ContactPage' : 'WebPage';
  const webpage: Record<string, unknown> = {
    '@type': pageType,
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageName,
    inLanguage: 'en-US',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': BUSINESS_ID },
    primaryImageOfPage: primaryImageObject(imagePath, pageName),
  };

  let serviceNodeId: string | undefined;

  if (schemaType === 'Service') {
    if (catalogService) {
      // Canonical metro service page — stable catalog @id, full service-area footprint.
      const serviceNode = catalogServiceSchema(catalogService, serviceAreaNames);
      serviceNodeId = serviceNode['@id'];
      graph.push(serviceNode);
      webpage.mainEntity = { '@id': serviceNodeId };
    } else {
      // City hub or service×city page — geography on this Service only; one business entity.
      const serviceNode = pageServiceSchema(
        pageUrl,
        serviceName ?? pageName,
        servedAreas,
        serviceDescription,
      );
      serviceNodeId = serviceNode['@id'];
      graph.push(serviceNode);
      webpage.mainEntity = { '@id': serviceNodeId };
    }
  }

  graph.push(webpage);

  if (schemaType === 'BlogPosting' && blogPost) {
    const aboutServiceId = resolveBlogAboutServiceId(blogPost);
    const blogNode: Record<string, unknown> = {
      '@type': 'BlogPosting',
      '@id': `${pageUrl}#blogposting`,
      headline: blogPost.title,
      description: blogPost.excerpt,
      image: primaryImageObject(blogPost.coverImage, blogPost.title),
      datePublished: isoDate(blogPost.date),
      dateModified: isoDate(blogPost.updatedDate ?? blogPost.date),
      author: { '@id': BUSINESS_ID },
      publisher: { '@id': BUSINESS_ID },
      mainEntityOfPage: { '@id': `${pageUrl}#webpage` },
      isPartOf: { '@id': WEBSITE_ID },
    };
    if (aboutServiceId) {
      blogNode.about = [{ '@id': BUSINESS_ID }, { '@id': aboutServiceId }];
    } else {
      blogNode.about = { '@id': BUSINESS_ID };
    }
    graph.push(blogNode);
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
