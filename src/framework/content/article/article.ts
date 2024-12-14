import { MDXContent } from "mdx/types";

import { ArticleMeta } from "./article-meta";

export interface Article {
  readonly meta: ArticleMeta;
  readonly content: MDXContent;
  readonly summary?: MDXContent;
}
