import { Article } from "@/framework";

import { ArticleDiscussionInline } from "./article-discussion-inline";
import { ArticleDiscussionLink } from "./article-discussion-links";

export interface ArticleDiscussionProps {
  readonly article: Article;
}

export function ArticleDiscussion(props: ArticleDiscussionProps) {
  return (
    <>
      <ArticleDiscussionLink article={props.article} />
      <ArticleDiscussionInline article={props.article} />
    </>
  );
}
