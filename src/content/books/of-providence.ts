import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const ofProvidenceBook: Book = {
  meta: {
    type: "book",
    slug: "of-providence",
    authors: ["Seneca"],
    status: BookStatuses.Finished,
    title: "Of Providence",
    url: "https://en.wikipedia.org/wiki/De_Providentia",
    category: BookCategories.Philosophy,
  },
};
