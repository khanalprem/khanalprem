'use client';

import { useEffect, useState } from 'react';

/** The current time where Prem is, so visitors know when to expect a reply. */
export default function LocalTime({ timeZone }: { timeZone: string }) {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat('en-GB', { timeZone, hour: '2-digit', minute: '2-digit' }).format(new Date());
    setNow(format());
    const id = setInterval(() => setNow(format()), 30_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return <span className="tabular-nums">{now ? `${now} (UTC+5:45)` : 'UTC+5:45'}</span>;
}
