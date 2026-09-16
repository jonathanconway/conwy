import { findImportedContent } from "../content-import/content-find-imported";
import { readContentMdx } from "../content-read/content-mdx-read.server";
import { ContentTypes } from "../content-type";
import { Slug } from "../slug";

import { Article } from "./article";
import { generateArticleMetaExtensions } from "./article-meta-extensions";

export async function getArticle(slug: Slug): Promise<Article> {
  const articles = await import("@/content/articles");

  const articleImported = findImportedContent<Article>(
    articles,
    ContentTypes.Article,
    slug,
  );

  const articleMd = readContentMdx(ContentTypes.Article, slug);

  const extensions = await generateArticleMetaExtensions(articleMd);

  const article = {
    ...articleImported,
    meta: {
      ...articleImported.meta,
      extensions,
    },
  };

  return article;
}
