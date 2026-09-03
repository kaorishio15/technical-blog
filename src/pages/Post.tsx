import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";
import Cover from "../components/Cover";
import { formatPostDate } from "../lib/dates";

export default function Post() {
  const { slug } = useParams();
  const post = posts.find((entry) => entry.slug === slug);

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-3xl font-extrabold">Post not found</h1>
        <p className="mt-4 text-ink-soft">That story is not in the archive yet.</p>
        <Link to="/" className="mt-6 inline-block text-accent">
          Back home →
        </Link>
      </main>
    );
  }

  const PostContent = post.component;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <article>
        <p className="text-[11px] font-medium tracking-[0.14em] text-ink-soft uppercase">
          {formatPostDate(post.date)}
          {post.category && (
            <>
              <span className="mx-2 text-accent">|</span>
              {post.category}
            </>
          )}
        </p>
        <h1 className="mt-4 text-4xl leading-tight font-extrabold">{post.title}</h1>
        <p className="mt-4 text-lg text-ink-soft">{post.description}</p>
        <Cover
          src={post.cover}
          alt=""
          className="mt-8 aspect-[16/8] w-full"
        />
        <div className="prose prose-lg mt-10 max-w-none prose-headings:font-sans prose-headings:font-bold prose-a:text-accent prose-p:text-ink-soft">
          <PostContent />
        </div>
      </article>
    </main>
  );
}
