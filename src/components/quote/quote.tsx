"use client";

import { ContentAnchorLinkAndInfo, Quote as Quote_ } from "@/framework/client";

import { BlockQuotePullQuote } from "../aside";
import { ContentAnchors } from "../content-anchors";
import { Stack, StackDirections } from "../stack";
import { Text, TextTypes } from "../text";

import { QuoteAttribution } from "./quotes-list/quote-attribution";

interface QuoteProps {
  readonly quote: Quote_;
  readonly quoteContentAnchorLinkAndInfos: readonly ContentAnchorLinkAndInfo[];
}

export function Quote(props: QuoteProps) {
  const { quote, quoteContentAnchorLinkAndInfos } = props;

  return (
    <BlockQuotePullQuote>
      <Stack direction={StackDirections.Column} gap={0.5}>
        <Text type={TextTypes.Body}>{quote.text}</Text>

        <QuoteAttribution quote={quote} />

        <ContentAnchors
          contentAnchorLinkAndInfos={quoteContentAnchorLinkAndInfos}
        />
      </Stack>
    </BlockQuotePullQuote>
  );
}
