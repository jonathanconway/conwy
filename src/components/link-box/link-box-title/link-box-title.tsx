import { cn } from "@/framework/client";

import { LinkBoxTitleProps } from "./link-box-title-props";
import { LinkBoxTitleSizes } from "./link-box-title-sizes";
import * as styles from "./link-box-title.css";

export function LinkBoxTitle(props: LinkBoxTitleProps) {
  const {
    className = cn(
      styles.linkBoxTitle,
      {
        [LinkBoxTitleSizes.Medium]: styles.linkBoxTitleMedium,
        [LinkBoxTitleSizes.Small]: styles.linkBoxTitleSmall,
      }[props.size ?? LinkBoxTitleSizes.Medium],
    ),
    ...restProps
  } = props;

  return <span className={className} {...restProps} />;
}
