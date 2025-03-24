import { Book, BookCategories, BookStatuses } from "@/framework/client";

export const macintoshWayBook: Book = {
  slug: "macintosh-way",
  authors: ["Guy Kawasaki"],
  status: BookStatuses.Listed,
  title: "The Macintosh Way",
  url: "https://en.wikipedia.org/wiki/The_Macintosh_Way",
  category: BookCategories.Business,
};
