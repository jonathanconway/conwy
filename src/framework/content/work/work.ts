import { MDXContent } from "mdx/types";

import { WorkMeta } from "./work-meta";

export interface Work {
  readonly meta: WorkMeta;
  readonly content: MDXContent;
}
