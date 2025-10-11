"use client";

import { Quote } from "@/framework/client";

import { BlockQuotePullQuote } from "../../aside";
import { Link } from "../../link";
import { LinkBox, LinkBoxTitle } from "../../link-box";
import { Stack, StackDirections } from "../../stack";
import { Text, TextExpandable, TextTypes } from "../../text";
import { formatQuoteAuthorName } from "../quote.utils";

import * as styles from "./quotes-list-item.css";

interface QuotesListItemProps {
  readonly quote: Quote;
}

export function QuotesListItem({ quote }: QuotesListItemProps) {
  return (
    <li key={quote.slug} className={styles.quotesListItem}>
      <LinkBox className={styles.quoteLinkBox} href={`/quotes/${quote.slug}`}>
        <BlockQuotePullQuote className={styles.quotePullQuote}>
          <Stack direction={StackDirections.Column} gap={0.5}>
            <LinkBoxTitle>
              <TextExpandable height="5rem">{quote.text}</TextExpandable>
            </LinkBoxTitle>

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
      </LinkBox>
    </li>
  );
}
