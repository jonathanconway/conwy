import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const howTheWorldReallyWorksBook: Book = {
  meta: {
    type: "book",
    slug: "how-the-world-really-works",
    authors: ["Vaclav Smil"],
    status: BookStatuses.Finished,
    title: "How the World Really Works",
    url: "https://www.penguin.com.au/books/how-the-world-really-works-9780241989678",
    category: BookCategories.Science,
  },
};
