"use client";

import { Quote as Quote_ } from "@/framework/client";

import { BlockQuotePullQuote } from "../aside";
import { Stack, StackDirections } from "../stack";
import { Text, TextTypes } from "../text";

import { QuoteAttribution } from "./quotes-list/quote-attribution";

interface QuoteProps {
  readonly quote: Quote_;
}

export function Quote(props: QuoteProps) {
  const { quote } = props;
  return (
    <BlockQuotePullQuote>
      <Stack direction={StackDirections.Column} gap={0.5}>
        <Text type={TextTypes.Body}>{quote.text}</Text>

        <QuoteAttribution quote={quote} />
      </Stack>
    </BlockQuotePullQuote>
  );
}
