import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 pb-20">
      {/* Header / Intro */}
      <header className="border-b border-black/10 pb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
          How This Blog Works
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          Here is a breakdown of the architecture, tech stack, and logic behind how this blog works.
          I've built it to be fast and fully static because it keeps hosting completely free, loads instantly for visitors, and removes the complexity of managing a backend server or database just to publish text.
        </p>
      </header>

      {/* Tech Stack Highlights */}
      <section className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        <div className="border border-black/10 bg-paper p-5">
          <p className="text-[10px] font-bold tracking-[0.16em] text-accent uppercase">
            Framework
          </p>
          <h3 className="mt-1 text-lg font-bold text-ink">React 19</h3>
          <p className="mt-2 text-xs leading-normal text-ink-soft">
            Vite-powered single page application with modern component architecture.
          </p>
        </div>

        <div className="border border-black/10 bg-paper p-5">
          <p className="text-[10px] font-bold tracking-[0.16em] text-accent uppercase">
            Language
          </p>
          <h3 className="mt-1 text-lg font-bold text-ink">TypeScript</h3>
          <p className="mt-2 text-xs leading-normal text-ink-soft">
            End-to-end type safety across components, post data, and frontmatter.
          </p>
        </div>

        <div className="border border-black/10 bg-paper p-5">
          <p className="text-[10px] font-bold tracking-[0.16em] text-accent uppercase">
            Format
          </p>
          <h3 className="mt-1 text-lg font-bold text-ink">MDX</h3>
          <p className="mt-2 text-xs leading-normal text-ink-soft">
            Markdown with embedded JSX components parsed directly at build time. This is my first time working with MDX!
          </p>
        </div>

        <div className="border border-black/10 bg-paper p-5">
          <p className="text-[10px] font-bold tracking-[0.16em] text-accent uppercase">
            Styling
          </p>
          <h3 className="mt-1 text-lg font-bold text-ink">Tailwind v4</h3>
          <p className="mt-2 text-xs leading-normal text-ink-soft">
            Utility-first CSS styling using a custom cream, paper, and ink palette.
          </p>
        </div>
      </section>

      {/* Detailed Content Sections */}
      <section className="mt-12 space-y-10 divide-y divide-black/5">
        {/* Section 1: Content Pipeline */}
        <div className="pt-8">
          <h2 className="text-xl font-bold text-ink">1. Zero-Database MDX Pipeline</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            There is no external API or database. Every blog post is stored as an
            <code className="mx-1.5 border border-black/10 bg-paper px-2 py-0.5 font-mono text-xs text-ink">
              .mdx
            </code>
            file under
            <code className="mx-1.5 border border-black/10 bg-paper px-2 py-0.5 font-mono text-xs text-ink">
              src/content/posts/
            </code>
            .
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-soft">
            <li>
              <strong className="text-ink">Vite Glob Imports:</strong> Using{" "}
              <code className="font-mono text-xs text-ink">import.meta.glob</code>, posts are eagerly imported at build time.
            </li>
            <li>
              <strong className="text-ink">Frontmatter Parsing:</strong> Metadata like title, date, description, category, and tags are extracted automatically via Remark plugins in <code className="font-mono text-xs text-ink">vite.config.ts</code>.
            </li>
            <li>
              <strong className="text-ink">Slug Generation:</strong> Filenames automatically determine the post's route URL slug (e.g. <code className="font-mono text-xs text-ink">hello-world.mdx</code> → <code className="font-mono text-xs text-ink">/posts/hello-world</code>).
            </li>
          </ul>
          <p className="mt-4 border-l-2 border-accent bg-paper py-2.5 pl-4 text-xs italic text-ink-soft">
            Basically, this means I only need to create raw <code className="font-mono text-xs not-italic text-ink">.mdx</code> markdown files to generate entire, fully rendered web pages. I don't have to write any raw HTML boilerplate, construct complex JSON API responses, or manage dynamic routing tables for new posts—the pipeline handles parsing, layout wrapping, and route mapping automatically.
          </p>
        </div>

        {/* Section 2: Routing & UI Controls */}
        <div className="pt-8">
          <h2 className="text-xl font-bold text-ink">2. Client Routing & Interactive Filters</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            The frontend uses React Router 7 for seamless SPA navigation. Home state manages dynamic layout rendering without page reloads:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-soft">
            <li>
              <strong className="text-ink">Grid / List Toggle:</strong> Switch post presentation on the fly between responsive cards and horizontal list items.
            </li>
            <li>
              <strong className="text-ink">Category Filtering:</strong> Dynamically extracts all unique tags from active MDX files and filters posts client-side.
            </li>
          </ul>
        </div>

        {/* Section 3: Package Manager & Building */}
        <div className="pt-8">
          <h2 className="text-xl font-bold text-ink">3. Package Management & Deployment</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            I chose <strong className="text-ink">pnpm</strong> over standard npm and yarn because of its strict module isolation and efficient content-addressable storage. Unlike npm (which creates bloated, duplicated <code className="font-mono text-xs text-ink">node_modules</code> folders across projects) or Yarn, pnpm hard-links packages globally to save massive disk space and speed up installation times dramatically.
          </p>
          <p className="mt-4 text-sm text-ink-soft">
            To run this, here is the script I run:
          </p>
          <div className="mt-3 space-y-1 border border-black/10 bg-paper p-4 font-mono text-xs text-ink">
            <p className="text-ink-soft"># Local Development</p>
            <p>$ pnpm dev</p>
            <p className="pt-2 text-ink-soft"># Production Build (TypeScript check + Vite bundle)</p>
            <p>$ pnpm build</p>
          </div>
        </div>
      </section>

      {/* Back Home CTA */}
      <div className="mt-16 border-t border-black/10 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-accent uppercase hover:underline"
        >
          ← Back to posts
        </Link>
      </div>
    </main>
  );
}