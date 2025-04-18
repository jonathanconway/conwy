import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const alchemyBook: Book = {
  meta: {
    type: "book",
    slug: "alchemy",
    authors: ["Rory Sutherland"],
    status: BookStatuses.Finished,
    title: "Alchemy",
    url: "https://www.dymocks.com.au/book/alchemy-by-rory-sutherland-9780753556528",
    category: BookCategories.Psychology,
  },
};
