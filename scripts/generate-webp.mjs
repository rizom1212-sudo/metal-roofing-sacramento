/**
 * Generates WebP variants for key JPEG/PNG assets (run: npm run assets:webp).
 * Requires sharp (devDependency).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'assets');

const jobs = [
  { dir: 'brand', files: ['IMG_5952.jpeg', '6998f81b5ba498b08c179234.jpg'] },
  { dir: 'roof-replacement', files: ['6998f81bf83453bcf498f0ba.jpg'] },
  { dir: 'roof-repair', files: ['6998f81b08245ee0441b56eb.jpg'] },
  { dir: 'metal-roofing', files: ['6998f81bf8345338a398f0b9.jpg'] },
  { dir: 'commercial-roofing', files: ['6998f81ba2a2c02b517b9648-1.jpg'] },
  { dir: 'emergency-repair', files: ['6998f81bd83aec69908449bf.jpg'] },
  { dir: 'roof-inspection', files: ['6998f81b20c035b044719a8d.jpg'] },
];

async function main() {
  const sharp = (await import('sharp')).default;
  let count = 0;
  for (const { dir, files } of jobs) {
    for (const file of files) {
      const input = path.join(root, dir, file);
      if (!fs.existsSync(input)) {
        console.warn('skip (missing):', input);
        continue;
      }
      const out = input.replace(/\.(jpe?g|png)$/i, '.webp');
      await sharp(input).webp({ quality: 82 }).toFile(out);
      console.log('wrote', path.relative(process.cwd(), out));
      count += 1;
    }
  }
  console.log(`Done: ${count} WebP file(s).`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
