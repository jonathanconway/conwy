import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const olaudahEquianoBook: Book = {
  meta: {
    type: "book",
    slug: "olaudah-equiano",
    authors: ["Olaudah Equiano"],
    status: BookStatuses.Reading,
    title: "The Interesting Narrative of the Life of Olaudah Equiano",
    url: "https://en.wikisource.org/wiki/The_Interesting_Narrative_of_the_Life_of_Olaudah_Equiano,_or_Gustavus_Vassa,_the_African",
    category: BookCategories.History,
  },
};
