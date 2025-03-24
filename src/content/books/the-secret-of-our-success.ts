import { Book, BookCategories, BookStatuses } from "@/framework/client";

export const theSecretOfOurSuccessBook: Book = {
  slug: "the-secret-of-our-success",
  authors: ["Joseph Henrich"],
  status: BookStatuses.Finished,
  title: "The Secret Of Our Success",
  url: "https://secretofoursuccess.fas.harvard.edu/",
  category: BookCategories.History,
};
