import { Book, ContentTypes } from "@/framework/client";

import { meta } from "./meta";

export const onWritingBook: Book = {
  type: ContentTypes.Book,
  meta,
};
