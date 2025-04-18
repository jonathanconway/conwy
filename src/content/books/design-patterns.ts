import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const designPatternsBook: Book = {
  meta: {
    type: "book",
    slug: "design-patterns",
    authors: ["Erich Gamma"],
    status: BookStatuses.Finished,
    title: "Design Patterns - Elements of Reusable Object-Oriented Software",
    url: "https://en.wikipedia.org/wiki/Design_Patterns",
    category: BookCategories.SoftwareDevelopment,
  },
};
