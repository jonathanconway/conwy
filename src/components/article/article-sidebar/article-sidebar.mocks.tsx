import { createArticleMock } from "@/framework/client";

import { ArticleSidebarProps } from "./article-sidebar";

export function createArticleSidebarPropsMock(): ArticleSidebarProps {
  return {
    article: createArticleMock(),
  };
}
