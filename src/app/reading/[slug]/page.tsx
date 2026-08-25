import { Metadata } from "next";

import {
  BookPage,
  Breadcrumb,
  PageLayout,
  ResponsiveMdHalf,
} from "@/components";
import { site } from "@/content";
import * as books from "@/content/books";
import { Book as Book_, importContentBySlug } from "@/framework/client";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const book = importContentBySlug<Book_>(books, "book", params.slug);

  return (
    <PageLayout
      selectedNavPath="/reading"
      main={
        <>
          <Breadcrumb
            segments={[
              {
                title: "Reading",
                url: "/reading",
              },
              {
                title: book.meta.title,
              },
            ]}
          />

          <ResponsiveMdHalf>
            <BookPage book={book} />
          </ResponsiveMdHalf>
        </>
      }
    />
  );
}

export async function generateStaticParams() {
  const allBookMetas = Object.values(books).map((item) => item.meta);
  return allBookMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const book = importContentBySlug<Book_>(books, "book", params.slug);

  const bookTitle = book.meta.title.toLowerCase();
  const title = `${site.title} - reading - ${bookTitle}`;

  return {
    title,
  };
}
