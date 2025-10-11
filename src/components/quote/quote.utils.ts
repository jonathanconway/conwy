import { trim } from "lodash";

import { isNotNil } from "@/framework/client";

export function formatQuoteAuthorName(authorName: string) {
  const authorNameWords = authorName.split(" ").map(trim).filter(isNotNil);
  if (authorNameWords.length > 1) {
    const authorNameWordsAllButLast = authorNameWords.slice(0, -1);
    const authorNameWordsLast = authorNameWords.slice(-1)[0].toUpperCase();

    return [authorNameWordsAllButLast.join(" "), authorNameWordsLast].join(" ");
  }
  return authorNameWords[0].toUpperCase();
}
