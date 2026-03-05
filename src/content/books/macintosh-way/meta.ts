import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "macintosh-way",
  authors: ["Guy Kawasaki"],
  status: BookStatuses.Listed,
  title: "The Macintosh Way",
  url: "https://en.wikipedia.org/wiki/The_Macintosh_Way",
  category: BookCategories.Business,
};
