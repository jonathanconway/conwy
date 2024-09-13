import { MDXContent } from "mdx/types";

import { ArticleMeta } from "./article-meta";

export async function getArticleContent(
  articleMeta: ArticleMeta,
): Promise<MDXContent> {
  return (await import(`@/content/articles/${articleMeta.slug}/content.mdx`))
    .default;
}
