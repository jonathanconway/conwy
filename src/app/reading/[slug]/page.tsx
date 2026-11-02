import { Metadata } from "next";

import { createReadingsReadingRoute, readingsRoute } from "@/app/routes";
import { BookPage } from "@/components";
import { site } from "@/content";
import * as booksMap from "@/content/books";
import { ContentTypes, NextPageProps } from "@/framework";
import { findImportedContent } from "@/framework/server";

export default async function ReadingsReadingPage(props: NextPageProps) {
  const params = await props.params;

  const book = findImportedContent(booksMap, ContentTypes.Book, params.slug);

  return <BookPage book={book} />;
}

export async function generateStaticParams() {
  const allMetas = Object.values(booksMap).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(
  props: NextPageProps,
): Promise<Metadata> {
  const params = await props.params;

  const book = findImportedContent(booksMap, ContentTypes.Book, params.slug);
  const bookRoute = createReadingsReadingRoute(book);
  const bookTitle = bookRoute.title.toLowerCase();

  // todo: change these to use `routes` instead
  const title = `${site.title} - ${readingsRoute.title} - ${bookTitle}`;

  return {
    title,
  };
}
