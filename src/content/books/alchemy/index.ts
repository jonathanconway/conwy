import { Book, ContentTypes } from "@/framework/client";

import { meta } from "./meta";

export const alchemyBook: Book = {
  type: ContentTypes.Book,
  meta,
};
