import { Book } from "./book";
import { BookCategories } from "./book-category";
import { BookStatuses } from "./book-status";

export function createBookMock1(): Book {
  return {
    type: "book",
    meta: {
      type: "book",
      slug: "influence",
      authors: ["Robert Cialdini"],
      status: BookStatuses.Finished,
      title: "Influence",
      url: "https://ia800203.us.archive.org/33/items/ThePsychologyOfPersuasion/The%20Psychology%20of%20Persuasion.pdf",
      category: BookCategories.Business,
      commentarySlug: "influence-notes",
    },
  };
}

export function createBookMock2(): Book {
  return {
    type: "book",
    meta: {
      type: "book",
      slug: "introduction-to-mathematical-thinking",
      authors: ["Keith Devlin"],
      status: BookStatuses.Reading,
      title: "Introduction to Mathematical Thinking",
      url: "https://www.amazon.com/Introduction-Mathematical-Thinking-Keith-Devlin",
      category: BookCategories.Mathematics,
    },
  };
}

export function createBookMocks(): readonly Book[] {
  return [createBookMock1(), createBookMock2()];
}
