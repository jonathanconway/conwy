import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const howNotToAgeBook: Book = {
  meta: {
    type: "book",
    slug: "how-not-to-age",
    authors: ["Michael Greger"],
    status: BookStatuses.Listed,
    title: "How Not to Age",
    url: "https://nutritionfacts.org/book/how-not-to-age/",
    category: BookCategories.Diet,
  },
};
