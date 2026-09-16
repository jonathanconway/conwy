import { JSX } from "react";

import { Content } from "../content";
import { ContentTypes } from "../content-type";

import { ArticleMeta } from "./article-meta";

export interface Article
  extends Content<typeof ContentTypes.Article, ArticleMeta> {
  readonly content: JSX.Element;
}
