import { Book, BookCategories, BookStatuses } from "@/framework/client";

export const collapseBook: Book = {
  slug: "collapse",
  authors: ["Jared Diamond"],
  status: BookStatuses.Finished,
  title: "Collapse",
  url: "https://en.wikipedia.org/wiki/Collapse:_How_Societies_Choose_to_Fail_or_Succeed",
  category: BookCategories.History,
};
