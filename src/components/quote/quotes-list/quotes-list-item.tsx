"use client";

import { ContentAnchorLinkAndInfo, Quote } from "@/framework/client";

import { BlockQuotePullQuote } from "../../aside";
import { ContentAnchors } from "../../content-anchors";
import { Stack, StackDirections } from "../../stack";
import { Text, TextTypes } from "../../text";

import { QuoteAttribution } from "./quote-attribution";
import * as styles from "./quotes-list-item.css";

interface QuotesListItemProps {
  readonly quote: Quote;
  readonly quoteContentAnchorLinkAndInfos: readonly ContentAnchorLinkAndInfo[];
}

export function QuotesListItem(props: QuotesListItemProps) {
  const { quote, quoteContentAnchorLinkAndInfos } = props;

  return (
    <li key={quote.meta.slug} className={styles.quotesListItem}>
      <BlockQuotePullQuote className={styles.quotePullQuote}>
        <Stack direction={StackDirections.Column} gap={0.5}>
          <Text type={TextTypes.Body}>{quote.text}</Text>

          <QuoteAttribution quote={quote} />

          <ContentAnchors
            contentAnchorLinkAndInfos={quoteContentAnchorLinkAndInfos}
          />
        </Stack>
      </BlockQuotePullQuote>
    </li>
  );
}
