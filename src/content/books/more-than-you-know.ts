import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const moreThanYouKnowBook: Book = {
  meta: {
    type: "book",
    slug: "more-than-you-know",
    authors: ["Michael Mauboussin"],
    status: BookStatuses.Listed,
    title: "More Than You Know",
    url: "https://archive.org/details/moremorethanyouk0000mich",
    category: BookCategories.Finance,
  },
};
