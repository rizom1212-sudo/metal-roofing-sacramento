import { useLocation } from 'react-router-dom';
import type { BlogPost } from '../data/blog';
import type { FaqItem } from '../components/FaqAccordion';
import { buildJsonLdGraph, serializeJsonLd } from '../lib/jsonLdGraph';
import { serviceAreaNames } from '../data/serviceAreas';

interface JsonLdProps {
  faqs?: FaqItem[];
  pageName?: string;
  schemaType?: 'WebPage' | 'Service' | 'BlogPosting' | 'ContactPage';
  serviceName?: string;
  blogPost?: BlogPost;
  breadcrumbs?: { label: string; href?: string }[];
  /** RoofingContractor schema included by default for local entity consistency */
  includeLocalBusiness?: boolean;
  /** Cities for page-level Service.areaServed only (RoofingContractor always uses full footprint) */
  servedAreas?: string[];
}

export default function JsonLd({
  faqs = [],
  pageName = 'PRC 13 Roofing',
  schemaType = 'WebPage',
  serviceName,
  blogPost,
  breadcrumbs,
  includeLocalBusiness = true,
  servedAreas = serviceAreaNames,
}: JsonLdProps) {
  const { pathname } = useLocation();
  const graph = buildJsonLdGraph({
    pathname,
    pageName,
    schemaType,
    serviceName,
    blogPost,
    breadcrumbs,
    faqs,
    includeLocalBusiness,
    servedAreas,
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
