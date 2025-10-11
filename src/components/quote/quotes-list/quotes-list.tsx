"use client";

import { List } from "../../list";

import { getQuotes } from "./get-quotes-list";
import { QuotesListItem } from "./quotes-list-item";
import * as styles from "./quotes-list.css";

export function QuotesList() {
  const quotes = getQuotes();

  return (
    <List className={styles.quotesList}>
      {quotes.map((quote) => (
        <QuotesListItem key={quote.slug} quote={quote} />
      ))}
    </List>
  );
}
