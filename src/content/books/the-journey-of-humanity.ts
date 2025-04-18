import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const theJourneyOfHumanityBook: Book = {
  meta: {
    type: "book",
    slug: "the-journey-of-humanity",
    authors: ["Oded Galor"],
    status: BookStatuses.Listed,
    title: "The Journey of Humanity",
    url: "https://www.penguinrandomhouse.com/books/679024/the-journey-of-humanity-by-oded-galor/",
    category: BookCategories.History,
  },
};
