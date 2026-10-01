import { BookGenTemplateParams } from "./book-gen-template-params";

export const bookGenIndexTemplate = ({
  nameRootObject,
}: BookGenTemplateParams) =>
  `

import { Book, ContentTypes } from "@/framework/client";

import { meta } from "./meta";

export const ${nameRootObject}: Book = {
  type: ContentTypes.Book,
  meta,
};

`.trim();
