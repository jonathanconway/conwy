import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "the-design-of-everyday-things",
  authors: ["Don Norman"],
  status: BookStatuses.Finished,
  title: "The Design Of Everyday Things",
  url: "https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things",
  category: BookCategories.Design,
};
