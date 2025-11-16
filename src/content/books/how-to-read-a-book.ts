import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const howToReadABookBook: Book = {
  meta: {
    type: "book",
    slug: "how-to-read-a-book",
    authors: ["Mortimer Adler"],
    status: BookStatuses.Listed,
    title: "How to Read a Book",
    url: "https://en.wikipedia.org/wiki/How_to_Read_a_Book",
    category: BookCategories.Philosophy,
  },
};
