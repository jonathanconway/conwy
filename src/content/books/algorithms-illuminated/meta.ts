import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "algorithms-illuminated",
  authors: ["Tim Roughgarden"],
  status: BookStatuses.Reading,
  title: "Algorithms Illuminated",
  url: "https://algorithmsilluminated.org",
  category: BookCategories.SoftwareDevelopment,
};
