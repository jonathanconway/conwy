import { HTMLProps } from "react";

import * as styles from "./list.css";

type UnorderedListProps = HTMLProps<HTMLUListElement>;

export function UnorderedList(props: UnorderedListProps) {
  const { className = styles.list, ...restProps } = props;

  return <ul className={className} {...restProps} />;
}
