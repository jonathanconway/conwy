import { createArticleMetaMock } from "@/framework/client";

import { ArticleSidebarProps } from "./article-sidebar";

export function createArticleSidebarPropsMock(): ArticleSidebarProps {
  return {
    article: {
      content: () => <></>,
      meta: createArticleMetaMock(),
    },
  };
}
