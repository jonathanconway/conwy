import { Article as Article_ } from "@/framework/client";

import { PostDiscussion } from "../post/post-discussion";
import { Stack } from "../stack";

import { ArticleBody } from "./article-body";
import { ArticleHeader } from "./article-header";
import { ArticleImage } from "./article-image";
import { ArticleTableOfContents } from "./article-table-of-contents";

export interface ArticleProps {
  readonly article: Article_;
}

export function Article({ article }: ArticleProps) {
  return (
    <Stack gap={2}>
      <ArticleImage article={article} />

      <ArticleHeader article={article} />

      <ArticleTableOfContents article={article} />

      <ArticleBody article={article} />

      <PostDiscussion post={article} />
    </Stack>
  );
}
