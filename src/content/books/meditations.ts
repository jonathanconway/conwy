import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const meditationsBook: Book = {
  meta: {
    type: "book",
    slug: "meditations",
    authors: ["Marcus Aurelius"],
    status: BookStatuses.Finished,
    title: "Meditations",
    url: "https://en.wikipedia.org/wiki/Meditations",
    category: BookCategories.Philosophy,
  },
};
