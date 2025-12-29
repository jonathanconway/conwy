import { MDXContent } from "mdx/types";

import { Content } from "../content";

import { PageMeta } from "./page-meta";

export interface Page extends Content<"page", PageMeta> {
  readonly content: MDXContent;
}
