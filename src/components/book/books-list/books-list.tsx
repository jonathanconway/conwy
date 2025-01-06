"use client";

import { sentenceCase } from "@/framework/client";

import { TagFilters, useTagFiltersResults } from "../../filters";
import { LinkBox, LinkBoxTitle } from "../../link-box";
import { List } from "../../list";
import { Text, TextTypes } from "../../text";

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
          <li key={book.title} className={styles.booksListItem}>
            <LinkBox
              className={styles.bookLinkBox}
              href={book.url}
              target="_blank"
            >
              <LinkBoxTitle>{book.title}</LinkBoxTitle>
              <Text type={TextTypes.Body}>by {book.authors.join(", ")}</Text>
              <Text type={TextTypes.Small}>{sentenceCase(book.status)}</Text>
            </LinkBox>
          </li>
        ))}
      </List>
    </>
  );
}

//   <Link href={book.url} target="_blank">
//     {book.title}
//   </Link>{" "}
//
