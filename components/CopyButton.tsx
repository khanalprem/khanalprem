'use client';

import { useEffect, useState } from 'react';
import { Check, Copy } from './Icons';

/** Copies a value to the clipboard and confirms it for a moment. */
export default function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // Clipboard access denied: the value is still on screen to select.
    }
  };

  return (
    <button type="button" onClick={copy} className="icon-button">
      <span className="sr-only" aria-live="polite">
        {copied ? 'Copied' : label}
      </span>
      {copied ? <Check width={18} height={18} className="text-accent" /> : <Copy width={18} height={18} />}
    </button>
  );
}
