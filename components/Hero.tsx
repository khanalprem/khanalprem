import { Fragment, type CSSProperties } from 'react';
import { site } from '@/content/site';
import { ArrowDown, ArrowUpRight } from './Icons';
import LocalTime from './LocalTime';
import Ridgelines from './Ridgelines';

const delay = (seconds: number) => ({ '--delay': `${seconds}s` }) as CSSProperties;

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-content shell relative z-10 flex-1 pt-12 md:pt-16">
        <h1>
          <span className="anim-rise block text-lg font-normal tracking-normal text-muted [font-stretch:100%]">
            <span lang="ne">नमस्ते</span>. I’m <span className="font-medium text-ink">{site.name}</span>.
          </span>
          <span className="hero-title mt-5 block md:mt-6">
            {site.headline.split(' ').map((word, i) => (
              <Fragment key={i}>
                <span className="word">
                  <span style={{ '--i': i } as CSSProperties}>{word}</span>
                </span>{' '}
              </Fragment>
            ))}
          </span>
        </h1>

        {/* Each role carries its own marker, like a chart legend, so the row can wrap on small screens. */}
        <ul
          className="anim-rise mt-7 flex flex-wrap gap-x-6 gap-y-1 text-[0.9375rem] font-medium sm:text-lg md:mt-8 md:text-xl"
          style={delay(0.5)}
        >
          {site.roles.map((role) => (
            <li key={role} className="flex items-center gap-2.5 before:size-1.5 before:rounded-[1px] before:bg-accent">
              {role}
            </li>
          ))}
        </ul>
        <p className="lead anim-rise mt-4 max-w-[40rem]" style={delay(0.58)}>
          {site.intro}
        </p>
        <div className="anim-rise mt-8 flex flex-wrap gap-3" style={delay(0.7)}>
          <a href="#products" className="btn btn-primary">
            Explore my work
            <ArrowDown className="nudge-down" />
          </a>
          <a href="#contact" className="btn">
            Contact me
          </a>
        </div>

        <dl className="anim-rise mt-10 flex flex-wrap gap-x-10 gap-y-4 text-[0.9375rem]" style={delay(0.85)}>
          <div>
            <dt className="text-muted">Now</dt>
            <dd>
              Founder and CEO,{' '}
              <a href={site.company.href} className="ext text-link" target="_blank" rel="noreferrer">
                {site.company.name}
                <ArrowUpRight className="ml-0.5 inline-block align-[-0.1em]" />
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-muted">Based in</dt>
            <dd>{site.location.label}</dd>
          </div>
          <div>
            <dt className="text-muted">Local time</dt>
            <dd>
              <LocalTime timeZone={site.location.timeZone} />
            </dd>
          </div>
        </dl>
      </div>

      <Ridgelines />
    </section>
  );
}
