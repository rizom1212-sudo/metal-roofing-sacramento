import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { AppRoutes } from './App';
import { publicRoutes } from './data/routes';
import { blogPosts } from './data/blog';
import { absoluteAssetUrl, absoluteUrl, SITE_URL } from './data/domain';
import { getOgImage, getPageMeta } from './data/pageMeta';

export { publicRoutes };
export { absoluteAssetUrl, absoluteUrl, blogPosts, getOgImage, getPageMeta, SITE_URL };
export { buildLlmsTxt } from './data/llmsTxt';

export function render(url: string) {
  return renderToString(
    <MemoryRouter initialEntries={[url]}>
      <Layout>
        <AppRoutes />
      </Layout>
    </MemoryRouter>,
  );
}
