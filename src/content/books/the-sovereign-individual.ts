import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const theSovereignIndividualBook: Book = {
  meta: {
    type: "book",
    slug: "the-sovereign-individual",
    authors: ["James Davidson"],
    status: BookStatuses.Listed,
    title: "The Sovereign Individual",
    url: "https://en.wikipedia.org/wiki/The_Sovereign_Individual",
    category: BookCategories.Politics,
  },
};
