import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const aHistoryOfWesternPhilosophyBook: Book = {
  meta: {
    type: "book",
    slug: "a-history-of-western-philosophy",
    authors: ["Bertrand Russell"],
    status: BookStatuses.Reading,
    title: "A History of Western Philosophy",
    url: "https://en.wikipedia.org/wiki/A_History_of_Western_Philosophy",
    category: BookCategories.Philosophy,
  },
};
