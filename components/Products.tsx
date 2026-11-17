import Image from 'next/image';
import type { CSSProperties } from 'react';
import { flagship, products, themes, type Product } from '@/content/site';
import { ArrowUpRight } from './Icons';
import Reveal from './Reveal';
import Shot from './Shot';

type ProductWithShot = Product & { shot: NonNullable<Product['shot']> };

const drift = (distance: string) => ({ '--drift': distance }) as CSSProperties;

function Flagship() {
  const { primary, secondary } = flagship.shots;
  const facts = [
    { label: 'The problem', body: flagship.problem },
    { label: 'My role', body: flagship.role },
    { label: 'Built with', body: flagship.stack.join(', ') },
  ];

  return (
    <article id={flagship.slug} className="mt-14 scroll-mt-24 md:mt-20">
      <Reveal className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
        <div>
          <h3 className="flagship-name">{flagship.name}</h3>
          <p className="mt-5 text-xl leading-snug md:text-2xl">{flagship.kind}</p>
          <p className="mt-3 max-w-[40rem] text-muted">{flagship.summary}</p>
        </div>
        <a href={flagship.href} className="btn ext" target="_blank" rel="noreferrer">
          Visit {flagship.href.replace('https://', '')}
          <ArrowUpRight />
        </a>
      </Reveal>

      <Reveal className="relative mt-10 pb-[4%] md:mt-14 md:pb-0" delay={100}>
        <div className="frame drift md:w-[77%]" style={drift('1rem')}>
          <Shot shot={primary} alt={primary.alt} sizes="(min-width: 80rem) 58rem, (min-width: 48rem) 72vw, 92vw" className="w-full" />
        </div>
        <div
          className="frame drift relative z-10 -mt-[12%] ml-auto w-[62%] md:absolute md:right-0 md:top-[14%] md:mt-0 md:w-[36%]"
          style={drift('3rem')}
        >
          <Shot shot={secondary} alt={secondary.alt} sizes="(min-width: 80rem) 27rem, (min-width: 48rem) 34vw, 58vw" className="w-full" />
        </div>
      </Reveal>

      <div className="mt-14 grid gap-10 md:mt-20 lg:grid-cols-[1fr_1fr_0.8fr] lg:gap-14">
        {facts.map((fact, i) => (
          <Reveal key={fact.label} delay={i * 90}>
            <h4 className="text-[0.9375rem] text-muted">{fact.label}</h4>
            <p className="mt-2 text-lg leading-relaxed">{fact.body}</p>
          </Reveal>
        ))}
      </div>

      <ul className="mt-12 grid gap-x-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-x-14">
        {flagship.capabilities.map((capability, i) => (
          <Reveal as="li" key={capability.title} delay={(i % 3) * 90} className="rule-row py-6">
            <h4 className="text-lg font-medium">{capability.title}</h4>
            <p className="mt-1.5 text-muted">{capability.detail}</p>
          </Reveal>
        ))}
      </ul>
    </article>
  );
}

function Capabilities({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 list-disc space-y-1.5 pl-5 text-[0.9375rem] marker:text-line-strong">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/** A product with a screenshot gets a wide row; the rest share a row of three. */
function FeatureRow({ product }: { product: ProductWithShot }) {
  const { shot } = product;
  return (
    <Reveal
      as="article"
      id={product.slug}
      className="rule-row grid scroll-mt-24 gap-10 py-12 md:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16"
    >
      <div>
        <h3 className="text-4xl md:text-5xl">{product.name}</h3>
        <p className="mt-3 text-lg text-muted">{product.kind}</p>
        <p className="mt-5 max-w-[32rem] text-lg leading-relaxed">{product.summary}</p>
        <Capabilities items={product.capabilities} />
        <p className="mt-6 text-[0.9375rem] text-muted">{product.stack.join(', ')}</p>
      </div>
      <figure>
        <div className="frame">
          <Shot shot={shot} alt={shot.alt} sizes="(min-width: 80rem) 40rem, (min-width: 64rem) 52vw, 92vw" className="w-full" />
        </div>
        {shot.note && <figcaption className="mt-3 text-[0.9375rem] text-muted">{shot.note}</figcaption>}
      </figure>
    </Reveal>
  );
}

function CompactProduct({ product, index }: { product: Product; index: number }) {
  return (
    <Reveal as="article" id={product.slug} delay={index * 90} className="rule-row scroll-mt-24 py-10">
      <div className="flex items-center gap-4">
        {product.icon && (
          <Image src={product.icon} alt="" width={48} height={48} className="size-12 rounded-[0.8rem]" />
        )}
        <div>
          <h3 className="text-2xl md:text-[1.75rem]">{product.name}</h3>
          <p className="text-[0.9375rem] text-muted">{product.kind}</p>
        </div>
      </div>
      <p className="mt-5 leading-relaxed">{product.summary}</p>
      <Capabilities items={product.capabilities} />
      <p className="mt-6 text-[0.9375rem] text-muted">{product.stack.join(', ')}</p>
    </Reveal>
  );
}

export default function Products() {
  const featured = products.filter((p): p is ProductWithShot => p.shot !== undefined);
  const compact = products.filter((p) => !p.shot);

  return (
    <section id="products" className="section">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <Reveal>
            <h2 className="section-title">Products</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="lead max-w-[34rem]">
              Five products, each taken from an idea to a working product. NepseFlow is the one I run today.
            </p>
          </Reveal>
        </div>

        <Flagship />

        <div className="mt-16 md:mt-24">
          {featured.map((product) => (
            <FeatureRow key={product.slug} product={product} />
          ))}
          <div className="grid gap-x-10 md:grid-cols-3 lg:gap-x-14">
            {compact.map((product, i) => (
              <CompactProduct key={product.slug} product={product} index={i} />
            ))}
          </div>
          <Reveal className="rule-row pt-8">
            <p className="max-w-[44rem] text-muted">{themes}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
