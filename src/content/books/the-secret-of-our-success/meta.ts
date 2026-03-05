import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "the-secret-of-our-success",
  authors: ["Joseph Henrich"],
  status: BookStatuses.Finished,
  title: "The Secret Of Our Success",
  url: "https://secretofoursuccess.fas.harvard.edu/",
  category: BookCategories.History,
};
