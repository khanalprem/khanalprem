import { nav, site } from '@/content/site';
import { ArrowUp } from './Icons';

export default function Footer() {
  return (
    <footer className="border-t border-line py-10 text-[0.9375rem] text-muted">
      <div className="shell flex flex-wrap items-center justify-between gap-x-10 gap-y-5">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <nav aria-label="Footer">
          <ul className="-my-2 flex flex-wrap gap-x-6">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="block py-2.5 transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#top" className="btn min-h-10 px-3.5 py-1.5 text-ink">
          Back to top
          <ArrowUp className="nudge-up" />
        </a>
      </div>
    </footer>
  );
}
