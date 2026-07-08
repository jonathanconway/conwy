import { Maybe } from "@/framework/client";

// Source - https://stackoverflow.com/a/59909152/23341
export function checkIsElementOverflowing(anchor?: Maybe<Element>) {
  if (!anchor) {
    return;
  }

  if (anchor.children.length > 0) {
    return checkIsElementOverflowing(anchor.children[0]);
  }

  return Boolean(
    anchor && (anchor.scrollWidth ?? 0) > (anchor.clientWidth ?? 0),
  );
}
