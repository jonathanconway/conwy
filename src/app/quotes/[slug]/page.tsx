import { Metadata } from "next";

import "@/components";
import { PageLayout, Quote, ResponsiveMdHalf } from "@/components";
import { site } from "@/content";
import * as quotes from "@/content/quotes";
import {
  Quote as Quote_,
  importContentBySlug,
  sentenceCase,
} from "@/framework/client";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const quote = importContentBySlug<Quote_>(quotes, "quote", params.slug);

  return (
    <PageLayout
      selectedNavPath="/quotes"
      main={
        <ResponsiveMdHalf>
          <Quote quote={quote} />
        </ResponsiveMdHalf>
      }
    />
  );
}

export async function generateStaticParams() {
  const allQuoteMetas = Object.values(quotes).map((item) => item.meta);
  return allQuoteMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const quote = importContentBySlug<Quote_>(quotes, "quote", params.slug);

  const quoteTitle = sentenceCase(quote.meta.slug).toLowerCase();
  const title = `${site.title} - quote - ${quoteTitle}`;

  return {
    title,
  };
}
