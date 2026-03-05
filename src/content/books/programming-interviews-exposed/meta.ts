import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "programming-interviews-exposed",
  authors: ["John Mongan", "Noah Suojanen", "Eric Giguère"],
  status: BookStatuses.Reading,
  title: "Programming Interviews Exposed",
  url: "https://www.oreilly.com/library/view/programming-interviews-exposed/9781119418474/",
  category: BookCategories.SoftwareDevelopment,
};
