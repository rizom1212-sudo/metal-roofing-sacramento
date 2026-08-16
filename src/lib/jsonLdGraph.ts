/**
 * JSON-LD @graph builder for Metal Roofing Sacramento.
 * One licensed RoofingContractor (PRC 13 Roofing Inc.) operates the specialist brand.
 * Prefer one contractor @id, a Brand node, and stable Service @ids — no fake addresses/GBPs.
 */
import {
  BRAND_NAME,
  BUSINESS_DESCRIPTION,
  BUSINESS_ENTITY_NAME,
  BUSINESS_HOURS,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  GOOGLE_RATING_VALUE,
  GOOGLE_REVIEW_COUNT,
  LICENSE_NUMBER,
  LOGO_SRC,
  OPERATOR_DESCRIPTION,
  OPERATOR_DISPLAY_NAME,
  OPERATOR_SAME_AS_URLS,
  PHONE_E164,
} from '../data/site';
import { DEFAULT_OG_IMAGE } from '../data/assets';
import { absoluteAssetUrl, absoluteUrl, SITE_URL } from '../data/domain';
import {
  getOfferedServices,
  getServiceByUrl,
  type ServiceDefinition,
} from '../data/services';
import { serviceAreaNames } from '../data/serviceAreas';
import type { BlogPost } from '../data/blogTypes';
import type { FaqItem } from '../components/FaqAccordion';

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_ID = `${SITE_URL}/#logo`;
export const BRAND_ID = `${SITE_URL}/#brand`;

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

/** Map blog categories to offered catalog service IDs when the article is clearly about that service.
 * Historical non-metal categories are left unmapped because those URLs are no longer primary catalog entries.
 */
const BLOG_CATEGORY_TO_SERVICE_ID: Record<string, string> = {
  'Metal Roofing': 'metal-roofing',
  'Roof Inspection': 'metal-roof-inspection',
  'Sacramento Roof Replacement': 'metal-roof-replacement',
  'Sacramento Roof Repair': 'metal-roof-repair',
  'Commercial Roofing': 'commercial-metal-roofing',
  'Emergency Roof Repair': 'metal-roof-repair',
  'Folsom Roofing': 'metal-roofing',
  'El Dorado Hills Roofing': 'metal-roofing',
  'Colfax Roofing': 'metal-roofing',
};

export function serviceEntityId(serviceOrUrl: ServiceDefinition | string): string {
  if (typeof serviceOrUrl === 'string') {
    return `${absoluteUrl(serviceOrUrl)}#service`;
  }
  const suffix = serviceOrUrl.schemaIdSuffix ?? 'service';
  return `${absoluteUrl(serviceOrUrl.canonicalUrl)}#${suffix}`;
}

/** Place nodes for areaServed. Single city → City; multiple → AdministrativeArea list. */
export function areaServedPlaces(cityNames: string[]) {
  return cityNames.map(name => {
    if (cityNames.length === 1) {
      const containedInPlace =
        name === 'Colfax'
          ? {
              '@type': 'AdministrativeArea',
              name: 'Placer County, CA',
              containedInPlace: {
                '@type': 'State',
                name: 'California',
              },
            }
          : {
              '@type': 'State',
              name: 'California',
            };

      return {
        '@type': 'City',
        name: `${name}, CA`,
        containedInPlace,
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
    caption: BRAND_NAME,
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

function brandSchema() {
  return {
    '@type': 'Brand',
    '@id': BRAND_ID,
    name: BRAND_NAME,
    url: SITE_URL,
    description: BUSINESS_DESCRIPTION,
    logo: { '@id': LOGO_ID },
  };
}

/** Top-level WebSite node — referenced by WebPage.isPartOf via @id only. */
export function webSiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: BRAND_NAME,
    description: BUSINESS_DESCRIPTION,
    inLanguage: 'en-US',
    publisher: { '@id': BUSINESS_ID },
    about: [{ '@id': BRAND_ID }, { '@id': BUSINESS_ID }],
  };
}

/**
 * Single licensed RoofingContractor: PRC 13 Roofing Inc.
 * Brand (Metal Roofing Sacramento) is a related Brand node, not a second contractor.
 * No PostalAddress — service-area business without a public storefront.
 * License via PropertyValue identifier only (no invented issuing org / credential dates).
 * sameAs points at PRC 13 Roofing Inc. profiles, not a fabricated specialist GBP.
 */
export function localBusinessSchema() {
  const areas = areaServedPlaces(serviceAreaNames);
  const offeredServices = getOfferedServices();

  return {
    '@type': 'RoofingContractor',
    '@id': BUSINESS_ID,
    name: BUSINESS_ENTITY_NAME,
    alternateName: OPERATOR_DISPLAY_NAME,
    description: OPERATOR_DESCRIPTION,
    url: SITE_URL,
    telephone: tel,
    image: absoluteAssetUrl(DEFAULT_OG_IMAGE),
    logo: { '@id': LOGO_ID },
    brand: { '@id': BRAND_ID },
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
      name: 'Sacramento metal roofing services',
      itemListElement: offeredServices.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          '@id': serviceEntityId(service),
          name: service.schemaName,
          url: absoluteUrl(service.canonicalUrl),
        },
      })),
    },
    sameAs: [...OPERATOR_SAME_AS_URLS],
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
        text: item.answer.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]+)\)/g, '$1'),
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
    '@id': serviceEntityId(service),
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
  return service ? serviceEntityId(service) : undefined;
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
  offers?: { name: string; description: string }[];
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
    offers = [],
  } = options;

  const pageUrl = absoluteUrl(pathname);
  const graph: object[] = [];
  const catalogService = getServiceByUrl(pathname);
  const imagePath = primaryImage
    ?? (blogPost?.coverImage)
    ?? DEFAULT_OG_IMAGE;

  if (includeLocalBusiness) {
    graph.push(logoImageObject());
    graph.push(brandSchema());
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
    about: [{ '@id': BRAND_ID }, { '@id': BUSINESS_ID }],
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
    if (servedAreas.length === 1) {
      blogNode.contentLocation = areaServedPlaces(servedAreas)[0];
    }
    if (offers.length > 0) {
      blogNode.mentions = offers.map((_, index) => ({ '@id': `${pageUrl}#offer-${index + 1}` }));
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

  offers.forEach((offer, index) => {
    graph.push({
      '@type': 'Offer',
      '@id': `${pageUrl}#offer-${index + 1}`,
      name: offer.name,
      description: offer.description,
      seller: businessProviderReference(),
      areaServed: areaServedPlaces(servedAreas.length ? servedAreas : ['Colfax'])[0],
      category: 'Roofing',
    });
  });

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
