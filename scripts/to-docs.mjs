// Copies the static export (./out) to ./docs, the folder GitHub Pages serves.
import { cpSync, existsSync, rmSync, writeFileSync } from 'node:fs';

if (!existsSync('out')) {
  console.error('No ./out folder. Run `next build` first.');
  process.exit(1);
}
rmSync('docs', { recursive: true, force: true });
cpSync('out', 'docs', { recursive: true });
// Without .nojekyll, GitHub Pages ignores the _next folder.
writeFileSync('docs/.nojekyll', '');
console.log('Copied out/ to docs/');
