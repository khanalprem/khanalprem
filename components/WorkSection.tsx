'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { work, type Work, type WorkKind } from '@/content/site';
import Reveal from './Reveal';

type Filter = 'All' | WorkKind;

export default function WorkSection() {
  const kinds = Array.from(new Set(work.map((w) => w.kind))).filter((k) => k !== 'Web');
  const filters: Filter[] = ['All', ...kinds];
  const [filter, setFilter] = useState<Filter>('All');
  const [selected, setSelected] = useState<Work | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visible = filter === 'All' ? work : work.filter((w) => w.kind === filter);

  const openItem = (item: Work) => {
    setSelected(item);
    dialogRef.current?.showModal();
  };

  return (
    <section id="work" className="border-b border-line py-20 md:py-28">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-2xl">
            <h2 className="section-title">Client work I’ve shipped</h2>
            <p className="mt-4 text-lg text-muted">
              Mostly interfaces for maps and data, built with teams in Nepal for government, development and
              commercial clients.
            </p>
          </Reveal>
          <div role="group" aria-label="Filter work by type" className="flex gap-1 rounded-full border border-line p-1">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className="min-h-10 rounded-full px-4 text-[0.95rem] font-medium text-muted transition-colors hover:text-ink aria-pressed:bg-ink aria-pressed:text-bg"
              >
                {f}
              </button>
            ))}
          </div>
        </div>


        <ul className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {visible.map((item, i) => {
            const lead = i === 0 && filter === 'All';
            return (
              <Reveal as="li" key={item.slug} delay={lead ? 0 : (i % 2) * 110} className={lead ? 'md:col-span-2' : ''}>
                <article className={lead ? 'grid gap-6 md:grid-cols-[1.7fr_1fr] md:items-end md:gap-10' : undefined}>
                  <button
                    type="button"
                    onClick={() => openItem(item)}
                    className="shot group block w-full overflow-hidden border border-line bg-surface text-left transition-colors hover:border-ink"
                  >
                    <span className="sr-only">View a larger screenshot of {item.title}</span>
                    <Image
                      src={item.image.src}
                      alt=""
                      width={item.image.width}
                      height={item.image.height}
                      sizes={lead ? '(min-width: 768px) 60vw, 100vw' : '(min-width: 768px) 45vw, 100vw'}
                      className="aspect-[16/10] w-full object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </button>
                  <div className={lead ? '' : 'mt-5'}>
                    <h3 className={lead ? 'text-3xl font-semibold md:text-4xl' : 'text-2xl font-semibold'}>
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[34rem] text-muted">{item.summary}</p>
                    <p className="mt-3 text-[0.95rem]">
                      {item.kind === 'Web' ? 'Frontend' : `Frontend, ${item.kind}`}
                      {item.href && (
                        <>
                          {' '}
                          <a href={item.href} className="text-link ml-3" target="_blank" rel="noreferrer">
                            Visit the site
                          </a>
                        </>
                      )}
                    </p>
                  </div>
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
        className="m-auto w-[min(72rem,94vw)] max-w-none bg-surface p-0 text-ink"
      >
        {selected && (
          <div>
            <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
              <h3 id="work-dialog-title" className="text-xl font-semibold">
                {selected.title}
              </h3>
              <button type="button" onClick={() => dialogRef.current?.close()} className="btn min-h-10 px-4 py-1.5">
                Close
              </button>
            </div>
            <Image
              src={selected.image.src}
              alt={`Screenshot of ${selected.title}`}
              width={selected.image.width}
              height={selected.image.height}
              className="max-h-[78vh] w-full object-contain"
            />
          </div>
        )}
      </dialog>
    </section>
  );
}
