import { Book, BookCategories, BookStatuses } from "@/framework/client";

export const ofProvidenceBook: Book = {
  slug: "of-providence",
  authors: ["Seneca"],
  status: BookStatuses.Finished,
  title: "Of Providence",
  url: "https://en.wikipedia.org/wiki/De_Providentia",
  category: BookCategories.Philosophy,
};
