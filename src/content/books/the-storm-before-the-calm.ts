import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const theStormBeforeTheCalmBook: Book = {
  meta: {
    type: "book",
    slug: "the-storm-before-the-calm",
    authors: ["George Friedman"],
    status: BookStatuses.Finished,
    title: "The Storm Before The Calm",
    url: "https://geopoliticalfutures.com/books/the-storm-before-the-calm/",
    category: BookCategories.Geopolitics,
  },
};
