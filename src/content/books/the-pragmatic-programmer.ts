import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const thePragmaticProgrammerBook: Book = {
  meta: {
    type: "book",
    slug: "the-pragmatic-programmer",
    authors: ["Andrew Hunt"],
    status: BookStatuses.Finished,
    title: "The Pragmatic Programmer - From Journeyman To Master",
    url: "https://en.wikipedia.org/wiki/The_Pragmatic_Programmer",
    category: BookCategories.SoftwareDevelopment,
  },
};
