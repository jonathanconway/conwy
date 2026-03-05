import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "investments",
  authors: ["Zvi Bodie", "Alex Kane", "Alan Marcus"],
  status: BookStatuses.Reading,
  title: "Investments",
  url: "https://zvibodie.com/book/investments",
  category: BookCategories.Finance,
};
