import { HTMLAttributes, HTMLElementType } from "react";

import { ListOrdered } from "./list-ordered";
import { ListUnordered, ListUnorderedProps } from "./list-unordered";

type ListProps =
  | (HTMLAttributes<HTMLUListElement> & {
      readonly as?: HTMLElementType & "ul";
    } & ListUnorderedProps)
  | (HTMLAttributes<HTMLOListElement> & {
      readonly as: HTMLElementType & "ol";
    });

export function List(props: ListProps) {
  switch (props.as) {
    case "ol":
      return <ListOrdered {...props} />;
    case "ul":
    default:
      return <ListUnordered {...props} />;
  }
}
