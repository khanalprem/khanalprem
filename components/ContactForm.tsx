'use client';

import { useState, type FocusEvent, type FormEvent } from 'react';
import { site } from '@/content/site';

type Status = 'idle' | 'sending' | 'sent' | 'failed';
type FieldName = 'name' | 'email' | 'message';
type Errors = Partial<Record<FieldName, string>>;

const fieldNames: FieldName[] = ['name', 'email', 'message'];

function validate(name: FieldName, value: string): string | undefined {
  const text = value.trim();
  if (name === 'name') return text ? undefined : 'Enter your name.';
  if (name === 'email') {
    if (!text) return 'Enter your email address.';
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text) ? undefined : 'Enter an email address like name@example.com.';
  }
  return text ? undefined : 'Write a message.';
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <span id={id} className="text-[0.9375rem] text-danger">
      {message}
    </span>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});

  // Check a field when the visitor leaves it, and clear its error once it is fixed.
  const onBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name as FieldName;
    const message = validate(name, event.target.value);
    setErrors((current) => (current[name] === message ? current : { ...current, [name]: message }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const found: Errors = {};
    for (const name of fieldNames) found[name] = validate(name, String(data.get(name) ?? ''));
    setErrors(found);
    const firstInvalid = fieldNames.find((name) => found[name]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
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
      <div role="status" className="rounded-[0.9rem] border border-line bg-surface p-7 md:p-9">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle className="check-ring" cx="22" cy="22" r="20" pathLength={1} />
          <path className="check-tick" d="m13.5 22.5 6 6 11-12" pathLength={1} />
        </svg>
        <p className="mt-5 text-2xl font-medium tracking-[-0.02em] [font-stretch:85%]">Message sent.</p>
        <p className="mt-2 text-muted">I’ll reply by email, usually within a day or two.</p>
        <button type="button" className="btn mt-6" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    );
  }

  const field = (name: FieldName) => ({
    name,
    onBlur,
    'aria-invalid': errors[name] ? (true as const) : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid content-start gap-1.5">
          <span className="font-medium">Name</span>
          <input className="field" type="text" autoComplete="name" required {...field('name')} />
          <FieldError id="name-error" message={errors.name} />
        </label>
        <label className="grid content-start gap-1.5">
          <span className="font-medium">Email</span>
          <input className="field" type="email" autoComplete="email" inputMode="email" required {...field('email')} />
          <FieldError id="email-error" message={errors.email} />
        </label>
      </div>
      <label className="grid gap-1.5">
        <span className="font-medium">Message</span>
        <textarea className="field min-h-36 resize-y" rows={6} required {...field('message')} />
        <FieldError id="message-error" message={errors.message} />
      </label>
      {/* Honeypot: people never see or fill this, bots do. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary min-w-40" disabled={status === 'sending'}>
          {status === 'sending' && (
            <svg className="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M12 3a9 9 0 1 0 9 9" />
            </svg>
          )}
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        {status === 'failed' && (
          <p role="alert" className="max-w-sm text-[0.9375rem]">
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
