import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const freakonomicsBook: Book = {
  meta: {
    type: "book",
    slug: "freakonomics",
    authors: ["Steven Levity"],
    status: BookStatuses.Finished,
    title: "Freakonomics",
    url: "https://en.wikipedia.org/wiki/Freakonomics",
    category: BookCategories.Economics,
  },
};
