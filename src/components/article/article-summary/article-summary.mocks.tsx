import { createArticleMetaMock } from "@/framework/client";

export function createArticleSummaryPropsMock() {
  return {
    article: {
      meta: createArticleMetaMock(),
      content: () => <></>,
      summary: () => <>This is a summary.</>,
    },
  };
}
