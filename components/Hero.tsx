import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import { site } from '@/content/site';
import LocalTime from './LocalTime';
import PointerGlow from './PointerGlow';

// Read the contour lines at build time so each one can be drawn in on load.
const contourSvg = readFileSync(join(process.cwd(), 'public/images/contours.svg'), 'utf8');
const contours = Array.from(contourSvg.matchAll(/<path d="([^"]+)" stroke-width="([^"]+)"/g)).map(
  ([, d, width]) => ({ d, width }),
);

const delay = (seconds: number) => ({ '--delay': `${seconds}s` }) as CSSProperties;

function Letters({ text, start }: { text: string; start: number }) {
  return (
    <span className="block whitespace-nowrap">
      {Array.from(text).map((char, i) => (
        <span key={i} className="letter" style={{ '--i': start + i } as CSSProperties}>
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero relative overflow-hidden border-b border-line">
      <PointerGlow targetId="top" />

      <div aria-hidden="true" className="contours-fade pointer-events-none absolute inset-0">
        <div className="contour-drift absolute inset-0">
          <svg
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            strokeLinejoin="round"
            className="absolute inset-0 size-full text-contour"
          >
            {contours.map((c, i) => (
              <path
                key={i}
                d={c.d}
                pathLength={1}
                stroke="currentColor"
                strokeWidth={c.width}
                className="contour-line"
                style={{ '--i': i } as CSSProperties}
              />
            ))}
          </svg>
          {/* The same lines in the accent colour, shown only around the cursor. */}
          <div className="contour-glow absolute inset-0" />
        </div>
      </div>

      <div className="shell relative grid gap-12 pb-16 pt-14 md:pt-20 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-end lg:gap-16 lg:pb-24">
        <div>
          <p className="anim-rise text-lg text-muted" lang="ne">
            नमस्ते, म प्रेम हुँ।
          </p>
          <h1
            aria-label={site.name}
            className="mt-3 text-[clamp(3.2rem,11.5vw,9.5rem)] font-extrabold leading-[0.86] tracking-[-0.015em]"
            style={{ fontVariationSettings: "'wdth' 78" }}
          >
            <span aria-hidden="true">
              <Letters text="Prem Prasad" start={0} />
              <Letters text="Khanal" start={11} />
            </span>
          </h1>
          <p className="anim-rise mt-8 max-w-[35rem] text-xl leading-relaxed md:text-[1.4rem]" style={delay(0.75)}>
            {site.intro}
          </p>
          <div className="anim-rise mt-9 flex flex-wrap gap-3" style={delay(0.9)}>
            <a href="#products" className="btn btn-primary">
              See what I’ve built
            </a>
            <a href={`mailto:${site.email}`} className="btn">
              Email me
            </a>
          </div>
        </div>

        {/* Set like a map inset: the picture, then its legend. */}
        <figure className="w-full max-w-[19rem]">
          <div className="portrait-frame border border-ink bg-surface p-1.5">
            <Image
              src="/images/prem.webp"
              alt="Prem Prasad Khanal standing in front of green hills"
              width={492}
              height={650}
              priority
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <figcaption className="anim-rise" style={delay(1.25)}>
            <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-5 gap-y-1.5 text-[0.95rem]">
              <dt className="text-muted">Now</dt>
              <dd>
                CEO,{' '}
                <a href={site.company.href} className="text-link" target="_blank" rel="noreferrer">
                  {site.company.product}
                </a>
              </dd>
              <dt className="text-muted">Based in</dt>
              <dd>{site.location.label}</dd>
              <dt className="text-muted">Position</dt>
              <dd className="tabular-nums">{site.location.coordinates}</dd>
              <dt className="text-muted">Local time</dt>
              <dd>
                <LocalTime timeZone={site.location.timeZone} />
              </dd>
              <dt className="text-muted">On the web since</dt>
              <dd className="tabular-nums">{site.startedYear}</dd>
            </dl>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
