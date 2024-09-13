import { Article as Article_ } from "@/framework/client";

import { ArticleBody } from "./article-body";
import { ArticleDiscussionLink } from "./article-discussion-link";
import { ArticleHeader } from "./article-header";
import { ArticleSummary } from "./article-summary";

export interface ArticleProps {
  readonly article: Article_;
}

export function Article({ article }: ArticleProps) {
  return (
    <>
      <ArticleHeader article={article} />

      <ArticleSummary article={article} />

      <ArticleBody article={article} />

      <ArticleDiscussionLink article={article} />
    </>
  );
}
