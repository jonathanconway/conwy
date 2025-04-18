import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const theRationalOptimistBook: Book = {
  meta: {
    type: "book",
    slug: "the-rational-optimist",
    authors: ["Matt Ridley"],
    status: BookStatuses.Finished,
    title: "The Rational Optimist",
    url: "https://en.wikipedia.org/wiki/The_Rational_Optimist",
    category: BookCategories.History,
  },
};
