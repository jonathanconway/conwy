import { HTMLAttributes, HTMLElementType } from "react";

import { ListPropsBase } from "./list-props-base";
import { getListOrderedOlProps } from "./list.utils";

export type ListOrderedProps = ListPropsBase &
  HTMLAttributes<HTMLOListElement> & {
    readonly as?: HTMLElementType & "ol";
  };

export function ListOrdered(props: ListOrderedProps) {
  const { olClassName, olRestProps } = getListOrderedOlProps(props);

  return <ol className={olClassName} {...olRestProps} />;
}
