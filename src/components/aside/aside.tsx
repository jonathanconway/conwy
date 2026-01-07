import { HTMLProps } from "react";

import * as styles from "./aside.css";

type AsideProps = HTMLProps<HTMLElement>;

export function Aside(props: AsideProps) {
  const { className = styles.aside, ...restProps } = props;

  return <aside className={className} {...restProps} />;
}
