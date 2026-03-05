import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "the-book-of-five-rings",
  authors: ["Miyamoto Musashi"],
  status: BookStatuses.Finished,
  title: "The Book Of Five Rings",
  url: "https://en.wikipedia.org/wiki/The_Book_of_Five_Rings",
  category: BookCategories.SelfHelp,
};
