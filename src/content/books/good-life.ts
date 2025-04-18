import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const goodLifeBook: Book = {
  meta: {
    type: "book",
    slug: "good-life",
    authors: ["Robert Waldinger", "Marc Schulz"],
    status: BookStatuses.Reading,
    title: "The Good Life",
    url: "https://www.penguin.com.au/books/the-good-life-9781846046780",
    category: BookCategories.Psychology,
  },
};
