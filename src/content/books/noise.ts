import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const noiseBook: Book = {
  meta: {
    type: "book",
    slug: "noise",
    authors: ["Daniel Kahneman", "Oliver Sibony", "Cass Sunstein"],
    status: BookStatuses.Listed,
    title: "Noise: A Flaw in Human Judgment",
    url: "https://en.wikipedia.org/wiki/Noise:_A_Flaw_in_Human_Judgment",
    category: BookCategories.Psychology,
  },
};
