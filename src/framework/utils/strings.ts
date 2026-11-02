/**
 * `strings` module
 * Contains utilities for general string handling.
 */
import { camelCase, upperFirst } from "lodash";

import { checkIsNotNil } from "./typing";

// todo: move to double-spaces-remove.ts
export function removeDoubleSpaces(input: string) {
  return input.split(" ").filter(checkIsNotNil).join(" ");
}

// todo: move to sentence-case.ts
export function sentenceCase(input = "") {
  input = input
    .replaceAll(/[_-]/g, " ")
    .split(" ")
    .filter(checkIsNotNil)
    .join(" ");
  const a = input.substring(0, 1).toUpperCase();
  const b = input.substring(1).toLowerCase();
  return `${a}${b}`;
}

// todo: move to pascal-case.ts
export function pascalCase(input = "") {
  return upperFirst(camelCase(input));
}

export function checkIsNotEmptyString(input: string) {
  return input.trim().length > 0;
}

export function removeConsecutiveEmptyLines(input: string) {
  return input.replace(/[\r\n]{2,}/g, "\n\n");
}

const NEWLINE_REGEXP = /[\r\n]+\s*/i;

export function replaceNewLinesWithSpace(input: string) {
  return input.replace(NEWLINE_REGEXP, " ");
}

export function escapeUnescapedString(input: string) {
  if (input.includes("\\") && !input.includes('"')) {
    return JSON.parse(`"${input}"`);
  }
  return input;
}
