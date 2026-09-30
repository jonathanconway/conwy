import { Book, ContentTypes } from "@/framework/client";

import { meta } from "./meta";

export const collapseBook: Book = {
  type: ContentTypes.Book,
  meta,
};
