import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const aesopsFablesBook: Book = {
  meta: {
    type: "book",
    slug: "aesops-fables",
    authors: ["Aesop"],
    status: BookStatuses.Reading,
    title: "Aesop's Fables",
    url: "https://en.wikipedia.org/wiki/Aesop's_Fables",
    category: BookCategories.SelfHelp,
  },
};
