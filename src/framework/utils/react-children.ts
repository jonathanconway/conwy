import { isObject } from "lodash";
import { ReactNode } from "react";

export interface HasChildren {
  readonly children: ReactNode;
}

export interface HasChildrenOptional {
  readonly children?: ReactNode;
}

export function checkHasChildren<TProps>(
  props: TProps,
): props is TProps & HasChildren {
  return Boolean(isObject(props) && "children" in props && props.children);
}
