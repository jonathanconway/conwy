import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const mrsBeetonsBookOfHouseholdManagementBook: Book = {
  meta: {
    type: "book",
    slug: "mrs-beetons-book-of-household-management",
    authors: ["Isabella Beeton"],
    status: BookStatuses.Reading,
    title: "Mrs. Beeton's Book of Household Management",
    url: "https://en.wikipedia.org/wiki/Mrs._Beeton%27s_Book_of_Household_Management",
    category: BookCategories.Design,
  },
};
