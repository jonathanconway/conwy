import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const upheavalBook: Book = {
  meta: {
    type: "book",
    slug: "upheaval",
    authors: ["Jared Diamond"],
    status: BookStatuses.Finished,
    title: "Upheaval",
    url: "https://en.wikipedia.org/wiki/Upheaval_(book)",
    category: BookCategories.History,
  },
};
