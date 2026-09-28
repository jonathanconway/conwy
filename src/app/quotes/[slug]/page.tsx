import { Metadata } from "next";

import { Breadcrumb, PageLayout, Quote, ResponsiveMdHalf } from "@/components";
import { site } from "@/content";
import * as contentMap_ from "@/content";
import * as quotesMap from "@/content/quotes";
import { Quote as Quote_ } from "@/framework";
import {
  ContentAnchorsMap,
  ContentMap,
  ContentTypes,
  reduceContentsAnchorLinkAndInfos,
  sentenceCase,
} from "@/framework/client";
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

export default async function Page(props: PageProps) {
  const params = await props.params;

  const quote = findImportedContent(quotesMap, ContentTypes.Quote, params.slug);

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
            <Quote
              quote={quote}
              quoteContentAnchorLinkAndInfos={
                quotesContentAnchorLinkAndInfos[quote.meta.slug]
              }
            />
          </ResponsiveMdHalf>
        </>
      }
    />
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
