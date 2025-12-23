import { createArticleMock } from "../article";
import { createMicroMock } from "../micro";

import { Post } from "./post";

export function createPostMocks(): readonly Post[] {
  return [createArticleMock(), createMicroMock()];
}
