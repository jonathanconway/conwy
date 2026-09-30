import { Book, ContentTypes } from "@/framework/client";

import { meta } from "./meta";

export const tidyFirstBook: Book = {
  type: ContentTypes.Book,
  meta,
};
