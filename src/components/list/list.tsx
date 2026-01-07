import { HTMLProps } from "react";

import * as styles from "./list.css";

type ListProps = HTMLProps<HTMLUListElement>;

export function List(props: ListProps) {
  const { className = styles.list, ...restProps } = props;

  return <ul className={className} {...restProps} />;
}
