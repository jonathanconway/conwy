import { Article } from "@/framework/client";

import { ArticleDiscussionInlineGisqus } from "./article-discussion-inline-gisqus";

export interface ArticleDiscussionInlineProps {
  readonly article: Article;
}

export function ArticleDiscussionInline(props: ArticleDiscussionInlineProps) {
  return <ArticleDiscussionInlineGisqus />;
}
