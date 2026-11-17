/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to ./out,
  // which scripts/to-docs.mjs copies to ./docs for GitHub Pages.
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
