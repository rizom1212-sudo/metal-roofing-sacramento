import type { FaqItem } from '../components/FaqAccordion';

export interface BlogRelatedService {
  label: string;
  href: string;
}

export interface BlogSection {
  type: 'paragraph' | 'heading' | 'list' | 'links' | 'cta';
  content: string;
  items?: string[];
  links?: BlogRelatedService[];
  /** Heading level; defaults to 2 when type is heading */
  level?: 2 | 3;
  heading?: string;
  statement?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle?: string;
  excerpt: string;
  date: string;
  updatedDate?: string;
  readTime: string;
  category: string;
  coverImage: string;
  coverImageAlt?: string;
  body: BlogSection[];
  relatedServices: BlogRelatedService[];
  relatedArticles?: BlogRelatedService[];
  faqs?: FaqItem[];
}
