import { useLocation } from 'react-router-dom';
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
import type { FaqItem } from './FaqAccordion';

const BUSINESS_ID = 'https://prc13roofing.com/#business';

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

function serviceAreaSchema() {
  return serviceAreaNames.map(name => ({
    '@type': 'City',
    name,
    containedInPlace: {
      '@type': 'State',
      name: 'California',
    },
  }));
}

function localBusinessSchema() {
  const areas = serviceAreaSchema();

  return {
    '@type': 'RoofingContractor',
    '@id': BUSINESS_ID,
    name: BUSINESS_ENTITY_NAME,
    alternateName: BUSINESS_DISPLAY_NAME,
    image: absoluteAssetUrl(DEFAULT_OG_IMAGE),
    url: SITE_URL,
    telephone: tel,
    priceRange: 'Moderate',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.6589713,
      longitude: -121.309352,
    },
    areaServed: areas,
    serviceArea: areas,
    openingHoursSpecification: BUSINESS_HOURS.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.day,
      opens: hours.opens,
      closes: hours.closes,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: GOOGLE_RATING_VALUE,
      reviewCount: GOOGLE_REVIEW_COUNT,
    },
    knowsAbout: roofingServiceNames,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sacramento roofing services',
      itemListElement: roofingServiceNames.map(serviceName => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: serviceName,
        },
      })),
    },
    sameAs: SAME_AS_URLS,
  };
}

function faqSchema(items: FaqItem[], pageName: string, pageUrl: string) {
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

function isoDate(date: string): string {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? date : parsed.toISOString().slice(0, 10);
}

interface JsonLdProps {
  faqs?: FaqItem[];
  pageName?: string;
  schemaType?: 'WebPage' | 'Service' | 'BlogPosting';
  serviceName?: string;
  blogPost?: BlogPost;
  breadcrumbs?: { label: string; href?: string }[];
  /** RoofingContractor schema included by default for local entity consistency */
  includeLocalBusiness?: boolean;
}

export default function JsonLd({
  faqs = [],
  pageName = 'PRC 13 Roofing',
  schemaType = 'WebPage',
  serviceName,
  blogPost,
  breadcrumbs,
  includeLocalBusiness = true,
}: JsonLdProps) {
  const { pathname } = useLocation();
  const pageUrl = absoluteUrl(pathname);
  const graph: object[] = [];

  if (includeLocalBusiness) graph.push(localBusinessSchema());

  const webPage = {
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageName,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BUSINESS_DISPLAY_NAME,
    },
    about: { '@id': BUSINESS_ID },
    keywords: ['Sacramento roofing', 'roof repair', 'roof replacement', 'metal roofing', 'roof inspection'],
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: absoluteAssetUrl(DEFAULT_OG_IMAGE),
    },
  };

  graph.push(webPage);

  if (schemaType === 'Service') {
    graph.push({
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: serviceName ?? pageName,
      url: pageUrl,
      provider: { '@id': BUSINESS_ID },
      areaServed: serviceAreaSchema(),
      serviceType: serviceName ?? pageName,
    });
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
          item: absoluteUrl(item.href ?? pathname),
        })),
      ],
    });
  }

  const faq = faqSchema(faqs, pageName, pageUrl);
  if (faq) graph.push(faq);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': graph,
        }),
      }}
    />
  );
}
