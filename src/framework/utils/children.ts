import { isArray, isObject } from "lodash";
import { JSXElementConstructor, ReactElement, ReactNode } from "react";

export function isReactElement<TChildProps>(
  child: ReactNode,
): child is ReactElement<unknown, string | JSXElementConstructor<TChildProps>> {
  return isObject(child) && "type" in child;
}

export function isReactNodeArray(
  children?: ReactNode,
): children is readonly ReactNode[] {
  return isArray(children);
}
