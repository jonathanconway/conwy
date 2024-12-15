import { memoize } from "lodash";

function stripLeadingArticles_(input: string) {
  return input.replace(/^(a |an |the )/i, "").trim();
}

export const stripLeadingArticles = memoize(stripLeadingArticles_);
