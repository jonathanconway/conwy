import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const collapseBook: Book = {
  meta: {
    type: "book",
    slug: "collapse",
    authors: ["Jared Diamond"],
    status: BookStatuses.Finished,
    title: "Collapse",
    url: "https://en.wikipedia.org/wiki/Collapse:_How_Societies_Choose_to_Fail_or_Succeed",
    category: BookCategories.History,
  },
};
