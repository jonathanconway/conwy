import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const atlasOfTheHeartBook: Book = {
  meta: {
    type: "book",
    slug: "atlas-of-the-heart",
    authors: ["Brené Brown"],
    status: BookStatuses.Finished,
    title: "Atlas of the Heart",
    url: "Atlas of the Heart [Brené Brown].pdf",
    category: BookCategories.Psychology,
  },
};
