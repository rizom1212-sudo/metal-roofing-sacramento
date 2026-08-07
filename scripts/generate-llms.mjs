import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const publicDir = path.join(root, 'public');
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js');

async function main() {
  const api = await import(serverEntry);
  if (typeof api.buildLlmsTxt !== 'function') {
    throw new Error('entry-server must export buildLlmsTxt');
  }

  const content = api.buildLlmsTxt();
  await fs.mkdir(publicDir, { recursive: true });
  await fs.mkdir(dist, { recursive: true });
  await fs.writeFile(path.join(publicDir, 'llms.txt'), content);
  await fs.writeFile(path.join(dist, 'llms.txt'), content);
  console.log('wrote llms.txt (public + dist)');
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
