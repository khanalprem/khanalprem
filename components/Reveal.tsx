'use client';

import { createElement, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  as?: 'div' | 'li' | 'section' | 'article';
  id?: string;
  className?: string;
  /** Delay in milliseconds, for staggering siblings. */
  delay?: number;
};

/**
 * Fades and lifts its children into place the first time they scroll into view.
 * Styling lives in globals.css under ".reveal"; without JavaScript, or with
 * reduced motion, content is simply visible.
 */
export default function Reveal({ children, as = 'div', id, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      id,
      className: `reveal ${shown ? 'is-in' : ''} ${className}`,
      style: { '--d': `${delay}ms` } as CSSProperties,
    },
    children,
  );
}
