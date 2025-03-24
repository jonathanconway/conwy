import { Book, BookCategories, BookStatuses } from "@/framework/client";

export const howToReadABook: Book = {
  slug: "how-to-read-a-book",
  authors: ["Mortimer Adler"],
  status: BookStatuses.Listed,
  title: "how-to-read-a-book",
  url: "https://en.wikipedia.org/wiki/How_to_Read_a_Book",
  category: BookCategories.Philosophy,
};
