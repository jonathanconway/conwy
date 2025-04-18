import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const fullCatastropheLivingBook: Book = {
  meta: {
    type: "book",
    slug: "full-catastrophe-living",
    authors: ["Jon Kabat-Zinn"],
    status: BookStatuses.Finished,
    title: "Full Catastrophe Living",
    url: "https://en.wikipedia.org/wiki/Full_Catastrophe_Living",
    category: BookCategories.Spirituality,
  },
};
