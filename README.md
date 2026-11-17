# premkhanal.com.np

Personal portfolio of Prem Prasad Khanal. A single static page built with
Next.js 16 (App Router), TypeScript and Tailwind CSS 4, exported to plain
HTML and served by GitHub Pages from the `docs/` folder.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
```

## Edit the content

Everything on the page (intro, projects, experience, toolkit, contact
details) lives in [`content/site.ts`](content/site.ts). Components only handle
layout.

- Add a project: append to `work` and put a WebP screenshot in `public/work/`.
- Your own products: edit the `products` array. A product gets a link
  only when it has an `href`.
- Portrait: replace `public/images/prem.webp`.

Colours and fonts are CSS variables at the top of `app/globals.css`.

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
components/   Header, Hero, Products, WorkSection, ContactForm, Reveal, ThemeToggle, …
content/      site.ts, the single source of content
public/       images, icons, CNAME
scripts/      to-docs.mjs, copies the export to docs/
docs/         the deployed build (generated)
```

## Motion

All animation is CSS, in the "Motion" part of `app/globals.css`: the contour
lines draw in on load, the name arrives letter by letter, sections reveal on
scroll (`components/Reveal.tsx`), and the theme switch spreads from the toggle
using the View Transitions API. Everything is switched off for visitors who
ask for reduced motion.
