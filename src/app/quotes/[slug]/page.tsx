import { Metadata } from "next";

import { Breadcrumb, PageLayout, Quote, ResponsiveMdHalf } from "@/components";
import { site } from "@/content";
import * as quotes from "@/content/quotes";
import { ContentTypes, sentenceCase } from "@/framework/client";
import { findImportedContent } from "@/framework/server";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const quote = findImportedContent(quotes, ContentTypes.Quote, params.slug);

  return (
    <PageLayout
      selectedNavPath="/quotes"
      main={
        <>
          <Breadcrumb
            segments={[
              {
                title: "Quotes",
                url: "/quotes",
              },
              {
                title: sentenceCase(quote.meta.slug),
              },
            ]}
          />

          <ResponsiveMdHalf>
            <Quote quote={quote} />
          </ResponsiveMdHalf>
        </>
      }
    />
  );
}

export async function generateStaticParams() {
  const allMetas = Object.values(quotes).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const quote = findImportedContent(quotes, ContentTypes.Quote, params.slug);

  const quoteTitle = sentenceCase(quote.meta.slug).toLowerCase();
  const title = `${site.title} - quotes - ${quoteTitle}`;

  return {
    title,
  };
}
