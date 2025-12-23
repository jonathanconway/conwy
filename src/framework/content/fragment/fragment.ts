import { MDXContent } from "mdx/types";

/**
 * A `Fragment` is a piece of generic content that can be re-used anywhere within the site.
 */
export interface Fragment {
  readonly content: MDXContent;
}
