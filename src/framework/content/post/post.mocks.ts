import { createArticleMock } from "../article";
import { createMicroMock } from "../micro";

import { Post } from "./post";

export function createPostMock(): Post {
  return createArticleMock();
}

export function createPostMocks(): readonly Post[] {
  return [createArticleMock(), createMicroMock()];
}
