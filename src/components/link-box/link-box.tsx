"use client";

import NextLink from "next/link";
import { MouseEvent } from "react";

import { withTooltip } from "../tooltip";

import { LinkBoxProps } from "./link-box-props";
import * as styles from "./link-box.css";

export function LinkBox_(props: LinkBoxProps) {
  const { className, href, ...restProps } = props;

  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (["A", "BUTTON"].includes(target.tagName)) {
      event.preventDefault();
      event.stopPropagation();

      if (target.tagName === "A") {
        const targetA = target as HTMLAnchorElement;

        if (targetA.target === "_blank") {
          window.open(targetA.href, "_blank");
        } else {
          window.location.href = targetA.href;
        }
      } else if (target.tagName === "BUTTON") {
        target.click();
      }
    }
  };

  return (
    <NextLink
      className={props.className ?? styles.linkBox}
      href={String(props.href)}
      onClick={handleClick}
      {...restProps}
    />
  );
}

export const LinkBox = withTooltip(LinkBox_);
