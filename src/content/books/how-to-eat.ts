import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const howToEatBook: Book = {
  meta: {
    type: "book",
    slug: "how-to-eat",
    authors: ["Thích Nhất Hạnh"],
    status: BookStatuses.Finished,
    title: "How to Eat",
    url: "https://www.penguinrandomhouse.com/books/545835/how-to-eat-by-thich-nhat-hanh",
    category: BookCategories.SelfHelp,
  },
};
