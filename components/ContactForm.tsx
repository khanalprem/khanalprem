'use client';

import { useState, type FormEvent } from 'react';
import { site } from '@/content/site';

type Status = 'idle' | 'sending' | 'sent' | 'failed';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');
    try {
      const response = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('failed');
    }
  };

  if (status === 'sent') {
    return (
      <div role="status" className="border border-ink p-6">
        <p className="font-display text-2xl font-semibold">Message sent.</p>
        <p className="mt-2 text-muted">I’ll reply by email, usually within a day or two.</p>
        <button type="button" className="btn mt-5" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="font-medium">Name</span>
          <input className="field" type="text" name="name" autoComplete="name" required />
        </label>
        <label className="grid gap-1.5">
          <span className="font-medium">Email</span>
          <input className="field" type="email" name="email" autoComplete="email" required />
        </label>
      </div>
      <label className="grid gap-1.5">
        <span className="font-medium">Message</span>
        <textarea className="field" name="message" rows={6} required />
      </label>
      {/* Honeypot: people never see or fill this, bots do. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        {status === 'failed' && (
          <p role="alert" className="max-w-sm text-[0.95rem]">
            The message didn’t send. Check your connection and try again, or email{' '}
            <a className="text-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
