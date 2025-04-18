import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const deepWorkBook: Book = {
  meta: {
    type: "book",
    slug: "deep-work",
    authors: ["Cal Newport"],
    status: BookStatuses.Finished,
    title: "Deep Work",
    url: "https://calnewport.com/deep-work-rules-for-focused-success-in-a-distracted-world/",
    category: BookCategories.SelfHelp,
  },
};
