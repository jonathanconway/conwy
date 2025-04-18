import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const advancedReactBook: Book = {
  meta: {
    type: "book",
    slug: "advanced-react",
    authors: ["Nadia Makarevich"],
    status: BookStatuses.Finished,
    title: "Advanced React",
    url: "https://www.advanced-react.com",
    category: BookCategories.SoftwareDevelopment,
  },
};
