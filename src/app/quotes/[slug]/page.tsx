import { Metadata } from "next";

import { createQuotesQuoteRoute, quotesRoute } from "@/app/routes";
import { Page, Quote, QuotePage, ResponsiveMdHalf } from "@/components";
import * as contentMap_ from "@/content";
import { site } from "@/content";
import * as quotesMap from "@/content/quotes";
import {
  ContentAnchorsMap,
  ContentMap,
  ContentTypes,
  NextPageProps,
  Quote as Quote_,
  reduceContentsAnchorLinkAndInfos,
  sentenceCase,
} from "@/framework";
import { findImportedContent } from "@/framework/server";

import contentAnchorsMap_ from "../../../../builder-out/content-anchors.json";

const contentAnchorsMap = contentAnchorsMap_ as ContentAnchorsMap;
const contentMap = contentMap_ as unknown as ContentMap;
const quotes = Object.values(quotesMap) as readonly Quote_[];
const quotesContentAnchorLinkAndInfos = reduceContentsAnchorLinkAndInfos(
  quotes,
  contentMap,
  contentAnchorsMap,
);

export default async function QuotesQuotePage(props: NextPageProps) {
  const params = await props.params;

  const quote = findImportedContent(quotesMap, ContentTypes.Quote, params.slug);
  const quoteContentAnchorLinkAndInfos =
    quotesContentAnchorLinkAndInfos[quote.meta.slug];

  return (
    <QuotePage
      quote={quote}
      quoteContentAnchorLinkAndInfos={quoteContentAnchorLinkAndInfos}
    />
  );
}

export async function generateStaticParams() {
  const allMetas = Object.values(quotesMap).map((item) => item.meta);
  return allMetas;
}

export async function generateMetadata(
  props: NextPageProps,
): Promise<Metadata> {
  const params = await props.params;

  const quote = findImportedContent(quotesMap, ContentTypes.Quote, params.slug);
  const quoteTitle = sentenceCase(quote.meta.slug).toLowerCase();

  const title = `${site.title} - quotes - ${quoteTitle}`;

  return {
    title,
  };
}
