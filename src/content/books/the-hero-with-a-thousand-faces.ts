import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const theHeroWithAThousandFacesBook: Book = {
  meta: {
    type: "book",
    slug: "the-hero-with-a-thousand-faces",
    authors: ["Joseph Campbell"],
    status: BookStatuses.Listed,
    title: "The Hero With A Thousand Faces",
    url: "https://en.wikipedia.org/wiki/The_Hero_with_a_Thousand_Faces",
    category: BookCategories.Culture,
  },
};
