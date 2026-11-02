import { Article as Article_ } from "@/framework";

import { PostDiscussion } from "../post/post-discussion";
import { Stack } from "../stack";

import { ArticleBody } from "./article-body";
import { ArticleImage } from "./article-image";
import { ArticleSubHeader } from "./article-subheader";
import { ArticleTableOfContents } from "./article-table-of-contents";

export interface ArticleProps {
  readonly article: Article_;
}

export function Article({ article }: ArticleProps) {
  return (
    <Stack gap={1}>
      <ArticleImage article={article} />

      <ArticleSubHeader article={article} />

      <ArticleTableOfContents article={article} />

      <ArticleBody article={article} />

      <PostDiscussion post={article} />
    </Stack>
  );
}
