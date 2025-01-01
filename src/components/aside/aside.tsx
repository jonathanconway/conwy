import { HTMLProps } from "react";

import * as styles from "./aside.css";

type AsideProps = HTMLProps<HTMLElement>;

export function Aside({ className, ...restProps }: AsideProps) {
  return <aside className={className ?? styles.aside} {...restProps} />;
}
