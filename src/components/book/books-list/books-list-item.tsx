"use client";

import { Book, BookStatuses, sentenceCase } from "@/framework/client";

import { LinkBox, LinkBoxTitle } from "../../link-box";
import { Text, TextTypes } from "../../text";

import * as styles from "./books-list-item.css";

interface BooksListItemProps {
  readonly book: Book;
}

const BOOK_STATUS_EMOJI = {
  [BookStatuses.Listed]: "📕",
  [BookStatuses.Reading]: "📖",
  [BookStatuses.Finished]: "✅",
};

export function BooksListItem({ book }: BooksListItemProps) {
  return (
    <li key={book.meta.title} className={styles.booksListItem}>
      <LinkBox
        className={styles.bookLinkBox}
        href={book.meta.url}
        target="_blank"
      >
        <LinkBoxTitle>{book.meta.title}</LinkBoxTitle>
        <Text type={TextTypes.Body}>by {book.meta.authors.join(", ")}</Text>
        <Text type={TextTypes.Small}>
          {BOOK_STATUS_EMOJI[book.meta.status]} {sentenceCase(book.meta.status)}
        </Text>
      </LinkBox>
    </li>
  );
}
