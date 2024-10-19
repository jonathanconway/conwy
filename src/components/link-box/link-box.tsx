import NextLink from "next/link";

import { withTooltip } from "../tooltip";

import { LinkBoxProps } from "./link-box-props";
import * as styles from "./link-box.styles";

export function LinkBox_(props: LinkBoxProps) {
  const { className, href, ...restProps } = props;

  return (
    <NextLink
      className={props.className ?? styles.linkBox}
      href={String(props.href)}
      {...restProps}
    />
  );
}

export const LinkBox = withTooltip(LinkBox_);
