import { Book, BookCategories, BookStatuses } from "@/framework/client";

export const domainModelingMadeFunctionalBook: Book = {
  authors: ["Walter Willett"],
  status: BookStatuses.Listed,
  title: "Eat, Drink and Be Healthy",
  url: "https://nutritionsource.hsph.harvard.edu/2017/10/15/eat-drink-and-be-healthy-willett/",
  category: BookCategories.Diet,
};
