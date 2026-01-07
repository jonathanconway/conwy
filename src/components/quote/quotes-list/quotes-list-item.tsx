"use client";

import { Quote } from "@/framework/client";

import { BlockQuotePullQuote } from "../../aside";
import { LinkBox } from "../../link-box";
import { Stack, StackDirections } from "../../stack";
import { Text, TextExpandable } from "../../text";

import { QuoteAttribution } from "./quote-attribution";
import * as styles from "./quotes-list-item.css";

interface QuotesListItemProps {
  readonly quote: Quote;
}

export function QuotesListItem(props: QuotesListItemProps) {
  const { quote } = props;

  return (
    <li key={quote.meta.slug} className={styles.quotesListItem}>
      <LinkBox
        className={styles.quoteLinkBox}
        href={`/quotes/${quote.meta.slug}`}
      >
        <BlockQuotePullQuote className={styles.quotePullQuote}>
          <Stack direction={StackDirections.Column} gap={0.5}>
            <Text>
              <TextExpandable height="5rem">{quote.text}</TextExpandable>
            </Text>

            <QuoteAttribution quote={quote} />
          </Stack>
        </BlockQuotePullQuote>
      </LinkBox>
    </li>
  );
}
