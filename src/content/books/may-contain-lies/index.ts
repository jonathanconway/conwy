import { Book, ContentTypes } from "@/framework";

import { meta } from "./meta";

export const mayContainLiesBook: Book = {
  type: ContentTypes.Book,
  meta,
};
