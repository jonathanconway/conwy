import { isArray } from "lodash";
import { ReactNode } from "react";

export function skipEmptyChildren(children: ReactNode) {
  if (!isArray(children)) {
    return children;
  }

  let nonEmptyChildren = [];
  for (const child of children) {
    if (child === "\n" && nonEmptyChildren.length === 0) {
      continue;
    }
    nonEmptyChildren.push(child);
  }

  return nonEmptyChildren;
}
