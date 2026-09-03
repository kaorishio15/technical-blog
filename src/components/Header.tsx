import { useState, type ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-[12px] font-semibold tracking-[0.16em] uppercase ${
    isActive ? "text-accent" : "text-ink hover:text-accent"
  }`;

function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 16l5 5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function SocialIcon({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href="https://your-portfolio-domain.com"
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="text-ink hover:text-accent"
    >
      {children}
    </a>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-black/5 bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-ink">
          <a href="/#latest" aria-label="Search posts">
            <IconSearch />
          </a>
          <button
            type="button"
            className="md:hidden"
            aria-expanded={menuOpen}
            aria-label="Open menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <IconMenu />
          </button>
        </div>

        <Link to="/" className="text-center">
          <span className="block text-3xl font-extrabold tracking-[0.18em] uppercase md:text-4xl">
            Kaori's Blog
          </span>
          <span className="mt-1 block text-[10px] font-medium tracking-[0.28em] text-ink-soft uppercase">
            Technical notes and things I am building
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <SocialIcon label="GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5A11.5 11.5 0 0 0 8.3 22.9c.58.1.78-.25.78-.56v-2.2c-3.18.7-3.85-1.37-3.85-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.54-.29-5.21-1.27-5.21-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.24 2.75.12 3.04.73.8 1.17 1.82 1.17 3.07 0 4.4-2.68 5.36-5.23 5.64.41.36.77 1.06.77 2.14v3.17c0 .31.2.67.79.56A11.5 11.5 0 0 0 12 .5Z" />
            </svg>
          </SocialIcon>
          <SocialIcon label="Portfolio">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" />
              <path d="M3.5 12h17M12 3.5c2.4 2.6 3.6 5.5 3.6 8.5S14.4 17.9 12 20.5C9.6 17.9 8.4 15 8.4 12S9.6 6.1 12 3.5Z" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </SocialIcon>
        </div>
      </div>

      <nav className="hidden justify-center gap-8 border-t border-black/5 py-4 md:flex">
        <NavLink to="/" className={navLinkClass} end>
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
        <NavLink to="/how-it-works" className={navLinkClass}>
          How It Works
        </NavLink>
        <a
          href="/#latest"
          className="text-[12px] font-semibold tracking-[0.16em] text-ink uppercase hover:text-accent"
        >
          Latest
        </a>
      </nav>

      {menuOpen && (
        <nav className="flex flex-col gap-3 border-t border-black/5 px-6 py-4 md:hidden">
          <NavLink to="/" className={navLinkClass} end onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/how-it-works" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            How It Works
          </NavLink>
          <a href="/#latest" className="text-[12px] font-semibold tracking-[0.16em] uppercase">
            Latest
          </a>
        </nav>
      )}
    </header>
  );
}