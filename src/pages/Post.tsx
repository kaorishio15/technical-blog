// indiviual blog post page

import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function Post() {
  const { slug } = useParams();

  // finds matching post object
  // renders actual mdx content inside a .prose wrapper for typography styling
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold">
          Post Not Found
        </h1>

        <p className="mt-4 text-gray-600">
          Sorry, we couldn't find that blog post.
        </p>
      </main>
    );
  }

  const PostContent = post.component;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <article>
        {/* Post Header */}
        <header>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            {post.description}
          </p>

          <time
            dateTime={post.date}
            className="mt-6 block text-sm text-gray-500"
          >
            {post.date}
          </time>
        </header>

        {/* Divider */}
        <hr className="my-10" />

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <PostContent />
        </div>
      </article>
    </main>
  );
}