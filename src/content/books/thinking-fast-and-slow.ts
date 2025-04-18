import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const thinkingFastAndSlowBook: Book = {
  meta: {
    type: "book",
    slug: "thinking-fast-and-slow",
    authors: ["Daniel Kahneman"],
    status: BookStatuses.Listed,
    title: "Thinking, Fast and Slow",
    url: "https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow",
    category: BookCategories.Psychology,
  },
};
