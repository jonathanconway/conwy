import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const sandTalkBook: Book = {
  meta: {
    type: "book",
    slug: "sand-talk",
    authors: ["Tyson Yunkaporta"],
    status: BookStatuses.Finished,
    title: "Sand Talk",
    url: "https://en.wikipedia.org/wiki/Sand_Talk",
    category: BookCategories.Philosophy,
  },
};
