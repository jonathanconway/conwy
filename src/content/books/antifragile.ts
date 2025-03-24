import { Book, BookCategories, BookStatuses } from "@/framework/client";

export const antifragileBook: Book = {
  slug: "antifragile",
  authors: ["Nassim Taleb"],
  status: BookStatuses.Reading,
  title: "Antifragile",
  url: "https://en.wikipedia.org/wiki/Antifragile_(book)",
  category: BookCategories.Business,
};
