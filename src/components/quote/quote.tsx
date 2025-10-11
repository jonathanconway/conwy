"use client";

import { Quote as Quote_ } from "@/framework/client";

import { BlockQuotePullQuote } from "../aside";
import { Link } from "../link";
import { Stack, StackDirections } from "../stack";
import { Text, TextTypes } from "../text";

import * as styles from "./quote.css";
import { formatQuoteAuthorName } from "./quote.utils";

interface QuoteProps {
  readonly quote: Quote_;
}

export function Quote({ quote }: QuoteProps) {
  return (
    <BlockQuotePullQuote>
      <Stack direction={StackDirections.Column} gap={0.5}>
        <div className={styles.quoteTitle}>{quote.text}</div>

        <Text type={TextTypes.Body}>
          – {formatQuoteAuthorName(quote.author)}
        </Text>

        {quote.source &&
          (quote.source.url ? (
            <Text type={TextTypes.Body}>
              <Link href={quote.source.url} target="_blank">
                {quote.source.title}
              </Link>
            </Text>
          ) : (
            <Text type={TextTypes.Body}>{quote.source.title}</Text>
          ))}
      </Stack>
    </BlockQuotePullQuote>
  );
}
