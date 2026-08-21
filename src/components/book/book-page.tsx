import { Book } from "@/framework/client";

import { MainAsideLayout } from "../layouts";

import { BooksListItem } from "./books-list";

interface BookPageProps {
  readonly book: Book;
}

export function BookPage(props: BookPageProps) {
  return <MainAsideLayout main={<BooksListItem book={props.book} />} />;
}
