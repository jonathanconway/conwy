import { JSX } from "react";

import { Content } from "../content";

import { ArticleMeta } from "./article-meta";

export interface Article extends Content<"article", ArticleMeta> {
  readonly content: JSX.Element;
}
