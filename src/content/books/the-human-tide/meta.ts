import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "the-human-tide",
  authors: ["Paul Morland"],
  status: BookStatuses.Finished,
  title: "The Human Tide",
  url: "https://www.paulmorland.co.uk/the-human-tide",
  category: BookCategories.History,
};
