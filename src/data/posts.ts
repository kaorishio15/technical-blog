import type { ComponentType } from "react";

type Frontmatter = {
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
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
  component: ComponentType;
};

const postModules = import.meta.glob(
  "../content/posts/*.mdx",
  {
    eager: true,
  },
);

export const posts: Post[] = Object.entries(postModules).map(
  ([path, module]) => {
    const filename = path.split("/").pop() ?? "";
    const slug = filename.replace(".mdx", "");

    const postModule = module as PostModule;

    return {
      slug,
      title: postModule.frontmatter?.title ?? "",
      description:
        postModule.frontmatter?.description ?? "",
      date: postModule.frontmatter?.date ?? "",
      tags: postModule.frontmatter?.tags ?? [],
      component: postModule.default,
    };
  },
);