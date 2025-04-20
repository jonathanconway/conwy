"use client";

import { Quote } from "@/framework/client";

import { BlockQuotePullQuote } from "../../aside";
import { Link } from "../../link";
import { LinkBox, LinkBoxTitle } from "../../link-box";
import { Stack } from "../../stack";
import { Text, TextTypes } from "../../text";

import * as styles from "./quotes-list-item.css";
import { formatAuthorName } from "./quotes-list-item.utils";

interface QuotesListItemProps {
  readonly quote: Quote;
}

export function QuotesListItem({ quote }: QuotesListItemProps) {
  return (
    <li key={quote.slug} className={styles.quotesListItem}>
      <LinkBox className={styles.quoteLinkBox} href={`/quotes/${quote.slug}`}>
        <BlockQuotePullQuote className={styles.quotePullQuote}>
          <Stack direction="column" gap={0.5}>
            <LinkBoxTitle>{quote.text}</LinkBoxTitle>
            <Text type={TextTypes.Body}>
              – {formatAuthorName(quote.author)}
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
      </LinkBox>
    </li>
  );
}
