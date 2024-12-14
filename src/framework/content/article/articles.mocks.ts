import {
  createArticleMetaMock,
  createArticleMetaMock2,
} from "./article-meta.mocks";

export function createArticlesMock() {
  return [createArticleMetaMock(), createArticleMetaMock2()];
}
