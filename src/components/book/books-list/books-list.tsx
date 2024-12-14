import * as books from "@/content/books";
import { BookStatus } from "@/framework";

import { Link } from "../../link";

interface BooksListProps {
  readonly status: BookStatus;
}

export function BooksList(props: BooksListProps) {
  const booksItems = Object.values(books);
  const booksItemsFiltered = booksItems.filter(
    (book) => book.status === props.status,
  );

  return (
    <ul>
      {booksItemsFiltered.map((book) => (
        <li key={book.title}>
          <Link href={book.url}>{book.title}</Link> by {book.authors.join(", ")}
        </li>
      ))}
    </ul>
  );
}
