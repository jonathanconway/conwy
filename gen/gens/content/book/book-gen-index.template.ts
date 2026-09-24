import { BookGenTemplateParams } from "./book-gen-template-params";

export const bookGenIndexTemplate = ({
  nameRootObject,
}: BookGenTemplateParams) =>
  `

import { Book } from "@/framework/content/book";

import { meta } from "./meta";

export const ${nameRootObject}: Book = {
  type: "book",
  meta,
};

`.trim();
