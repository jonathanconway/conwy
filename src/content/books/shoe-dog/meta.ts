import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "shoe-dog",
  authors: ["Phil Knight"],
  status: BookStatuses.Listed,
  title: "Shoe Dog",
  url: "https://en.wikipedia.org/wiki/Shoe_Dog",
  category: BookCategories.Business,
};
