import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const theDesignOfEverydayThingsBook: Book = {
  meta: {
    type: "book",
    slug: "the-design-of-everyday-things",
    authors: ["Don Norman"],
    status: BookStatuses.Finished,
    title: "The Design Of Everyday Things",
    url: "https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things",
    category: BookCategories.Design,
  },
};
