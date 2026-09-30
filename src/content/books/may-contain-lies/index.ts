import { Book, ContentTypes } from "@/framework/client";

import { meta } from "./meta";

export const mayContainLiesBook: Book = {
  type: ContentTypes.Book,
  meta,
};
