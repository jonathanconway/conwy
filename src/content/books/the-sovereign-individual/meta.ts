import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "the-sovereign-individual",
  authors: ["James Davidson"],
  status: BookStatuses.Listed,
  title: "The Sovereign Individual",
  url: "https://en.wikipedia.org/wiki/The_Sovereign_Individual",
  category: BookCategories.Politics,
};
