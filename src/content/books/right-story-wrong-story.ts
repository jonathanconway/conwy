import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const rightStoryWrongStoryBook: Book = {
  meta: {
    type: "book",
    slug: "right-story-wrong-story",
    authors: ["Tyson Yunkaporta"],
    status: BookStatuses.Finished,
    title: "Right Story, Wrong Story",
    url: "https://www.textpublishing.com.au/books/right-story-wrong-story-adventures-in-indigenous-thinking",
    category: BookCategories.Philosophy,
  },
};
