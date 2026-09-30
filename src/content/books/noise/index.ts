import { Book, ContentTypes } from "@/framework/client";

import { meta } from "./meta";

export const noiseBook: Book = {
  type: ContentTypes.Book,
  meta,
};
