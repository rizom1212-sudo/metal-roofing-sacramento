import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js');

function priority(value) {
  return typeof value === 'number' ? `\n    <priority>${value.toFixed(1)}</priority>` : '';
}

function changefreq(value) {
  return value ? `\n    <changefreq>${value}</changefreq>` : '';
}

async function main() {
  const api = await import(serverEntry);
  const urls = api.publicRoutes
    .map(route => `  <url>
    <loc>${api.absoluteUrl(route.path)}</loc>
    <lastmod>${route.lastmod}</lastmod>${changefreq(route.changefreq)}${priority(route.priority)}
  </url>`)
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  await fs.mkdir(dist, { recursive: true });
  await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemap);
  console.log(`wrote sitemap.xml (${api.publicRoutes.length} URLs)`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
