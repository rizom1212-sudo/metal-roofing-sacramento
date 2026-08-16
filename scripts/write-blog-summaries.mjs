import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js');
const outFile = path.join(root, 'src', 'data', 'blogSummaries.ts');

const api = await import(pathToFileURL(serverEntry).href);
const posts = api.blogPosts;
if (!Array.isArray(posts) || posts.length === 0) {
  throw new Error('write-blog-summaries: blogPosts missing from SSR bundle');
}

const summaries = posts.map(post => ({
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
}));

const body = `/* Auto-generated listing metadata. Do not import src/data/blog.ts from client shells. */
import type { BlogSummary } from './blogSummary';

export type { BlogSummary } from './blogSummary';

export const blogSummaries: BlogSummary[] = ${JSON.stringify(summaries, null, 2)};
`;

await fs.writeFile(outFile, body);
console.log(`wrote ${summaries.length} blog summaries`);
