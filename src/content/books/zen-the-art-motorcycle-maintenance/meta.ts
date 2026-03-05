import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "zen-the-art-motorcycle-maintenance",
  authors: ["Robert Pirsig"],
  status: BookStatuses.Listed,
  title: "Zen and The Art Motorcycle Maintenance",
  url: "https://en.wikipedia.org/wiki/Zen_and_the_Art_of_Motorcycle_Maintenance",
  category: BookCategories.SelfHelp,
};
