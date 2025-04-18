import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const numbersDontLieBook: Book = {
  meta: {
    type: "book",
    slug: "numbers-dont-lie",
    authors: ["Vaclav Smil"],
    status: BookStatuses.Finished,
    title: "Numbers Don't Lie",
    url: "https://www.penguinrandomhouse.com/books/663649/numbers-dont-lie-by-vaclav-smil/",
    category: BookCategories.Science,
  },
};
