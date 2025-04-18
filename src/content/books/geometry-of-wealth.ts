import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const geometryOfWealthBook: Book = {
  meta: {
    type: "book",
    slug: "geometry-of-wealth",
    authors: ["Brian Portnoy"],
    status: BookStatuses.Finished,
    title: "The Geometry of Wealth",
    url: "https://www.amazon.com.au/Geometry-Wealth-shape-money-meaning",
    category: BookCategories.Finance,
  },
};
