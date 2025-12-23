import { Article as Article_ } from "@/framework/client";

import { Stack } from "../stack";

import { ArticleBody } from "./article-body";
import { ArticleDiscussion } from "./article-discussion";
import { ArticleHeader } from "./article-header";
import { ArticleTableOfContents } from "./article-table-of-contents";

export interface ArticleProps {
  readonly article: Article_;
}

export function Article({ article }: ArticleProps) {
  return (
    <Stack gap={2}>
      <ArticleHeader article={article} />

      <ArticleTableOfContents article={article} />

      <ArticleBody article={article} />

      <ArticleDiscussion article={article} />
    </Stack>
  );
}
