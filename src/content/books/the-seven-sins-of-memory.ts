import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const theSevenSinsOfMemoryBook: Book = {
  meta: {
    type: "book",
    slug: "the-seven-sins-of-memory",
    authors: ["Daniel Schacter"],
    status: BookStatuses.Reading,
    title: "The Seven Sins of Memory",
    url: "https://en.wikipedia.org/wiki/The_Seven_Sins_of_Memory",
    category: BookCategories.Psychology,
  },
};
