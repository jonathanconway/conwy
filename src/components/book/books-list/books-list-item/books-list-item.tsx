"use client";

import { Book, BookStatuses, sentenceCase } from "@/framework/client";

import { Link } from "../../../link";
import { LinkBox, LinkBoxTitle } from "../../../link-box";
import { Text, TextSizes, TextTypes } from "../../../text";

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
      <LinkBox href={book.meta.url} target="_blank">
        <div className={styles.bookLinkBoxInner}>
          <LinkBoxTitle>{book.meta.title}</LinkBoxTitle>
          <Text type={TextTypes.Body}>by {book.meta.authors.join(", ")}</Text>
          <Text type={TextTypes.Small}>
            {BOOK_STATUS_EMOJI[book.meta.status]}{" "}
            {sentenceCase(book.meta.status)}
          </Text>

          {book.meta.notesSlug && (
            <Link
              className={styles.bookNotesLink}
              size={TextSizes.xs}
              href={`/notes/${book.meta.notesSlug}`}
            >
              📝 Notes
            </Link>
          )}
        </div>
      </LinkBox>
    </li>
  );
}
