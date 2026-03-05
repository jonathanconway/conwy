import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "the-hard-thing-about-hard-things",
  authors: ["Ben Horowitz"],
  status: BookStatuses.Listed,
  title: "The Hard Thing About Hard Things",
  url: "https://a16z.com/books/the-hard-thing-about-hard-things/",
  category: BookCategories.Business,
};
