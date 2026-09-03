import { Link } from "react-router-dom";
import type { Post } from "../data/posts";
import { formatPostDate } from "../lib/dates";
import Cover from "./Cover";

type PostCardProps = {
  post: Post;
  viewMode?: "grid" | "list";
};

export default function PostCard({ post, viewMode = "grid" }: PostCardProps) {
  if (viewMode === "list") {
    return (
      <article className="grid gap-6 sm:grid-cols-12 sm:items-center">
        <div className="sm:col-span-5 md:col-span-4">
          <Link to={`/posts/${post.slug}`} className="relative block">
            <Cover
              src={post.cover}
              alt=""
              className="aspect-[4/3] w-full"
            />
          </Link>
        </div>

        <div className="sm:col-span-7 md:col-span-8">
          <p className="text-[11px] font-medium tracking-[0.14em] text-ink-soft uppercase">
            {formatPostDate(post.date)}
            {post.category && (
              <>
                <span className="mx-2 text-accent">|</span>
                {post.category}
              </>
            )}
            {post.tags[0] && post.tags[0] !== post.category && (
              <>
                <span className="mx-2 text-accent">|</span>
                {post.tags[0]}
              </>
            )}
          </p>

          <h3 className="mt-2 text-xl font-bold text-ink">
            <Link to={`/posts/${post.slug}`} className="hover:text-accent">
              {post.title}
            </Link>
          </h3>

          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-soft">
            {post.description}
          </p>

          <Link
            to={`/posts/${post.slug}`}
            className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-accent uppercase"
          >
            Read more
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article>
      <Link to={`/posts/${post.slug}`} className="relative block">
        <Cover
          src={post.cover}
          alt=""
          className="aspect-[4/3] w-full"
        />
        <h3 className="absolute bottom-0 left-0 max-w-[92%] bg-paper px-4 py-3 text-[1.05rem] leading-snug font-bold text-ink">
          {post.title}
        </h3>
      </Link>

      <p className="mt-4 text-[11px] font-medium tracking-[0.14em] text-ink-soft uppercase">
        {formatPostDate(post.date)}
        {post.category && (
          <>
            <span className="mx-2 text-accent">|</span>
            {post.category}
          </>
        )}
        {post.tags[0] && post.tags[0] !== post.category && (
          <>
            <span className="mx-2 text-accent">|</span>
            {post.tags[0]}
          </>
        )}
      </p>

      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">
        {post.description}
      </p>

      <Link
        to={`/posts/${post.slug}`}
        className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-accent uppercase"
      >
        Read more
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}