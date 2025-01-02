import { HTMLProps } from "react";

import * as styles from "./list.css";

type ListProps = HTMLProps<HTMLUListElement>;

export function List({ className, ...props }: ListProps) {
  return <ul className={className ?? styles.list} {...props} />;
}
