import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const thinkTwiceBook: Book = {
  meta: {
    type: "book",
    slug: "think-twice",
    authors: ["Michael Mauboussin"],
    status: BookStatuses.Listed,
    title: "Think Twice",
    url: "https://archive.org/details/thinktwiceharnes0000maub",
    category: BookCategories.Finance,
  },
};
