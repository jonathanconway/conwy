import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const investmentsBook: Book = {
  meta: {
    type: "book",
    slug: "investments",
    authors: ["Zvi Bodie", "Alex Kane", "Alan Marcus"],
    status: BookStatuses.Reading,
    title: "Investments",
    url: "https://zvibodie.com/book/investments",
    category: BookCategories.Finance,
  },
};
