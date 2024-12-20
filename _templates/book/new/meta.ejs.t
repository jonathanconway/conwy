---
to: src/content/books/<%- name %>.ts
---

import { Book, BookCategories, BookStatuses } from "@/framework";

export const <%- h.nameCamel() %>Book: Book = {
  authors: ["<%- h.author() %>"],
  status: BookStatuses.<%- h.status() %>,
  title: "<%- h.title() %>",
  url: "<%- h.url() %>",
  category: BookCategories.SoftwareDevelopment,
};
