import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const the80000HoursCareerGuideBook: Book = {
  meta: {
    type: "book",
    slug: "the-80000-hours-career-guide",
    authors: ["Benjamin Todd"],
    status: BookStatuses.Reading,
    title: "The 80000 Hours Career Guide",
    url: "https://80000hours.org/book/",
    category: BookCategories.Business,
  },
};
