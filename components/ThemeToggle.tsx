'use client';

import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  }, []);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;
    const apply = () => {
      root.dataset.theme = next;
      try {
        localStorage.setItem('theme', next);
      } catch {
        // Private browsing: the choice just won't persist.
      }
      setTheme(next);
    };

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduced) return apply();

    // The new theme spreads out in a circle from the button.
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      root.style.setProperty('--tx', `${rect.left + rect.width / 2}px`);
      root.style.setProperty('--ty', `${rect.top + rect.height / 2}px`);
    }
    document.startViewTransition(() => flushSync(apply));
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggle}
      className="icon-button"
    >
      <span className="sr-only">{theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {theme === 'dark' ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </>
        ) : (
          <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5z" />
        )}
      </svg>
    </button>
  );
}
