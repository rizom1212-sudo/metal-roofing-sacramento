export interface BlogSummary {
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
}

export function toBlogSummary<T extends BlogSummary>(post: T): BlogSummary {
  return {
    slug: post.slug,
    title: post.title,
    seoTitle: post.seoTitle,
    excerpt: post.excerpt,
    date: post.date,
    updatedDate: post.updatedDate,
    readTime: post.readTime,
    category: post.category,
    coverImage: post.coverImage,
    coverImageAlt: post.coverImageAlt,
  };
}
