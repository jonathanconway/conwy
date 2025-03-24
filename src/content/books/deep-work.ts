import { Book, BookCategories, BookStatuses } from "@/framework/client";

export const deepWorkBook: Book = {
  slug: "deep-work",
  authors: ["Cal Newport"],
  status: BookStatuses.Finished,
  title: "Deep Work",
  url: "https://calnewport.com/deep-work-rules-for-focused-success-in-a-distracted-world/",
  category: BookCategories.SelfHelp,
};
