import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const theGreatMentalModelsBook: Book = {
  meta: {
    type: "book",
    slug: "the-great-mental-models",
    authors: ["Shane Parrish"],
    status: BookStatuses.Finished,
    title: "The Great Mental Models",
    url: "https://fs.blog/books/",
    category: BookCategories.Economics,
  },
};
