import { HTMLAttributes } from "react";

import { cn } from "@/framework";

import { LabelSize, LabelSizes } from "./label-sizes";
import * as styles from "./label.css";

interface LabelProps<T extends string> extends HTMLAttributes<T> {
  readonly as?: T;
  readonly className?: string;
  readonly size?: LabelSize;
}

export function Label<T extends string = "h4">(props: LabelProps<T>) {
  const {
    as,
    className = cn(
      styles.label,
      {
        [LabelSizes.Regular]: styles.labelSizeRegular,
        [LabelSizes.Small]: styles.labelSizeSmall,
      }[props.size ?? LabelSizes.Small],
    ),
    size,
    ...restProps
  } = props;

  const Element = (as ?? "h4") as any;

  return <Element className={className} {...restProps} />;
}
