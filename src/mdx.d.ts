// tells TypeScript that .mdx files are vaild modules in this project
declare module "*.mdx" {
  import type { ComponentType } from "react";

  const MDXComponent: ComponentType;
  export default MDXComponent;
}