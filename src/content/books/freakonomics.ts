import { Book, BookCategories, BookStatuses } from "@/framework/client";

export const freakonomicsBook: Book = {
  authors: ["Steven Levity"],
  status: BookStatuses.Finished,
  title: "Freakonomics",
  url: "https://en.wikipedia.org/wiki/Freakonomics",
  category: BookCategories.Economics,
};
