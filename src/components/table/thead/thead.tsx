import { HTMLProps } from "react";

import * as styles from "./thead.css";

type THeadProps = HTMLProps<HTMLTableSectionElement>;

export function THead(props: THeadProps) {
  const { className = styles.thead, ...restProps } = props;
  return <thead className={className} {...restProps} />;
}
