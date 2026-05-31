import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const templatePath = path.join(dist, 'index.html');
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js');
const metaDescriptionTagPattern = /<meta\b(?=[^>]*\bname\s*=\s*(['"])description\1)[^>]*>\s*/gi;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function headTags({ title, description, canonical, image, type = 'website', publishedTime, modifiedTime }) {
  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<meta name="robots" content="index,follow" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:site_name" content="PRC 13 Roofing" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ];

  if (type === 'article' && publishedTime) tags.push(`<meta property="article:published_time" content="${publishedTime}" />`);
  if (type === 'article' && modifiedTime) tags.push(`<meta property="article:modified_time" content="${modifiedTime}" />`);

  return tags.join('\n    ');
}

function injectHead(template, tags) {
  return template
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<link rel="canonical"[\s\S]*?>\n?/, '')
    .replace(metaDescriptionTagPattern, '')
    .replace(/<meta property="og:[\s\S]*?>\n?/g, '')
    .replace(/<meta name="twitter:[\s\S]*?>\n?/g, '')
    .replace('</head>', `    ${tags}\n  </head>`);
}

function routeMeta(route, api) {
  const blogSlug = route.path.startsWith('/blog/') ? route.path.replace('/blog/', '') : null;
  const post = blogSlug ? api.blogPosts.find(item => item.slug === blogSlug) : null;
  const meta = post
    ? {
        title: post.seoTitle ?? `${post.title} | PRC 13 Roofing`,
        description: post.excerpt,
        image: api.absoluteAssetUrl(post.coverImage),
        type: 'article',
        publishedTime: new Date(post.date).toISOString(),
        modifiedTime: new Date(post.updatedDate ?? post.date).toISOString(),
      }
    : {
        ...api.getPageMeta(route.path),
        image: api.absoluteAssetUrl(api.getOgImage()),
        type: 'website',
      };

  return {
    ...meta,
    canonical: api.absoluteUrl(route.path),
  };
}

async function writeRoute(route, html) {
  const outDir = route.path === '/' ? dist : path.join(dist, route.path.replace(/^\//, ''));
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, 'index.html'), html);
}

async function main() {
  const template = await fs.readFile(templatePath, 'utf8');
  const api = await import(serverEntry);
  const originalError = console.error;
  console.error = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('useLayoutEffect does nothing on the server')) {
      return;
    }
    originalError(...args);
  };

  for (const route of api.publicRoutes) {
    const appHtml = api.render(route.path);
    const meta = routeMeta(route, api);
    const html = injectHead(template, headTags(meta)).replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`,
    );
    await writeRoute(route, html);
    console.log(`prerendered ${route.path}`);
  }

  console.error = originalError;
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
