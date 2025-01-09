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
    tagField: "category",
  });

  return (
    <>
      <TagFilters contentType="book" items={books} tagField="category" />

      <List className={styles.booksList}>
        {filteredItems.map((book) => (
          <BooksListItem book={book} />
        ))}
      </List>
    </>
  );
}
