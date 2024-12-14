import { MDXContent } from "mdx/types";

import { PageMeta } from "./page-meta";

export interface Page {
  readonly meta: PageMeta;
  readonly content: MDXContent;
}
