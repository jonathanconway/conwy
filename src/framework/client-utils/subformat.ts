import { isArray, isRegExp, isString } from "lodash";
import { ReactElement, ReactNode } from "react";

import { skipEmptyChildren } from "./children";

export function getIsSubformatChildrenMatchesPrefix(
  prefix: string,
  children: ReactNode,
): children is ReactNode[] {
  return (
    isArray(children) &&
    children.find((child) => String(child.props?.children) === prefix)
  );
}

export function getSubformatChildrenStartingWithPrefix(
  prefix: string,
  children: ReactNode,
): ReactElement | undefined {
  if (!isArray(children)) {
    return undefined;
  }
  return children.find((child) =>
    String(child.props?.children).startsWith(prefix),
  );
}

function getChildText(children: ReactNode) {
  if (!isString(children)) {
    return undefined;
  }

  return children;
}

export function getIsChildTextStartingWithPrefix(
  prefix: string,
  children: ReactNode,
): children is string {
  const childText = getChildText(children);
  if (!childText) {
    return false;
  }

  if (!childText.startsWith(`${prefix}: `)) {
    return false;
  }

  return true;
}

export function getChildTextPatternMatches(
  prefix: RegExp,
  children: ReactNode,
) {
  const childText = getChildText(children);
  if (!childText) {
    return false;
  }

  const matches = Array.from(childText.matchAll(prefix));

  if (!matches.length) {
    return;
  }

  return matches;
}

export function removeChildrenPrefix(prefix: string, childrenText: string) {
  return childrenText.split(`${prefix}: `)[1];
}

export function removeChildrenPattern(pattern: RegExp, children: ReactNode) {
  const childText = getChildText(children);
  return childText?.replace(pattern, "");
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
