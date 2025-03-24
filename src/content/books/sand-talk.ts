import { Book, BookCategories, BookStatuses } from "@/framework/client";

export const sandTalkBook: Book = {
  slug: "sand-talk",
  authors: ["Tyson Yunkaporta"],
  status: BookStatuses.Finished,
  title: "Sand Talk",
  url: "https://en.wikipedia.org/wiki/Sand_Talk",
  category: BookCategories.Philosophy,
};
