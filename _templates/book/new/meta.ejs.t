---
to: src/content/books/<%- name %>.ts
---

import { Book, BookStatuses } from "@/framework";

export const <%- h.namePascal() %>: Book = {
  authors: ["<%- h.author() %>"],
  status: BookStatuses.<%- h.bookStatus() %>,
  title: "<%- h.bookTitle() %>",
  url: "<%- h.url() %>",
};
