import { BookStatus } from "@/framework";

import { Link } from "../../link";

import { getBooksList } from "./get-books-list";

interface BooksListProps {
  readonly status: BookStatus;
}

export function BooksList(props: BooksListProps) {
  const booksItems = getBooksList(props);

  return (
    <ul>
      {booksItems.map((book) => (
        <li key={book.title}>
          <Link href={book.url}>{book.title}</Link> by {book.authors.join(", ")}
        </li>
      ))}
    </ul>
  );
}
