import { isObject } from "lodash";
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  isValidElement,
} from "react";

export function isReactElementWithProps<TChildProps>(
  input: ReactNode,
): input is ReactElement<
  TChildProps,
  string | JSXElementConstructor<TChildProps>
> {
  return isObject(input) && "type" in input && isObject(input.props);
}

export function isReactElementOfType<
  TChildType extends string | JSXElementConstructor<any> =
    | string
    | JSXElementConstructor<any>,
>(
  node: ReactNode,
  type: TChildType,
): node is ReactElement<unknown, TChildType> {
  return isValidElement(node) && node.type === type;
}
