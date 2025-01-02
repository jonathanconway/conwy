import { flow, groupBy, orderBy, upperCase } from "lodash";

import * as booksMap from "@/content/books";
import { Book, BookStatus, stripLeadingArticles } from "@/framework/client";

export function getBooksList({ status }: { readonly status: BookStatus }) {
  const books = Object.values(booksMap);

  return flow(
    filterBooksItems(status),
    sortBooksItems,
    mapBooksToBookItems,
    groupBooksByCategory,
  )(books);
}

function filterBooksItems(status: BookStatus) {
  return (booksItems: readonly Book[]) => {
    return booksItems.filter((book) => book.status === status);
  };
}

function sortBooksItems(booksItems: readonly Book[]): readonly Book[] {
  const booksItemsWithSortingTitles = booksItems.map((book) => ({
    ...book,
    titleSorting: stripLeadingArticles(book.title),
  }));

  const booksItemsSorted = orderBy(booksItemsWithSortingTitles, "titleSorting");

  return booksItemsSorted;
}

function mapBooksToBookItems(booksItems: readonly Book[]) {
  return booksItems.map((bookItem) => ({
    ...bookItem,
    authors: formatBookAuthors(bookItem.authors),
  }));
}

function formatBookAuthors(authors: readonly string[]) {
  return authors.map((author) => {
    const [firstName, ...restNames] = author.trim().split(" ");
    const restNamesUpperCaseJoined = restNames.map(upperCase).join(" ");
    return `${firstName} ${restNamesUpperCaseJoined}`;
  });
}

function groupBooksByCategory(books: readonly Book[]) {
  return groupBy(books, "category");
}
