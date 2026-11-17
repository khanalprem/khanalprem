import type { CSSProperties } from 'react';
import { products } from '@/content/site';
import Reveal from './Reveal';

export default function Products() {
  return (
    <section id="products" className="border-b border-line py-20 md:py-28">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <h2 className="section-title">Products I’ve made</h2>
          <p className="mt-4 text-lg text-muted">
            Five products for Nepal, each one built end to end, and two WordPress themes.
          </p>
        </Reveal>

        <ul className="mt-12">
          {products.map((product, i) => {
            const body = (
              <>
                <span className="product-name font-display font-bold leading-none tracking-[-0.02em]">
                  {product.name}
                </span>
                <span className="block">
                  <span className="block font-medium">
                    {product.kind}
                    {product.note && <span className="ml-3 text-accent">{product.note}</span>}
                  </span>
                  <span className="mt-1.5 block max-w-[30rem] text-muted">{product.summary}</span>
                  <span className="mt-2.5 block text-[0.95rem]">{product.stack.join(', ')}</span>
                  {product.href && (
                    <span className="product-link mt-3 inline-block font-medium text-water">
                      {product.href.replace('https://', '').replace(/\/$/, '')}
                    </span>
                  )}
                </span>
              </>
            );
            const rowClass =
              'product-row grid gap-4 py-8 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-12 md:py-10';
            return (
              <Reveal as="li" key={product.name} delay={i * 90} className="rule-row">
                <span className="rule" style={{ '--d': `${i * 90}ms` } as CSSProperties} aria-hidden="true" />
                {product.href ? (
                  <a href={product.href} target="_blank" rel="noreferrer" className={rowClass}>
                    {body}
                  </a>
                ) : (
                  <div className={rowClass}>{body}</div>
                )}
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
