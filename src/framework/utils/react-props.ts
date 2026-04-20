import { isObject } from "lodash";
import { FunctionComponent, ReactNode, isValidElement } from "react";

import { Maybe } from "./typing";

export type Props<T extends FunctionComponent> = Parameters<T>[0];

export function hasProps<T extends Maybe<ReactNode>, P extends object>(
  input?: T,
): input is T & { readonly props?: P } {
  return (
    !!input &&
    isValidElement(input) &&
    "props" in input &&
    isObject(input.props)
  );
}
