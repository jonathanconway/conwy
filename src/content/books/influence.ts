import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const influenceBook: Book = {
  meta: {
    type: "book",
    slug: "influence",
    authors: ["Robert Cialdini"],
    status: BookStatuses.Finished,
    title: "Influence",
    url: "https://ia800203.us.archive.org/33/items/ThePsychologyOfPersuasion/The%20Psychology%20of%20Persuasion.pdf",
    category: BookCategories.Business,
  },
};
