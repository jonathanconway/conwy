import { orderBy } from "lodash";

import { Article } from "./article";
import { ArticleMeta } from "./article-meta";

export function sortArticleMetas(articles: readonly ArticleMeta[]) {
  return orderBy(articles, "date", "desc");
}

export function getArticleMetas(articles: Record<string, Article>) {
  return sortArticleMetas(
    Object.values(articles).map((article) => article.meta),
  );
}
