"use client";

import * as booksMap from "@/content/books";

export function getBooks() {
  const books = Object.values(booksMap);

  return books;
}
