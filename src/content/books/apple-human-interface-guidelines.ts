import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const appleHumanInterfaceGuidelinesBook: Book = {
  meta: {
    type: "book",
    slug: "apple-human-interface-guidelines",
    authors: ["Apple"],
    status: BookStatuses.Listed,
    title: "Apple Human Interface Guidelines",
    url: "https://developer.apple.com/design/human-interface-guidelines",
    category: BookCategories.Design,
  },
};
