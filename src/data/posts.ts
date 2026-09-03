import type { ComponentType } from "react";

type Frontmatter = {
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
  category?: string;
  cover?: string;
  featured?: boolean;
  staffPick?: boolean;
};

type PostModule = {
  default: ComponentType;
  frontmatter?: Frontmatter;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: string;
  cover: string;
  featured: boolean;
  staffPick: boolean;
  component: ComponentType;
};

const postModules = import.meta.glob("../content/posts/*.mdx", {
  eager: true,
});

export const posts: Post[] = Object.entries(postModules)
  .map(([path, module]) => {
    const filename = path.split("/").pop() ?? "";
    const slug = filename.replace(".mdx", "");
    const postModule = module as PostModule;
    const tags = postModule.frontmatter?.tags ?? [];

    return {
      slug,
      title: postModule.frontmatter?.title ?? "",
      description: postModule.frontmatter?.description ?? "",
      date: postModule.frontmatter?.date ?? "",
      tags,
      category: postModule.frontmatter?.category ?? tags[0] ?? "",
      cover: postModule.frontmatter?.cover ?? "",
      featured: postModule.frontmatter?.featured ?? false,
      staffPick: postModule.frontmatter?.staffPick ?? false,
      component: postModule.default,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const featuredPost =
  posts.find((post) => post.featured) ?? posts[0];

export const staffPicks = posts.filter((post) => post.staffPick);

export const latestPosts = posts.filter(
  (post) => post.slug !== featuredPost?.slug,
);
