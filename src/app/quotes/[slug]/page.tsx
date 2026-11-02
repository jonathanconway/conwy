import { Metadata } from "next";

import { createQuotesQuoteRoute, quotesRoute } from "@/app/routes";
import { Page, Quote, ResponsiveMdHalf } from "@/components";
import * as contentMap_ from "@/content";
import { site } from "@/content";
import * as quotesMap from "@/content/quotes";
import {
  ContentAnchorsMap,
  ContentMap,
  ContentTypes,
  Quote as Quote_,
  reduceContentsAnchorLinkAndInfos,
  sentenceCase,
} from "@/framework";
import { findImportedContent } from "@/framework/server";

import contentAnchorsMap_ from "../../../../builder-out/content-anchors.json";
import { PageProps } from "../../[slug]/types";

const contentAnchorsMap = contentAnchorsMap_ as ContentAnchorsMap;
const contentMap = contentMap_ as unknown as ContentMap;
const quotes = Object.values(quotesMap) as readonly Quote_[];
const quotesContentAnchorLinkAndInfos = reduceContentsAnchorLinkAndInfos(
  quotes,
  contentMap,
  contentAnchorsMap,
);

export default async function QuotesQuotePage(props: PageProps) {
  const params = await props.params;

  const quote = findImportedContent(quotesMap, ContentTypes.Quote, params.slug);
  const quoteRoute = createQuotesQuoteRoute(quote);

  return (
    <Page
      title={quoteRoute.title}
      breadcrumbSegments={[quotesRoute, { title: quoteRoute.title }]}
    >
      <ResponsiveMdHalf>
        <Quote
          quote={quote}
          quoteContentAnchorLinkAndInfos={
            quotesContentAnchorLinkAndInfos[quote.meta.slug]
          }
        />
      </ResponsiveMdHalf>
    </Page>
  );
}

export async function generateStaticParams() {
  const allMetas = Object.values(quotesMap).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const quote = findImportedContent(quotesMap, ContentTypes.Quote, params.slug);
  const quoteTitle = sentenceCase(quote.meta.slug).toLowerCase();

  const title = `${site.title} - quotes - ${quoteTitle}`;

  return {
    title,
  };
}
