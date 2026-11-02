import { BookGenTemplateParams } from "./book-gen-template-params";

export const bookGenMetaTemplate = ({
  slug,
  title,
  authors,
  urlItem,
  categoryEnumName,
}: BookGenTemplateParams) =>
  `

import { BookCategories, BookMeta, BookStatuses } from "@/framework/content/book";

export const meta: BookMeta = {
  slug: "${slug}",
  authors: [${authors.map((author) => `"${author}"`).join(", ")}],
  status: BookStatuses.Listed,
  title: "${title}",
  url: ${urlItem},
  category: BookCategories.${categoryEnumName},
};

`.trim();
