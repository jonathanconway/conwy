import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const theChecklistManifestoBook: Book = {
  meta: {
    type: "book",
    slug: "the-checklist-manifesto",
    authors: ["Atul Gawande"],
    status: BookStatuses.Listed,
    title: "The Checklist Manifesto",
    url: "https://en.wikipedia.org/wiki/The_Checklist_Manifesto",
    category: BookCategories.SelfHelp,
  },
};
