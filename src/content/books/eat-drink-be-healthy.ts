import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const eatDrinkBeHealthyBook: Book = {
  meta: {
    type: "book",
    slug: "eat-drink-be-healthy",
    authors: ["Walter Willett"],
    status: BookStatuses.Finished,
    title: "Eat, Drink and Be Healthy",
    url: "https://nutritionsource.hsph.harvard.edu/2017/10/15/eat-drink-and-be-healthy-willett/",
    category: BookCategories.Diet,
  },
};
