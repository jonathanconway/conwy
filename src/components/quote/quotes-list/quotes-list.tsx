"use client";

import { ContentAnchorLinkAndInfo, Quote, Slug } from "@/framework/client";

import { UnorderedList } from "../../list";

import { QuotesListItem } from "./quotes-list-item";
import * as styles from "./quotes-list.css";

interface QuotesListProps {
  readonly quotes: readonly Quote[];
  readonly quotesContentAnchorLinkAndInfos: Record<
    Slug,
    readonly ContentAnchorLinkAndInfo[]
  >;
}

export function QuotesList(props: QuotesListProps) {
  const { quotes, quotesContentAnchorLinkAndInfos } = props;

  return (
    <UnorderedList className={styles.quotesList}>
      {quotes.map((quote) => (
        <QuotesListItem
          key={quote.meta.slug}
          quote={quote}
          quoteContentAnchorLinkAndInfos={
            quotesContentAnchorLinkAndInfos[quote.meta.slug]
          }
        />
      ))}
    </UnorderedList>
  );
}
