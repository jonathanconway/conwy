import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const theSuccessEquationBook: Book = {
  meta: {
    type: "book",
    slug: "the-success-equation",
    authors: ["Michael MAUBOUSSIN"],
    status: BookStatuses.Finished,
    title: "The Success Equation",
    url: "https://en.wikipedia.org/wiki/Michael_J._Mauboussin",
    category: BookCategories.Business,
  },
};
