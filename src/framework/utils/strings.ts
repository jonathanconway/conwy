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
