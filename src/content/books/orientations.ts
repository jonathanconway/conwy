import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const orientationsBook: Book = {
  meta: {
    type: "book",
    slug: "orientations",
    authors: ["Pierre Boulez"],
    status: BookStatuses.Listed,
    title: "Orientations",
    url: "https://www.hup.harvard.edu/books/9780674643765",
    category: BookCategories.Music,
  },
};
