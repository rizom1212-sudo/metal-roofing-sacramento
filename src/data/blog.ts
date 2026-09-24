import type { BlogPost } from './blogTypes';

export type { BlogPost, BlogRelatedService, BlogSection } from './blogTypes';
import { applyClusterLinkEnrichmentsToPosts } from './applyClusterLinkEnrichments';
import { isUnpublishedBlogSlug } from './urlPolicy';
import { rewriteLinksInUnknownValue } from '../lib/rewritePublicLinks';
import { brandSeoTitle } from '../lib/metalizeRetargetedCopy';
import { metalKeepRewritePosts } from './blogMetalKeepRewrites';
import { elDoradoHillsRoofingClusterPosts } from './blogElDoradoHillsRoofingCluster';
import { colfaxRoofingClusterPosts } from './blogColfaxHomeHardening';
import { metalRoofingClusterPosts } from './blogMetalRoofingCluster';
import { phase4MetalPosts } from './blogPhase4TopicalAuthority';

const BLOG_CATEGORY_DISPLAY: Record<string, string> = {
  'Metal Roofing': 'Metal Roofing',
  'El Dorado Hills Roofing': 'El Dorado Hills Metal Roofing',
  'Colfax Roofing': 'Colfax Metal Roofing',
};

/** Display label only. Do not use for filters — those match original category constants. */
export function displayBlogCategory(category: string): string {
  return BLOG_CATEGORY_DISPLAY[category] ?? category;
}

const rawBlogPosts: BlogPost[] = [
  ...elDoradoHillsRoofingClusterPosts,
  ...colfaxRoofingClusterPosts,
  ...metalRoofingClusterPosts,
  ...phase4MetalPosts,
];

export const blogPosts = [
  ...applyClusterLinkEnrichmentsToPosts(rawBlogPosts)
    .filter(post => !isUnpublishedBlogSlug(post.slug))
    .map(post => ({
      ...post,
      seoTitle: brandSeoTitle(post.seoTitle) ?? post.seoTitle,
    })),
  ...metalKeepRewritePosts,
].map(post => rewriteLinksInUnknownValue(post));
