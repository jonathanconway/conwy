import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const positivePsychologyBook: Book = {
  meta: {
    type: "book",
    slug: "positive-psychology",
    authors: ["Suzy Green", "Stephen Palmer"],
    status: BookStatuses.Reading,
    title: "Positive Psychology Coaching in Practice",
    url: "https://instituteofcoaching.org/book-release-positive-psychology-coaching-practice-suzy-green-and-stephen-palmer",
    category: BookCategories.Psychology,
  },
};
