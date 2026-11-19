import Image from 'next/image';
import { about, expertise } from '@/content/site';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          <Reveal>
            <h2 className="section-title">About</h2>
            <div className="frame mt-8 w-full max-w-[17rem] lg:mt-12">
              <Image
                src="/images/prem.webp"
                alt="Prem Prasad Khanal standing on a lawn in front of pine trees"
                width={600}
                height={750}
                sizes="17rem"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="max-w-[40rem] space-y-6 text-xl leading-relaxed lg:pt-2">
            {about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </Reveal>
        </div>

        <div className="mt-20 md:mt-28">
          <Reveal>
            <h3 className="text-3xl md:text-4xl">What I do</h3>
          </Reveal>
          <dl className="mt-8 grid gap-x-14 md:grid-cols-2 lg:gap-x-20">
            {expertise.map((area, i) => (
              <Reveal key={area.title} delay={(i % 2) * 90} className="rule-row py-7">
                <dt className="text-xl font-medium">{area.title}</dt>
                <dd className="mt-2 max-w-[34rem] text-muted">{area.detail}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
