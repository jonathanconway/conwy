import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const macintoshWayBook: Book = {
  meta: {
    type: "book",
    slug: "macintosh-way",
    authors: ["Guy Kawasaki"],
    status: BookStatuses.Listed,
    title: "The Macintosh Way",
    url: "https://en.wikipedia.org/wiki/The_Macintosh_Way",
    category: BookCategories.Business,
  },
};
