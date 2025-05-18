import { isArray, isObject, isString } from "lodash";
import { ReactElement, ReactNode } from "react";

import { skipEmptyChildren } from "./children";

export function getHasSubformatChildrenMatchingPrefix(
  prefix: string,
  children: ReactNode,
): children is ReactNode[] {
  if (!isArray(children)) {
    return false;
  }

  return children.find((child) => String(child.props?.children) === prefix);
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
  if (isString(children)) {
    return undefined;
  }

  return children?.toString();
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

export function getChildrenText(children: ReactNode): string {
  if (!children) {
    return "";
  }

  if (isString(children)) {
    return children;
  }

  if (isArray(children)) {
    return String(children.map(getChildrenText).join("")).trim();
  }

  if (isObject(children)) {
    if ("type" in children) {
      if (children.type === "br") {
        return "\n";
      }
    }

    if ("props" in children) {
      if ("type" in children.props) {
        if (children.props.type === "br") {
          return "";
        }
      }
      if ("children" in children.props) {
        return getChildrenText(children.props.children).trim();
      }
    }
  }

  return "";
}

export function removeFirstChildPrefix(
  prefix: string,
  children: ReactNode,
): any {
  if (!children) {
    return "";
  }

  if (isString(children)) {
    return children.replace(prefix, "");
  }

  if (isArray(children)) {
    return children.map((child) => removeFirstChildPrefix(prefix, child));
  }

  if (isObject(children)) {
    if ("type" in children) {
      if (children.type === "br") {
        return "\n";
      }
    }

    if ("props" in children) {
      if ("children" in children.props) {
        return {
          ...children,
          props: {
            ...children.props,
            children: removeFirstChildPrefix(prefix, children.props.children),
          },
        };
      }
    }
  }

  return "";
}

export function removeChildrenPrefix(prefix: string) {
  return function (childrenText?: string) {
    return childrenText?.split(prefix)[1].trim();
  };
}

export function removeChildrenPrefixPattern(prefixPattern: RegExp) {
  return function (children?: ReactNode): ReactNode {
    if (isString(children)) {
      if (prefixPattern.test(children)) {
        return children.split(":").slice(1).join(":").trim();
      }
    }

    if (isArray(children)) {
      return [
        removeChildrenPrefixPattern(prefixPattern)(children[0]),
        ...children.slice(1),
      ];
    }

    return children;
  };
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
