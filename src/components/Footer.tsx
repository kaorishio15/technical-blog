import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/5 bg-cream-deep">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-10 text-center">
        <p className="text-sm font-extrabold tracking-[0.2em] uppercase">
          The Journal
        </p>
        <nav className="flex gap-6 text-[11px] font-semibold tracking-[0.16em] uppercase">
          <Link to="/" className="hover:text-accent">
            Home
          </Link>
          <Link to="/about" className="hover:text-accent">
            About
          </Link>
        </nav>
      </div>
    </footer>
  );
}
