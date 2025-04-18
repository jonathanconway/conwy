import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const theHeartOfTheBuddhasTeachingBook: Book = {
  meta: {
    type: "book",
    slug: "the-heart-of-the-buddhas-teaching",
    authors: ["Thich Nhat Hanh"],
    status: BookStatuses.Finished,
    title: "The Heart Of The Buddhas Teaching",
    url: "https://www.penguin.com.au/books/the-heart-of-buddhas-teaching-9781409020547",
    category: BookCategories.Spirituality,
  },
};
