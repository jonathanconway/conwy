import { createArticleMock } from "@/framework/client";

import { ArticleDiscussionLinkProps } from "./article-discussion-links";

export function createArticleDiscussionLinkPropsMock(): ArticleDiscussionLinkProps {
  return { article: createArticleMock() };
}
