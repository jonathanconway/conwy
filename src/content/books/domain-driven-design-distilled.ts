import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const domainDrivenDesignDistilledBook: Book = {
  meta: {
    type: "book",
    slug: "domain-driven-design-distilled",
    authors: ["Vaughn Vernon"],
    status: BookStatuses.Finished,
    title: "Domain Driven Design Distilled",
    url: "https://www.oreilly.com/library/view/domain-driven-design-distilled/9780134434964/",
    category: BookCategories.SoftwareDevelopment,
  },
};
