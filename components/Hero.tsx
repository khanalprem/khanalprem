import Image from 'next/image';
import { site } from '@/content/site';
import LocalTime from './LocalTime';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="contours-fade pointer-events-none absolute inset-0">
        <div className="contours anim-terrain absolute inset-0" />
      </div>

      <div className="shell relative grid gap-12 pb-16 pt-14 md:pt-20 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-end lg:gap-16 lg:pb-24">
        <div>
          <p className="anim-rise text-lg text-muted" lang="ne">
            नमस्ते, म प्रेम हुँ।
          </p>
          <h1
            className="anim-rise mt-3 text-[clamp(3.4rem,11.5vw,9.5rem)] font-extrabold leading-[0.86] tracking-[-0.015em]"
            style={{ fontVariationSettings: "'wdth' 78", '--delay': '0.12s' } as React.CSSProperties}
          >
            Prem Prasad
            <br />
            Khanal
          </h1>
          <p
            className="anim-rise mt-8 max-w-[34rem] text-xl leading-relaxed md:text-[1.4rem]"
            style={{ '--delay': '0.28s' } as React.CSSProperties}
          >
            {site.intro}
          </p>
          <div className="anim-rise mt-9 flex flex-wrap gap-3" style={{ '--delay': '0.4s' } as React.CSSProperties}>
            <a href="#work" className="btn btn-primary">
              See the work
            </a>
            <a href={`mailto:${site.email}`} className="btn">
              Email me
            </a>
          </div>
        </div>

        {/* Set like a map inset: the picture, then its legend. */}
        <figure className="anim-rise w-full max-w-[19rem]" style={{ '--delay': '0.5s' } as React.CSSProperties}>
          <div className="border border-ink bg-surface p-1.5">
            <Image
              src="/images/prem.webp"
              alt="Prem Prasad Khanal standing in front of green hills"
              width={492}
              height={650}
              priority
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <figcaption>
            <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-5 gap-y-1.5 text-[0.95rem]">
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
