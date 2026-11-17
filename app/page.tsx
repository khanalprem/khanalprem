import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Reveal from '@/components/Reveal';
import WorkSection from '@/components/WorkSection';
import { about, education, experience, site, toolkit } from '@/content/site';

type Entry = { period: string; org: string; role: string };

function Timeline({ title, entries, note }: { title: string; entries: Entry[]; note?: string }) {
  return (
    <Reveal className="timeline">
      <h3 className="text-2xl font-semibold">{title}</h3>
      {note && <p className="mt-1 text-[0.95rem] text-muted">{note}</p>}
      <ol className="timeline-list relative mt-6">
        {entries.map((entry, i) => (
          <li
            key={`${entry.org}-${entry.period}`}
            className="timeline-item relative pb-7 pl-6 last:pb-0"
            style={{ '--i': i } as React.CSSProperties}
          >
            <span aria-hidden="true" className="timeline-dot absolute -left-[4px] top-[0.6rem] size-[9px] rounded-full bg-accent" />
            <p className="text-[0.95rem] tabular-nums text-muted">{entry.period}</p>
            <p className="text-lg font-semibold leading-snug">{entry.org}</p>
            <p className="text-muted">{entry.role}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <Header />
      <main id="main">
        <Hero />
        <Products />
        <WorkSection />

        <section id="about" className="border-b border-line py-20 md:py-28">
          <div className="shell grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <Reveal>
              <h2 className="section-title">About me</h2>
            </Reveal>
            <Reveal delay={120} className="max-w-[40rem] space-y-6 text-xl leading-relaxed">
              {about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="journey" className="border-b border-line py-20 md:py-28">
          <div className="shell">
            <Reveal>
              <h2 className="section-title">Where I’ve worked and studied</h2>
            </Reveal>
            <div className="mt-12 grid gap-14 md:grid-cols-2 md:gap-20">
              <Timeline title="Experience" entries={experience} />
              <Timeline title="Education" entries={education} note="Completion years in Bikram Sambat." />
            </div>
          </div>
        </section>

        <section id="toolkit" className="border-b border-line py-20 md:py-28">
          <div className="shell">
            <Reveal>
              <h2 className="section-title">What I build with</h2>
            </Reveal>
            <dl className="mt-12">
              {toolkit.map((row, i) => (
                <Reveal key={row.group} delay={i * 80} className="rule-row">
                  <span className="rule" style={{ '--d': `${i * 80}ms` } as React.CSSProperties} aria-hidden="true" />
                  <div className="grid gap-2 py-6 md:grid-cols-[14rem_1fr] md:gap-10">
                    <dt className="text-muted">{row.group}</dt>
                    <dd className="font-display text-2xl font-medium leading-snug md:text-[1.75rem]">
                      {row.items.join(', ')}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-28">
          <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <h2 className="section-title">Want to talk? Write to me.</h2>
              <p className="mt-5 max-w-[30rem] text-lg text-muted">
                Partnerships, questions about a product, or a project you’d like to talk through. I read everything.
              </p>
              <dl className="mt-9 grid gap-5">
                <div>
                  <dt className="text-muted">Email</dt>
                  <dd>
                    <a href={`mailto:${site.email}`} className="font-display text-2xl font-semibold hover:text-accent md:text-3xl">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-muted">Phone</dt>
                  <dd>
                    <a href={site.phone.href} className="text-xl tabular-nums hover:text-accent">
                      {site.phone.label}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-muted">Elsewhere</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-x-6 gap-y-1 text-xl">
                      {site.social.map((s) => (
                        <li key={s.href}>
                          <a href={s.href} className="text-link" target="_blank" rel="me noreferrer">
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={150}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8 text-[0.95rem] text-muted">
        <div className="shell flex flex-wrap items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <a href="#top" className="hover:text-ink">
            Back to top
          </a>
        </div>
      </footer>
    </>
  );
}
