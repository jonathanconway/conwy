import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "the-rational-optimist",
  authors: ["Matt Ridley"],
  status: BookStatuses.Finished,
  title: "The Rational Optimist",
  url: "https://en.wikipedia.org/wiki/The_Rational_Optimist",
  category: BookCategories.History,
};
