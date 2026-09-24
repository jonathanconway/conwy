import { BookGenTemplateParams } from "./book-gen-template-params";

export const bookGenMetaTemplate = ({
  slug,
  nameRootObject,
  title,
  authors,
  url,
  categoryEnumName,
}: BookGenTemplateParams) =>
  `

import { BookCategories, BookMeta, BookStatuses } from "@/framework/content/book";

export const meta: BookMeta = {
  slug: "${slug}",
  authors: [${authors.map((author) => `"${author}"`).join(", ")}],
  status: BookStatuses.Listed,
  title: "${title}",
  ${
    url
      ? `
  url: "${url}",`
      : ""
  }
  category: BookCategories.${categoryEnumName},
};

`.trim();
