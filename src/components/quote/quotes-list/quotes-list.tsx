"use client";

import { UnorderedList } from "../../list";

import { getQuotes } from "./get-quotes-list";
import { QuotesListItem } from "./quotes-list-item";
import * as styles from "./quotes-list.css";

export function QuotesList() {
  const quotes = getQuotes();

  return (
    <UnorderedList className={styles.quotesList}>
      {quotes.map((quote) => (
        <QuotesListItem key={quote.meta.slug} quote={quote} />
      ))}
    </UnorderedList>
  );
}
