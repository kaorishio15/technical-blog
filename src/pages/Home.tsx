import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { posts, featuredPost } from "../data/posts";
import PostCard from "../components/PostCard";
import Cover from "../components/Cover";
import { formatPostDate } from "../lib/dates";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("None");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Extract all categories dynamically from posts
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((post) => {
      if (post.category) set.add(post.category);
      post.tags?.forEach((tag) => set.add(tag));
    });
    return Array.from(set);
  }, []);

  // Filter posts based on selected category (None shows all posts)
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "None") return posts;
    return posts.filter(
      (p) =>
        p.category?.toLowerCase() === selectedCategory.toLowerCase() ||
        p.tags?.some((t) => t.toLowerCase() === selectedCategory.toLowerCase())
    );
  }, [selectedCategory]);

  return (
    <main className="pb-20">
      {featuredPost && selectedCategory === "None" && (
        <section className="relative">
          <div className="relative h-[420px] overflow-hidden md:h-[500px]">
            <div className="absolute inset-y-0 left-0 z-10 w-[22%] bg-charcoal md:w-[28%]" />
            <Cover
              src={featuredPost.cover}
              alt=""
              className="absolute inset-0 h-full w-full"
            />
            <div className="relative z-20 mx-auto flex h-full max-w-6xl items-center px-6">
              <article className="max-w-md bg-paper p-8 shadow-sm md:ml-10 md:p-10">
                <p className="text-[11px] font-medium tracking-[0.14em] text-ink-soft uppercase">
                  {formatPostDate(featuredPost.date)}
                  <span className="mx-2 text-accent">|</span>
                  Featured
                  {featuredPost.category && (
                    <>
                      <span className="mx-2 text-accent">|</span>
                      {featuredPost.category}
                    </>
                  )}
                </p>
                <h1 className="mt-4 text-3xl leading-tight font-extrabold md:text-4xl">
                  <Link to={`/posts/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {featuredPost.description}
                </p>
              </article>
            </div>
          </div>
        </section>
      )}

      <section id="latest" className="mx-auto mt-16 max-w-6xl scroll-mt-8 px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-ink-soft uppercase">
              Browse and read the latest stuff
            </p>
            <h2 className="mt-2 text-3xl font-extrabold">Latest Stories</h2>
          </div>

          {/* View Controls: Grid/List Toggle & Categories */}
          <div className="flex flex-wrap items-center gap-4">
            {/* View Mode Toggle */}
            <div className="inline-flex border border-black/10 bg-paper p-1">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase transition ${
                  viewMode === "grid"
                    ? "bg-accent text-white"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                Grid
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase transition ${
                  viewMode === "list"
                    ? "bg-accent text-white"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-6 flex flex-wrap items-center gap-2 border-b border-black/5 pb-6">
          <span className="mr-2 text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
            Categories:
          </span>
          <button
            type="button"
            onClick={() => setSelectedCategory("None")}
            className={`px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase transition ${
              selectedCategory === "None"
                ? "bg-accent text-white"
                : "border border-black/10 bg-paper text-ink hover:border-accent"
            }`}
          >
            None
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase transition ${
                selectedCategory.toLowerCase() === cat.toLowerCase()
                  ? "bg-accent text-white"
                  : "border border-black/10 bg-paper text-ink hover:border-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Rendering */}
        {filteredPosts.length === 0 ? (
          <p className="mt-10 text-sm text-ink-soft">
            No posts found for this category.
          </p>
        ) : (
          <div
            className={
              viewMode === "grid"
                ? "mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3"
                : "mt-10 flex flex-col gap-10"
            }
          >
            {filteredPosts.map((post) => (
              <PostCard key={post.slug} post={post} viewMode={viewMode} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}