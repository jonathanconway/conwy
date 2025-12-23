import { HTMLProps } from "react";

import { Fragment } from "../fragments";

import * as styles from "./aside.css";

type AsideProps = HTMLProps<HTMLElement>;

export function Aside(props: AsideProps) {
  const { className, children, ...restProps } = props;

  return (
    <aside className={className ?? styles.aside} {...restProps}>
      <Fragment>{children}</Fragment>
    </aside>
  );
}
