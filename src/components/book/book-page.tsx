import { Book } from "@/framework";

import { MainAsideLayout } from "../layouts";

import { BooksListItem } from "./books-list";

interface BookPageProps {
  readonly book: Book;
}

export function BookPage(props: BookPageProps) {
  return <MainAsideLayout mainSlot={<BooksListItem book={props.book} />} />;
}
