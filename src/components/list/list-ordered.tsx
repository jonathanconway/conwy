import { HTMLAttributes } from "react";

import * as styles from "./list.css";

type ListOrderedProps = HTMLAttributes<HTMLOListElement>;

export function ListOrdered(props: ListOrderedProps) {
  const { className = styles.orderedList, ...restProps } = props;

  return <ol className={className} {...restProps} />;
}
