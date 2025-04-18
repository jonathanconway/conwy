import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const antifragileBook: Book = {
  meta: {
    type: "book",
    slug: "antifragile",
    authors: ["Nassim Taleb"],
    status: BookStatuses.Reading,
    title: "Antifragile",
    url: "https://en.wikipedia.org/wiki/Antifragile_(book)",
    category: BookCategories.Business,
  },
};
