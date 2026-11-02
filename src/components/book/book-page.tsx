import { Book } from "@/framework";

import { PageMainAsideLayout } from "../page/page-main-aside/page-main-aside-layout";

import { BooksListItem } from "./books-list";

interface BookPageProps {
  readonly book: Book;
}

export function BookPage(props: BookPageProps) {
  return <PageMainAsideLayout mainSlot={<BooksListItem book={props.book} />} />;
}
