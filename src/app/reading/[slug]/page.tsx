import { Metadata } from "next";

import { createReadingsReadingRoute, readingsRoute } from "@/app/routes";
import { BookPage, Page, ResponsiveMdHalf } from "@/components";
import { site } from "@/content";
import * as booksMap from "@/content/books";
import { ContentTypes } from "@/framework";
import { findImportedContent } from "@/framework/server";

import { PageProps } from "../../[slug]/types";

export default async function ReadingsReadingPage(props: PageProps) {
  const params = await props.params;

  const book = findImportedContent(booksMap, ContentTypes.Book, params.slug);
  const readingRoute = createReadingsReadingRoute(book);

  return (
    <Page
      title={readingRoute.title}
      breadcrumbSegments={[readingsRoute, { title: readingRoute.title }]}
    >
      <ResponsiveMdHalf>
        <BookPage book={book} />
      </ResponsiveMdHalf>
    </Page>
  );
}

export async function generateStaticParams() {
  const allMetas = Object.values(booksMap).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const book = findImportedContent(booksMap, ContentTypes.Book, params.slug);
  const bookTitle = book.meta.title.toLowerCase();

  // todo: change these to use `routes` instead
  const title = `${site.title} - reading - ${bookTitle}`;

  return {
    title,
  };
}
