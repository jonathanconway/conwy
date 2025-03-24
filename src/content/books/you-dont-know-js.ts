import { Book, BookCategories, BookStatuses } from "@/framework/client";

export const youDontKnowJsBook: Book = {
  slug: "you-dont-know-js",
  authors: ["Kyle Simpson"],
  status: BookStatuses.Finished,
  title: "You Don't Know JS",
  url: "https://github.com/getify/You-Dont-Know-JS",
  category: BookCategories.SoftwareDevelopment,
};
