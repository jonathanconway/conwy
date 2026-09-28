import { JSX } from "react";

import { ContentBase } from "../content-base";
import { ContentTypes } from "../content-type";

import { ArticleMeta } from "./article-meta";

export interface Article
  extends ContentBase<typeof ContentTypes.Article, ArticleMeta> {
  readonly content: JSX.Element;
}
