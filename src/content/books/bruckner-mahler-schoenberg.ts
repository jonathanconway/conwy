import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const brucknerMahlerSchoenbergBook: Book = {
  meta: {
    type: "book",
    slug: "bruckner-mahler-schoenberg",
    authors: ["Dika Newlin"],
    status: BookStatuses.Listed,
    title: "Bruckner Mahler Schoenberg",
    url: "https://mahlerfoundation.org/mahler/books/bruckner-mahler-schoenberg/",
    category: BookCategories.Music,
  },
};
