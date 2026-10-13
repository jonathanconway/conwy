import { Book, ContentTypes } from "@/framework";

import { meta } from "./meta";

export const onWritingBook: Book = {
  type: ContentTypes.Book,
  meta,
};
