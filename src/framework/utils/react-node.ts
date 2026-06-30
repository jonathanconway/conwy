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

export function isReactNode(input: unknown): input is ReactNode {
  return (
    (isObject(input) && "type" in input) ||
    isString(input) ||
    (isArray(input) && isReactNode(input[0]))
  );
}

export function isReactNodeArray(
  input?: ReactNode,
): input is readonly ReactNode[] {
  return isArray(input);
}
