import { isArray } from "lodash";
import { ReactElement, ReactNode } from "react";

import { skipEmptyChildren } from "./children";

export function getIsSubformatChildrenPrefixed(
  prefix: string,
  children: ReactNode,
): children is ReactNode[] {
  return (
    isArray(children) &&
    children.find((child) => child.props?.children === prefix)
  );
}

export function getSubformatChildrenPrefixedRest(
  prefix: string,
  children: ReactNode,
) {
  if (!isArray(children)) {
    return children;
  }

  let filteredChildren = children.filter(
    (child) => (child as ReactElement).props?.children !== prefix,
  );

  filteredChildren = skipEmptyChildren(filteredChildren) as ReactNode[];

  return filteredChildren;
}
