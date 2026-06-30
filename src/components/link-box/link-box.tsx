"use client";

import { MouseEvent } from "react";

import { cn } from "@/framework/client";

import { Link } from "../link";
import { withTooltip } from "../tooltip";

import { LinkBoxProps } from "./link-box-props";
import * as styles from "./link-box.css";

export function LinkBox_(props: LinkBoxProps) {
  const {
    className = cn(
      styles.linkBox,
      props.hasMaxWidth ? styles.linkBoxMaxWidth : null,
    ),
    hasMaxWidth,
    href,
    ...restProps
  } = props;

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
    <Link
      className={className}
      href={String(props.href)}
      onClick={handleClick}
      {...restProps}
    />
  );
}

export const LinkBox = withTooltip(LinkBox_);
