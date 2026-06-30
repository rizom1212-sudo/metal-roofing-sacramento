import type { BlogPost, BlogSection } from './blog';
import { CLUSTER_LINK_ENRICHMENTS } from './clusterLinkEnrichments';

function paragraph(content: string): BlogSection {
  return { type: 'paragraph', content };
}

export function applyClusterLinkEnrichments(post: BlogPost): BlogPost {
  const enrichment = CLUSTER_LINK_ENRICHMENTS[post.slug];
  if (!enrichment) return post;

  let body = [...post.body];

  if (enrichment.patchFirstParagraph) {
    const firstParagraphIndex = body.findIndex(section => section.type === 'paragraph');
    if (firstParagraphIndex >= 0) {
      body[firstParagraphIndex] = {
        ...body[firstParagraphIndex],
        content: enrichment.patchFirstParagraph,
      };
    }
  }

  if (enrichment.appendParagraphs?.length) {
    body = [...body, ...enrichment.appendParagraphs.map(paragraph)];
  }

  return { ...post, body };
}

export function applyClusterLinkEnrichmentsToPosts(posts: BlogPost[]): BlogPost[] {
  return posts.map(applyClusterLinkEnrichments);
}
