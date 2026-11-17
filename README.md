# premkhanal.com.np

Personal site of Prem Prasad Khanal. A single static page built with
Next.js 16 (App Router), TypeScript and Tailwind CSS 4, exported to plain
HTML and served by GitHub Pages from the `docs/` folder.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
```

## Edit the content

Everything on the page (headline, products, client work, experience, toolkit,
contact details) lives in [`content/site.ts`](content/site.ts). Components only
handle layout.

- Headline and intro: `site.headline` and `site.intro`.
- Flagship product: the `flagship` object (NepseFlow), shown in full.
- Other products: the `products` array. One with a `shot` gets a wide row with
  its screenshot; the rest share a row. A product gets a link only when it has
  an `href`.
- Client work: append to `work`.
- Portrait: replace `public/images/prem.webp`.

Screenshots come in two files, the full capture and an 800px copy in a
`small/` folder beside it, so phones download the smaller one:

```bash
cwebp -q 78 -resize 800 0 public/work/name.webp -o public/work/small/name.webp
```

Colours are CSS variables at the top of `app/globals.css`. The typeface is IBM
Plex Sans, loaded in `app/layout.tsx`.

## Deploy

```bash
npm run build:pages  # builds, then copies out/ to docs/
git add -A && git commit -m "Update site" && git push
```

GitHub Pages serves `docs/` on the `master` branch. `public/CNAME` keeps the
custom domain attached, and `docs/.nojekyll` lets Pages serve the `_next`
folder.

## Structure

```
app/          layout, page, global styles, sitemap, robots
components/   one file per section (Hero, Products, WorkSection, About, Journey,
              Contact) plus shared pieces (Header, Footer, Reveal, Shot, Icons, …)
content/      site.ts, the single source of content
public/       images, icons, CNAME
scripts/      to-docs.mjs, copies the export to docs/
docs/         the deployed build (generated)
```

## Motion

All animation is CSS, in `app/globals.css`; there is no animation library.

- Hero: the headline rises a word at a time, the ridgelines
  (`components/Ridgelines.tsx`, generated at build time from a fixed seed)
  settle into place, and the front line draws up to its marker.
- Scroll: sections reveal once (`components/Reveal.tsx`); the ridges, the
  product screenshots and the timeline move with the scroll position using
  CSS scroll-driven animations, where the browser supports them.
- The nav indicator slides to the section on screen, and the theme switch
  spreads from the toggle using the View Transitions API.

Everything is switched off for visitors who ask for reduced motion, and the
page is complete without JavaScript.
