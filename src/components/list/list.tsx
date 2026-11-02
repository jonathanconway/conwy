import { assert } from "@/framework";

import { ListOrdered, ListOrderedProps } from "./list-ordered";
import { ListUnordered, ListUnorderedProps } from "./list-unordered";

type ListProps = ListOrderedProps | ListUnorderedProps;

export function List(props: ListProps) {
  switch (props.as) {
    case "ol":
      return <ListOrdered {...props} />;
    case "ul":
    case undefined:
    default:
      assert(props.as === "ul");
      return <ListUnordered {...props} />;
  }
}
