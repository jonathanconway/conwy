import { load as cheerioLoad } from "cheerio";
import { kebabCase } from "lodash";
import { marked } from "marked";

import { ArticleMetaExtensions } from "./article-meta-extensions";

export async function generateArticleMetaExtensions(
  articleContentMd: string,
): Promise<ArticleMetaExtensions> {
  const articleContentMdHtml = await marked(articleContentMd);
  const articleContentMd$ = cheerioLoad(articleContentMdHtml);

  const headingEls = articleContentMd$("h2").toArray();

  const articleHeadingTitles = headingEls.map((headingEl) =>
    articleContentMd$(headingEl).text(),
  );

  const articleHeadings = [
    { id: "top", title: "Intro" },
    ...articleHeadingTitles.map((title) => ({
      title,
      id: kebabCase(title),
      shortTitle: title,
    })),
  ];

  return {
    articleHeadings,
  };
}
