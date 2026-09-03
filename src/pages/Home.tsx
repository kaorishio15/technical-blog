import { posts } from "../data/posts";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <section>
        <p className="mb-4 text-sm text-gray-500">
          Welcome to my blog!
        </p>

        <h1 className="text-4xl font-bold tracking-tight">
          Thoughts, projects, and things I've learned.
        </h1>

        <p className="mt-4 max-w-2xl text-gray-600">
          I write about programming, cybersecurity,
          computer science, and things I'm building.
        </p>
      </section>
    
      <div className="mt-8">
        <Link
          to="/about"
          className="text-sm font-medium underline underline-offset-4 hover:opacity-70"
        >
          Curious about how I made this site? Click here →
        </Link>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">
          Latest Posts
        </h2>

        <div className="mt-8 space-y-8">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              post={post}
            />
          ))}
        </div>
      </section>
    </main>
  );
}