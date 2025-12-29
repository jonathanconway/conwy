import { camelCase, upperFirst } from "lodash";

import { isNotNil } from "./typing";

export function hashString(input: string) {
  let hash = 0,
    i = 0,
    len = input.length;
  while (i < len) {
    hash = ((hash << 5) - hash + input.charCodeAt(i++)) << 0;
  }
  return hash.toString();
}

export function removeDoubleSpaces(input: string) {
  return input.split(" ").filter(isNotNil).join(" ");
}

export function sentenceCase(input = "") {
  input = input.replaceAll(/[_-]/g, " ").split(" ").filter(isNotNil).join(" ");
  const a = input.substring(0, 1).toUpperCase();
  const b = input.substring(1).toLowerCase();
  return `${a}${b}`;
}

export function pascalCase(input = "") {
  return upperFirst(camelCase(input));
}
