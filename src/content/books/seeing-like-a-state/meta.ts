import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "seeing-like-a-state",
  authors: ["James Scott"],
  status: BookStatuses.Listed,
  title: "Seeing Like a State",
  url: "https://en.wikipedia.org/wiki/Seeing_Like_a_State",
  category: BookCategories.Politics,
};
