import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "the-millionaire-next-door",
  authors: ["Thomas Stanley"],
  status: BookStatuses.Finished,
  title: "The Millionaire Next Door",
  url: "https://en.wikipedia.org/wiki/The_Millionaire_Next_Door",
  category: BookCategories.Finance,
};
