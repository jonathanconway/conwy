import { Article } from "@/framework/client";

import { ArticleDiscussionInlineDisqus } from "./article-discussion-inline-disqus";

export interface ArticleDiscussionInlineProps {
  readonly article: Article;
}

export function ArticleDiscussionInline(props: ArticleDiscussionInlineProps) {
  return <ArticleDiscussionInlineDisqus articleMeta={props.article.meta} />;
}
