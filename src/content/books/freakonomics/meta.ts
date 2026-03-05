import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "freakonomics",
  authors: ["Steven Levity"],
  status: BookStatuses.Finished,
  title: "Freakonomics",
  url: "https://en.wikipedia.org/wiki/Freakonomics",
  category: BookCategories.Economics,
};
