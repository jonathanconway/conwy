import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "tao-te-ching",
  authors: ["Lao Tzu"],
  status: BookStatuses.Finished,
  title: "Tao Te Ching",
  url: "https://en.wikipedia.org/wiki/Tao_Te_Ching",
  category: BookCategories.Spirituality,
};
