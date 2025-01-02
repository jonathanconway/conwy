import { HTMLAttributes } from "react";

import * as styles from "./label.css";

interface LabelProps<T extends string> extends HTMLAttributes<T> {
  readonly as?: T;
  readonly className?: string;
}

export function Label<T extends string = "h4">({
  as,
  className,
  ...restProps
}: LabelProps<T>) {
  const Element = (as ?? "h4") as any;
  return <Element className={className ?? styles.label} {...restProps} />;
}
