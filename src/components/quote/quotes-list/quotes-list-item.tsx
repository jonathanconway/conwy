"use client";

import { BlockQuotePullQuote } from "@/components/aside";
import { Stack } from "@/components/stack";
import { Quote } from "@/framework/client";

import { LinkBox, LinkBoxTitle } from "../../link-box";
import { Text, TextTypes } from "../../text";

import * as styles from "./quotes-list-item.css";
import { formatAuthorName } from "./quotes-list-item.utils";

interface QuotesListItemProps {
  readonly quote: Quote;
}

export function QuotesListItem({ quote }: QuotesListItemProps) {
  return (
    <li key={quote.slug} className={styles.quotesListItem}>
      <LinkBox
        className={styles.quoteLinkBox}
        href={`/quotes/${quote.slug}`}
        target="_blank"
      >
        <BlockQuotePullQuote className={styles.quotePullQuote}>
          <Stack direction="column" gap={0.5}>
            <LinkBoxTitle>{quote.text}</LinkBoxTitle>
            <Text type={TextTypes.Body}>
              – {formatAuthorName(quote.author)}
            </Text>
          </Stack>
        </BlockQuotePullQuote>
      </LinkBox>
    </li>
  );
}
