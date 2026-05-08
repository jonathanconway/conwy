import { importContentBySlug } from "../content-import-by-slug";
import { readContentMdx } from "../content-mdx-read.server";
import { ContentTypes } from "../content-types";
import { Slug } from "../slug";

import { Article } from "./article";
import { generateArticleMetaExtensions } from "./article-meta-extensions";

export async function getArticle(slug: Slug): Promise<Article> {
  const articles = await import("@/content/articles");

  const articleImported = importContentBySlug<Article>(
    articles,
    "article",
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
