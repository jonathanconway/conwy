import { BookGenTemplateParams } from "./book.params";

export const bookGen = ({
  name,
  nameRootObject,
  title,
  authors,
  url,
  categoryEnumName,
}: BookGenTemplateParams) =>
  `

import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const ${nameRootObject}: Book = {
  meta: {
    type: "book",
    slug: "${name}",
    authors: [${authors.map((author) => `"${author}"`).join(", ")}],
    status: BookStatuses.Listed,
    title: "${title}",${
      url
        ? `
    url: "${url}",`
        : ""
    }
    category: BookCategories.${categoryEnumName},
  },
};

`.trim();
