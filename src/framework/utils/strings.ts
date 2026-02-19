import { camelCase, upperFirst } from "lodash";

import { isNotNil } from "./typing";

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
