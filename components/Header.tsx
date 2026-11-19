'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { nav, site } from '@/content/site';
import { Close, Mark, Menu } from './Icons';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const listRef = useRef<HTMLUListElement>(null);

  // Track the section on screen; the hero counts as "none".
  useEffect(() => {
    const sections = ['#top', ...nav.map((n) => n.href)]
      .map((id) => document.querySelector<HTMLElement>(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id === 'top' ? '' : `#${entry.target.id}`);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Slide the indicator under the active link, and keep it there when the nav reflows.
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const place = () => {
      const link = active ? list.querySelector<HTMLElement>(`a[href="${active}"]`) : null;
      list.style.setProperty('--on', link ? '1' : '0');
      if (link) {
        list.style.setProperty('--x', `${link.offsetLeft}px`);
        list.style.setProperty('--w', `${link.offsetWidth}px`);
      }
    };
    place();
    const resize = new ResizeObserver(place);
    resize.observe(list);
    return () => resize.disconnect();
  }, [active]);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const desktop = window.matchMedia('(min-width: 64rem)');
    const close = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    root.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', close);
    return () => {
      root.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', close);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="-ml-1.5 flex size-11 items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <Mark width={32} height={32} />
          <span className="sr-only">{site.shortName}, back to top</span>
        </a>

        <nav aria-label="Sections" className="hidden lg:block">
          <ul ref={listRef} className="relative flex h-16 items-center gap-8 text-[0.9375rem]">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? 'true' : undefined}
                  className="block py-2 text-muted transition-colors hover:text-ink aria-[current]:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li aria-hidden="true" className="nav-indicator" />
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="icon-button lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <Close width={20} height={20} /> : <Menu width={20} height={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Sections" className="mobile-nav lg:hidden">
          <ul className="shell flex min-h-full flex-col pb-10 pt-6">
            {nav.map((item, i) => (
              <li key={item.href} style={{ '--i': i } as CSSProperties}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-4 text-[2rem] font-medium leading-tight tracking-[-0.03em] [font-stretch:85%]"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-auto pt-10 text-muted" style={{ '--i': nav.length } as CSSProperties}>
              <a href={`mailto:${site.email}`} className="text-link text-lg">
                {site.email}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
