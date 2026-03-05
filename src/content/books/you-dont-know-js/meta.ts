import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "you-dont-know-js",
  authors: ["Kyle Simpson"],
  status: BookStatuses.Finished,
  title: "You Don't Know JS",
  url: "https://github.com/getify/You-Dont-Know-JS",
  category: BookCategories.SoftwareDevelopment,
};
