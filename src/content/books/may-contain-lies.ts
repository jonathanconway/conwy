import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const mayContainLies: Book = {
  meta: {
    type: "book",
    slug: "may-contain-lies",
    authors: ["Alex Edmans"],
    status: BookStatuses.Listed,
    title: "May Contain Lies",
    url: "https://maycontainlies.com",
    category: BookCategories.Psychology,
  },
};
