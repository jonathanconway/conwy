import { BookStatus, titleCase } from "@/framework/client";

import { Heading } from "../../heading";
import { Link } from "../../link";

import { getBooksList } from "./get-books-list";

interface BooksListProps {
  readonly status: BookStatus;
}

export function BooksList(props: BooksListProps) {
  const booksCategories = getBooksList(props);

  return (
    <>
      {Object.entries(booksCategories).map(([bookCategoryName, books]) => (
        <>
          <Heading level={4}>{titleCase(bookCategoryName)}</Heading>
          <ul>
            {books.map((book) => (
              <li key={book.title}>
                <Link href={book.url} target="_blank">
                  {book.title}
                </Link>{" "}
                by {book.authors.join(", ")}
              </li>
            ))}
          </ul>
        </>
      ))}
    </>
  );
}
