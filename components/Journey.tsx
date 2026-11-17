import type { CSSProperties } from 'react';
import { education, experience, site, toolkit, type Entry } from '@/content/site';
import Reveal from './Reveal';

/** `career` marks the first entry as current and fills the line as it is read. */
function Timeline({ entries, career = false }: { entries: Entry[]; career?: boolean }) {
  return (
    <Reveal>
      <ol className="timeline">
        {career && <li aria-hidden="true" className="timeline-fill" />}
        {entries.map((entry, i) => (
          <li
            key={`${entry.org}-${entry.period}`}
            className="timeline-item relative pb-8 pl-8 last:pb-0"
            style={{ '--i': i } as CSSProperties}
          >
            <span aria-hidden="true" className={`timeline-dot ${career && i === 0 ? 'is-current' : ''}`} />
            <p className="text-[0.9375rem] tabular-nums text-muted">{entry.period}</p>
            <h4 className="mt-0.5 text-xl font-medium leading-snug">{entry.org}</h4>
            <p className="mt-0.5 text-muted">{entry.role}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

export default function Journey() {
  const years = new Date().getFullYear() - site.startedYear;

  return (
    <section id="journey" className="section">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <Reveal>
            <h2 className="section-title">Journey</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="lead max-w-[34rem]">
              {years} years, from a first frontend job to running a product company.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-16 md:mt-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div>
            <h3 className="mb-8 text-2xl md:text-3xl">Experience</h3>
            <Timeline entries={experience} career />
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="mb-8 text-2xl md:text-3xl">Education</h3>
              <Timeline entries={education} />
              <p className="mt-6 text-[0.9375rem] text-muted">Completion years are in Bikram Sambat.</p>
            </div>

            <div id="toolkit" className="scroll-mt-24">
              <Reveal>
                <h3 className="text-2xl md:text-3xl">Toolkit</h3>
              </Reveal>
              <dl className="mt-6">
                {toolkit.map((row, i) => (
                  <Reveal key={row.group} delay={i * 70} className="rule-row py-4">
                    <dt className="text-[0.9375rem] text-muted">{row.group}</dt>
                    <dd className="mt-1 text-lg leading-snug">{row.items.join(', ')}</dd>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
