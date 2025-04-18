import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const thePowerOfNowBook: Book = {
  meta: {
    type: "book",
    slug: "the-power-of-now",
    authors: ["Ekhart Tolle"],
    status: BookStatuses.Reading,
    title: "The Power Of Now",
    url: "https://en.wikipedia.org/wiki/The_Power_of_Now",
    category: BookCategories.Spirituality,
  },
};
