import { createReadingsReadingRoute, readingsRoute } from "@/app/routes";
import { Book } from "@/framework";

import { Page } from "../page";
import { PageMainAsideLayout } from "../page/page-main-aside/page-main-aside-layout";
import { ResponsiveMdHalf } from "../responsive";

import { BooksListItem } from "./books-list";

interface BookPageProps {
  readonly book: Book;
}

export function BookPage(props: BookPageProps) {
  const { book } = props;
  const readingRoute = createReadingsReadingRoute(book);

  return (
    <Page
      title={readingRoute.title}
      breadcrumbSegments={[readingsRoute, { title: readingRoute.title }]}
    >
      <ResponsiveMdHalf>
        <PageMainAsideLayout mainSlot={<BooksListItem book={props.book} />} />
      </ResponsiveMdHalf>
    </Page>
  );
}
