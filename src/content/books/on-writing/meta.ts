import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "on-writing",
  authors: ["Stephen King"],
  status: BookStatuses.Listed,
  title: "On Writing: A Memoir of the Craft",
  url: "https://en.wikipedia.org/wiki/On_Writing:_A_Memoir_of_the_Craft",
  category: BookCategories.Writing,
};
