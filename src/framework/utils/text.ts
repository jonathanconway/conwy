import { memoize, startCase } from "lodash";

function stripLeadingArticles_(input: string) {
  return input.replace(/^(a |an |the )/i, "").trim();
}

export const stripLeadingArticles = memoize(stripLeadingArticles_);

export function titleCase(title: string) {
  const startCaseLower = startCase(title).toLowerCase();
  return `${startCaseLower[0].toUpperCase()}${startCaseLower.substring(1)}`;
}
