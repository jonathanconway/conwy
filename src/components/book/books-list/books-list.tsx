"use client";

import { TagFilters, useTagFiltersResults } from "../../filters";
import { List } from "../../list";

import { BooksListItem } from "./books-list-item";
import * as styles from "./books-list.css";
import { getBooks } from "./get-books-list";

export function BooksList() {
  const books = getBooks();

  const { filteredItems } = useTagFiltersResults({
    items: books,
    contentType: "book",
    tagField: "meta.category",
  });

  return (
    <>
      <TagFilters contentType="book" items={books} tagField="meta.category" />

      <List className={styles.booksList}>
        {filteredItems.map((book) => (
          <BooksListItem key={book.meta.slug} book={book} />
        ))}
      </List>
    </>
  );
}
