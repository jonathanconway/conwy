import { createArticleMetaMock } from "../article";
import { createMicroMetaMock } from "../micro";

import { Post } from "./post";

export function createPostMocks(): readonly Post[] {
  return [
    {
      meta: createArticleMetaMock(),
    },
    {
      meta: createMicroMetaMock(),
    },
  ];
}
