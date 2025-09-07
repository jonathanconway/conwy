import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const theBookOfFiveRingsBook: Book = {
  meta: {
    type: "book",
    slug: "the-book-of-five-rings",
    authors: ["Miyamoto Musashi"],
    status: BookStatuses.Finished,
    title: "The Book Of Five Rings",
    url: "https://en.wikipedia.org/wiki/The_Book_of_Five_Rings",
    category: BookCategories.SelfHelp,
  },
};
