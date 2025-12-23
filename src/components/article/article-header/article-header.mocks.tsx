import { createArticleMock } from "@/framework/client";

export function createArticleHeaderPropsMock() {
  return { article: createArticleMock() };
}
