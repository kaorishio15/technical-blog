import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-bold">
          My Technical Blog
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <a
            href="https://your-portfolio-domain.com"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio
          </a>
        </nav>
      </div>
    </header>
  );
}