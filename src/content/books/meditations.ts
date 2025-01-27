import { Book, BookCategories, BookStatuses } from "@/framework/client";

export const meditationsBook: Book = {
  authors: ["Marcus Aurelius"],
  status: BookStatuses.Finished,
  title: "Meditations",
  url: "https://en.wikipedia.org/wiki/Meditations",
  category: BookCategories.Philosophy,
};
