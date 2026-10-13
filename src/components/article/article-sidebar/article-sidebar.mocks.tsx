import { createArticleMock } from "@/framework";

import { ArticleSidebarProps } from "./article-sidebar";

export function createArticleSidebarPropsMock(): ArticleSidebarProps {
  return {
    article: createArticleMock(),
  };
}
