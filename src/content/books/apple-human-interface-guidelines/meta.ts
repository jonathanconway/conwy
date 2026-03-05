import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "apple-human-interface-guidelines",
  authors: ["Apple"],
  status: BookStatuses.Listed,
  title: "Apple Human Interface Guidelines",
  url: "https://developer.apple.com/design/human-interface-guidelines",
  category: BookCategories.Design,
};
