import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main" className="shell flex min-h-svh flex-col items-start justify-center gap-6">
      <h1 className="text-5xl font-bold">This page is off the map.</h1>
      <p className="text-muted">The address doesn’t match anything on this site.</p>
      <Link href="/" className="btn btn-primary">
        Go to the home page
      </Link>
    </main>
  );
}
