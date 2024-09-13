import { MDXContent } from "mdx/types";

import { ProjectMeta } from "./project-meta";

export interface Project {
  readonly meta: ProjectMeta;
  readonly content: MDXContent;
}
