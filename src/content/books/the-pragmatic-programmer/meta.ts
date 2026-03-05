import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "the-pragmatic-programmer",
  authors: ["Andrew Hunt"],
  status: BookStatuses.Finished,
  title: "The Pragmatic Programmer - From Journeyman To Master",
  url: "https://en.wikipedia.org/wiki/The_Pragmatic_Programmer",
  category: BookCategories.SoftwareDevelopment,
};
