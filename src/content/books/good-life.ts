import { Book, BookCategories, BookStatuses } from "@/framework/client";

export const goodLifeBook: Book = {
  slug: "good-life",
  authors: ["Robert Waldinger", "Marc Schulz"],
  status: BookStatuses.Reading,
  title: "The Good Life",
  url: "https://www.penguin.com.au/books/the-good-life-9781846046780",
  category: BookCategories.Psychology,
};
