import { site } from '@/content/site';
import CopyButton from './CopyButton';
import { ArrowUpRight } from './Icons';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="section-title">Let’s talk.</h2>
          <p className="lead mt-5 max-w-[30rem]">
            Partnerships, questions about a product, or a project you’d like to talk through. I read everything and
            reply by email.
          </p>
        </Reveal>

        <Reveal delay={150} className="lg:pt-3">
          <dl>
            <div className="rule-row py-5">
              <dt className="text-[0.9375rem] text-muted">Email</dt>
              <dd className="mt-1 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-2xl font-medium tracking-[-0.02em] transition-colors hover:text-accent md:text-3xl"
                >
                  {site.email}
                </a>
                <CopyButton value={site.email} label="Copy email address" />
              </dd>
            </div>
            <div className="rule-row py-5">
              <dt className="text-[0.9375rem] text-muted">Elsewhere</dt>
              <dd className="mt-1">
                <ul className="flex flex-wrap gap-x-7 gap-y-1 text-xl">
                  {site.social.map((s) => (
                    <li key={s.href}>
                      <a href={s.href} className="ext text-link" target="_blank" rel="me noreferrer">
                        {s.label}
                        <ArrowUpRight className="ml-0.5 inline-block align-[-0.1em]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
