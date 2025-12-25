"use client";

import { MouseEvent } from "react";

import { cn } from "@/framework/client";

import * as textSizeStyles from "../text/text-size/text-size.css";

import { LinkLayoutTypes } from "./link-layout-type";
import { LinkProps } from "./link-props";
import * as linkStyles from "./link.css";

export function getLinkAttributes(props: LinkProps) {
  const {
    ref,
    showOpenInNew: _showOpenInNew,
    bracketedItems,
    showOpenPopup,
    download,
    icon: iconLeft,
    size,
    layoutType = LinkLayoutTypes.Inline,
    onClick,
    ...restProps
  } = props;

  const showOpenInNew =
    restProps.target === "_blank" &&
    props.showOpenInNew !== false &&
    !props.download;

  const href = props.link?.url ?? props.href ?? "javascript:";

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href) {
      event.preventDefault();
    }
    onClick?.(event);
  };

  const sizeStyle = size ? textSizeStyles[size] : undefined;

  const layoutStyle = {
    [LinkLayoutTypes.Compact]: linkStyles.linkLayoutCompact,
    [LinkLayoutTypes.Inline]: linkStyles.linkLayoutInline,
  }[layoutType];

  const className = cn(
    props.className ?? linkStyles.link,
    sizeStyle,
    layoutStyle,
  );

  const children = props.link?.title ?? props.children;

  return {
    nextLink: {
      className,
      href,
      handleClick,
      ...restProps,
    },
    iconLeft,
    children,
    showOpenInNew,
    showOpenPopup,
    download,
  };
}
