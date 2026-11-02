import { HTMLAttributes, HTMLElementType } from "react";

import { ListPropsBase } from "./list-props-base";
import { getListOrderedUlProps } from "./list.utils";

export type ListUnorderedProps = ListPropsBase &
  HTMLAttributes<HTMLUListElement> & {
    readonly noBullets?: boolean;
    readonly as?: HTMLElementType & "ul";
  };

export function ListUnordered(props: ListUnorderedProps) {
  const { ulClassName, ulRestProps } = getListOrderedUlProps(props);
  return <ul className={ulClassName} {...ulRestProps} />;
}
