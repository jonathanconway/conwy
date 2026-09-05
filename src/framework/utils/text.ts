import { memoize, startCase } from "lodash";

function stripLeadingArticles_(input: string) {
  return input.replace(/^(a |an |the )/i, "").trim();
}

export const stripLeadingArticles = memoize(stripLeadingArticles_);

export function titleCase(title: string) {
  const startCaseLower = startCase(title).toLowerCase();
  const firstLetter = startCaseLower?.[0]?.toUpperCase() ?? "";
  const restLetters = startCaseLower?.substring?.(1) ?? "";
  return `${firstLetter}${restLetters}`;
}

export function truncateWithEllipsis(input: string, maxLength = 25) {
  if (input.length <= maxLength) {
    return input;
  }

  return `${input.substring(0, maxLength - 3)}...`;
}
