import { HTMLAttributes } from "react";

import { cn } from "@/framework/client";

import * as styles from "./list.css";

export type ListUnorderedProps = HTMLAttributes<HTMLUListElement> & {
  readonly noBullets?: boolean;
};

export function ListUnordered(props: ListUnorderedProps) {
  const {
    className = cn(
      styles.unorderedList,
      props.noBullets
        ? styles.unorderedListNoBullets
        : styles.unorderedListBullets,
    ),
    ...restProps
  } = props;

  return <ul className={className} {...restProps} />;
}
