import { useLocation } from 'react-router-dom';
import type { BlogPost } from '../data/blog';
import type { FaqItem } from '../components/FaqAccordion';
import { buildJsonLdGraph, serializeJsonLd } from '../lib/jsonLdGraph';
import { serviceAreaNames } from '../data/serviceAreas';
import { BRAND_NAME } from '../data/site';

interface JsonLdProps {
  faqs?: FaqItem[];
  pageName?: string;
  schemaType?: 'WebPage' | 'Service' | 'BlogPosting' | 'ContactPage';
  serviceName?: string;
  /** Optional Service.description for city / city×service page-local Service nodes */
  serviceDescription?: string;
  blogPost?: BlogPost;
  breadcrumbs?: { label: string; href?: string }[];
  /** RoofingContractor schema included by default for local entity consistency */
  includeLocalBusiness?: boolean;
  /** Cities for page-level Service.areaServed only (RoofingContractor always uses full footprint) */
  servedAreas?: string[];
  /** Primary page image (absolute or site-relative path) for ImageObject / primaryImageOfPage */
  primaryImage?: string;
  /** Optional page-local Offers (e.g. city promotional discount). */
  offers?: { name: string; description: string }[];
}

export default function JsonLd({
  faqs = [],
  pageName = BRAND_NAME,
  schemaType = 'WebPage',
  serviceName,
  serviceDescription,
  blogPost,
  breadcrumbs,
  includeLocalBusiness = true,
  servedAreas = serviceAreaNames,
  primaryImage,
  offers,
}: JsonLdProps) {
  const { pathname } = useLocation();
  const graph = buildJsonLdGraph({
    pathname,
    pageName,
    schemaType,
    serviceName,
    serviceDescription,
    blogPost,
    breadcrumbs,
    faqs,
    includeLocalBusiness,
    servedAreas,
    primaryImage,
    offers,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeJsonLd(graph),
      }}
    />
  );
}
