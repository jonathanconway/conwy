/**
 * `text` module
 * Contains utilities for general text handling.
 * 'Text' refers to strings presented to the user.
 */
import { memoize, startCase } from "lodash";

function removeLeadingArticles_(input: string) {
  return input.replace(/^(a |an |the )/i, "").trim();
}

export const stripLeadingArticles = memoize(removeLeadingArticles_);

/**
 *
 * @param input Convert input to Title case
 * @returns Input separated by single spaces with first letter capitalised and rest lower cased.
 * @example `one-two-three` => `One two three`
 * @example `one two three` => `One two three`
 * @example `oneTwoThree` => `One two three`
 * @example `OneTwoThree` => `One two three`
 */
export function titleCase(input: string) {
  const startCaseLower = startCase(input).toLowerCase();
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
