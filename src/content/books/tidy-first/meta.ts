import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "tidy-first",
  authors: ["Kent Beck"],
  status: BookStatuses.Listed,
  title: "Tidy First?",
  url: "https://www.oreilly.com/library/view/tidy-first/9781098151232/",
  category: BookCategories.SoftwareDevelopment,
};
