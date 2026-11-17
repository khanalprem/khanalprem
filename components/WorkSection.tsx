'use client';

import { useRef, useState } from 'react';
import { work, type Work } from '@/content/site';
import { ArrowUpRight, Close, Expand } from './Icons';
import Reveal from './Reveal';
import Shot from './Shot';

/** The first row of the grid holds this many larger cards. */
const LEADS = 3;

// How wide a card's screenshot is shown: the first has a row to itself on tablets.
function sizes(index: number) {
  const tablet = index === 0 ? '92vw' : '45vw';
  const desktop = index < LEADS ? '24rem' : '17rem';
  return `(min-width: 80rem) ${desktop}, (min-width: 48rem) ${tablet}, 82vw`;
}

export default function WorkSection() {
  const [selected, setSelected] = useState<Work | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openItem = (item: Work) => {
    setSelected(item);
    dialogRef.current?.showModal();
  };

  return (
    <section id="clients" className="section">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <Reveal>
            <h2 className="section-title">Client work</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="lead max-w-[34rem]">
              Storefront themes and interfaces for maps and data, built with teams for commercial and development
              clients.
            </p>
          </Reveal>
        </div>

        <ul className="rail mt-10 md:mt-14">
          {work.map((item, i) => {
            const lead = i < LEADS;
            return (
              <Reveal as="li" key={item.slug} delay={(lead ? i : i - LEADS) * 80} className={lead ? 'is-lead' : ''}>
                <article>
                  <button type="button" onClick={() => openItem(item)} className="work-shot group relative">
                    <span className="sr-only">View a larger screenshot of {item.title}</span>
                    <Shot
                      shot={item.image}
                      alt=""
                      sizes={sizes(i)}
                      className="aspect-16/10 w-full object-cover object-top-left"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute right-3 top-3 grid size-9 place-items-center rounded-[0.6rem] bg-ink text-bg opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                    >
                      <Expand width={16} height={16} />
                    </span>
                  </button>
                  <h3 className={lead ? 'mt-5 text-2xl md:text-[1.75rem]' : 'mt-5 text-xl md:text-2xl'}>{item.title}</h3>
                  <p className="mt-2 text-[0.9375rem] text-muted">{item.summary}</p>
                  <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.9375rem]">
                    <span>{item.kind === 'Web' ? 'Frontend' : `Frontend, ${item.kind}`}</span>
                    {item.href && (
                      <a href={item.href} className="ext text-link" target="_blank" rel="noreferrer">
                        Visit the site
                        <ArrowUpRight className="ml-0.5 inline-block align-[-0.1em]" />
                      </a>
                    )}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="work-dialog-title"
        onClose={() => setSelected(null)}
        onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
        className="m-auto w-[min(72rem,94vw)] max-w-none overflow-hidden rounded-[0.9rem] border border-line bg-surface p-0 text-ink"
      >
        {selected && (
          <div>
            <div className="flex items-center justify-between gap-4 border-b border-line py-2 pl-5 pr-2">
              <h3 id="work-dialog-title" className="text-xl">
                {selected.title}
              </h3>
              <button type="button" onClick={() => dialogRef.current?.close()} className="icon-button border-transparent">
                <span className="sr-only">Close</span>
                <Close width={20} height={20} />
              </button>
            </div>
            <Shot
              shot={selected.image}
              alt={`Screenshot of ${selected.title}`}
              sizes="min(72rem, 94vw)"
              className="max-h-[78vh] w-full object-contain"
            />
          </div>
        )}
      </dialog>
    </section>
  );
}
