import { createArticleMetaMock } from "@/framework/client";

import { ArticleDiscussionLinkProps } from "./article-discussion-link";

export function createArticleDiscussionLinkPropsMock(): ArticleDiscussionLinkProps {
  return { article: { meta: createArticleMetaMock(), content: () => <></> } };
}
