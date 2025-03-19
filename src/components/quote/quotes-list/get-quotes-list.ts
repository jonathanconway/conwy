"use client";

import * as quotesMap from "@/content/quotes";

export function getQuotes() {
  const quotes = Object.values(quotesMap);

  return quotes;
}
