import { createArticleMetaMock } from "@/framework/client";

export function createArticleHeaderPropsMock() {
  return { article: { meta: createArticleMetaMock(), content: () => <></> } };
}
