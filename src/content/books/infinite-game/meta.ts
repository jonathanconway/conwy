import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "infinite-game",
  authors: ["Simon Sinek"],
  status: BookStatuses.Finished,
  title: "The Infinite Game",
  url: "https://en.wikipedia.org/wiki/The_Infinite_Game",
  category: BookCategories.SelfHelp,
};
