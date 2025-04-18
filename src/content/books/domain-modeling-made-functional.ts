import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const domainModelingMadeFunctionalBook: Book = {
  meta: {
    type: "book",
    slug: "domain-modeling-made-functional",
    authors: ["Scott Wlaschin"],
    status: BookStatuses.Finished,
    title: "Domain Modeling Made Functional",
    url: "https://pragprog.com/titles/swdddf/domain-modeling-made-functional/",
    category: BookCategories.SoftwareDevelopment,
  },
};
