import { isArray, isObject, isString } from "lodash";
import { ReactElement, ReactNode, ReactPortal } from "react";

export type ReactNodeSingle =
  | ReactElement
  | string
  | number
  | bigint
  | ReactPortal
  | boolean
  | null
  | undefined;

export function checkIsReactNode(input: unknown): input is ReactNode {
  return (
    (isObject(input) && "type" in input) ||
    isString(input) ||
    (isArray(input) && checkIsReactNode(input[0]))
  );
}

export function checkIsReactNodeArray(
  input?: ReactNode,
): input is readonly ReactNode[] {
  return isArray(input);
}

export function checkIsReactNodeElement(
  input?: ReactNode,
): input is ReactElement {
  return isObject(input) && "type" in input;
}
