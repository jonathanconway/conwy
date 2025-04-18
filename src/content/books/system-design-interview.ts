import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const systemDesignInterviewBook: Book = {
  meta: {
    type: "book",
    slug: "system-design-interview",
    authors: ["Alex Xu"],
    status: BookStatuses.Reading,
    title: "System Design Interview: An Insider’s Guide",
    url: "https://bytebytego.com",
    category: BookCategories.SoftwareDevelopment,
  },
};
