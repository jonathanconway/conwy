import { isArray, isObject, isString } from "lodash";
import { ReactElement, ReactNode } from "react";

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
      if (isObject(children.props)) {
        if ("children" in children.props) {
          if (
            isObject(children.props.children) ||
            isString(children.props.children)
          ) {
            return {
              ...children,
              props: {
                ...children.props,
                children: removeFirstChildPrefix(
                  prefix,
                  children.props.children as ReactNode,
                ),
              },
            };
          }
        }
      }
    }
  }

  return "";
}
