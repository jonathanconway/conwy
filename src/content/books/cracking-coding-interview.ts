import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const crackingCodingInterviewBook: Book = {
  meta: {
    type: "book",
    slug: "cracking-coding-interview",
    authors: ["Gayle Laakmann"],
    status: BookStatuses.Reading,
    title: "Cracking the Coding Interview",
    url: "https://www.crackingthecodinginterview.com",
    category: BookCategories.SoftwareDevelopment,
  },
};
