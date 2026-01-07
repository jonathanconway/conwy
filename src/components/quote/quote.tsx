"use client";

import { Quote as Quote_ } from "@/framework/client";

import { BlockQuotePullQuote } from "../aside";
import { Stack, StackDirections } from "../stack";

import * as styles from "./quote.css";
import { QuoteAttribution } from "./quotes-list/quote-attribution";

interface QuoteProps {
  readonly quote: Quote_;
}

export function Quote(props: QuoteProps) {
  const { quote } = props;
  return (
    <BlockQuotePullQuote>
      <Stack direction={StackDirections.Column} gap={0.5}>
        <div className={styles.quoteTitle}>{quote.text}</div>

        <QuoteAttribution quote={quote} />
      </Stack>
    </BlockQuotePullQuote>
  );
}
