import { HTMLProps } from "react";

import { Fragment } from "../fragments";

import * as styles from "./aside.css";

type AsideProps = HTMLProps<HTMLElement>;

export function Aside({ className, children, ...restProps }: AsideProps) {
  return (
    <aside className={className ?? styles.aside} {...restProps}>
      <Fragment>{children}</Fragment>
    </aside>
  );
}
