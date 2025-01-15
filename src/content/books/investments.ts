import { Book, BookCategories, BookStatuses } from "@/framework/client";

export const investmentsBook: Book = {
  authors: ["Zvi Bodie", "Alex Kane", "Alan Marcus"],
  status: BookStatuses.Reading,
  title: "Investments",
  url: "https://zvibodie.com/book/investments",
  category: BookCategories.Finance,
};
