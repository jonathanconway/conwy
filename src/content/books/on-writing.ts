import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const onWritingBook: Book = {
  meta: {
    type: "book",
    slug: "on-writing",
    authors: ["Stephen King"],
    status: BookStatuses.Listed,
    title: "On Writing: A Memoir of the Craft",
    url: "https://en.wikipedia.org/wiki/On_Writing:_A_Memoir_of_the_Craft",
    category: BookCategories.Writing,
  },
};
