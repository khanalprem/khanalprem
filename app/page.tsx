import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WorkSection from '@/components/WorkSection';
import { about, education, experience, site, toolkit } from '@/content/site';

type Entry = { period: string; org: string; role: string };

function Timeline({ title, entries, note }: { title: string; entries: Entry[]; note?: string }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      {note && <p className="mt-1 text-[0.95rem] text-muted">{note}</p>}
      <ol className="mt-6 border-l border-line">
        {entries.map((entry) => (
          <li key={`${entry.org}-${entry.period}`} className="relative pb-7 pl-6 last:pb-0">
            <span aria-hidden="true" className="absolute -left-[5px] top-[0.6rem] size-[9px] rounded-full bg-accent" />
            <p className="text-[0.95rem] tabular-nums text-muted">{entry.period}</p>
            <p className="text-lg font-semibold leading-snug">{entry.org}</p>
            <p className="text-muted">{entry.role}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <WorkSection />

        <section id="about" className="border-b border-line py-20 md:py-28">
          <div className="shell grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <h2 className="section-title">About me</h2>
            <div className="max-w-[40rem] space-y-6 text-xl leading-relaxed">
              {about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="border-b border-line py-20 md:py-28">
          <div className="shell">
            <h2 className="section-title">Where I’ve worked and studied</h2>
            <div className="mt-12 grid gap-14 md:grid-cols-2 md:gap-20">
              <Timeline title="Experience" entries={experience} />
              <Timeline title="Education" entries={education} note="Completion years in Bikram Sambat." />
            </div>
          </div>
        </section>

        <section id="toolkit" className="border-b border-line py-20 md:py-28">
          <div className="shell">
            <h2 className="section-title">What I build with</h2>
            <dl className="mt-12 border-t border-line">
              {toolkit.map((row) => (
                <div key={row.group} className="grid gap-2 border-b border-line py-6 md:grid-cols-[14rem_1fr] md:gap-10">
                  <dt className="text-muted">{row.group}</dt>
                  <dd className="font-display text-2xl font-medium leading-snug md:text-[1.75rem]">
                    {row.items.join(', ')}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-28">
          <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="section-title">Have a project in mind? Write to me.</h2>
              <p className="mt-5 max-w-[30rem] text-lg text-muted">
                I take on frontend and full-stack work. Tell me what you’re building and when you need it.
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
            </div>
            <ContactForm />
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
