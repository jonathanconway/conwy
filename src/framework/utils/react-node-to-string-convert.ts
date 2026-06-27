import { isArray, isNumber, isObject, isString } from "lodash";
import { ReactNode } from "react";

import { isReactNode } from "./react-node";

export function convertReactNodeToString(input: ReactNode): string {
  if (!input) {
    return "";
  }
  if (isString(input)) {
    return input;
  }
  if (isNumber(input)) {
    return String(input);
  }
  if (isArray(input)) {
    return input.map(convertReactNodeToString).join("");
  }
  if (
    isObject(input) &&
    "props" in input &&
    isObject(input.props) &&
    "children" in input.props // &&
    // isReactNode(input.props.children)
  ) {
    return convertReactNodeToString(input.props.children as unknown as any);
  }
  return "";
}
