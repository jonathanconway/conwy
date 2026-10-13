import { camelCase, upperFirst } from "lodash";

import { isNotNil } from "./typing";

// todo: move to double-spaces-remove.ts
export function removeDoubleSpaces(input: string) {
  return input.split(" ").filter(isNotNil).join(" ");
}

// todo: move to sentence-case.ts
export function sentenceCase(input = "") {
  input = input.replaceAll(/[_-]/g, " ").split(" ").filter(isNotNil).join(" ");
  const a = input.substring(0, 1).toUpperCase();
  const b = input.substring(1).toLowerCase();
  return `${a}${b}`;
}

// todo: move to pascal-case.ts
export function pascalCase(input = "") {
  return upperFirst(camelCase(input));
}
