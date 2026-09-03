import { Link } from "react-router-dom";
import type { Post } from "../data/posts";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="border-b pb-8">
      <Link to={`/posts/${post.slug}`}>
        <h3 className="text-2xl font-semibold">
          {post.title}
        </h3>
      </Link>

      <p className="mt-3 text-gray-600">
        {post.description}
      </p>

      <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
        <time dateTime={post.date}>
          {post.date}
        </time>

        <div className="flex gap-2">
          {post.tags.map((tag) => (
            <span key={tag}>
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <Link
        to={`/posts/${post.slug}`}
        className="mt-4 inline-block text-sm font-medium"
      >
        Read more →
      </Link>
    </article>
  );
}