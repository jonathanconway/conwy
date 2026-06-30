"use client";

import { MouseEvent } from "react";

import { cn } from "@/framework/client";

import { IconTypes } from "../icon";
import * as textSizeStyles from "../text/text-size/text-size.css";

import { LinkLayoutTypes } from "./link-layout-type";
import { LinkProps } from "./link-props";
import * as linkStyles from "./link.css";

export function getLinkValues(props: LinkProps) {
  const {
    ref,
    showOpenInNew: _showOpenInNew,
    bracketedItems,
    showOpenPopup,
    download,
    icon = getLinkDefaultIcon(props),
    size,
    layoutType = LinkLayoutTypes.Inline,
    className: propsClassName,
    onClick,
    ...restProps
  } = props;

  const className = getLinkClassName(props);

  const href = props.link?.url ?? props.href ?? "javascript:";

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href) {
      event.preventDefault();
    }
    onClick?.(event);
  };

  const showOpenInNew =
    restProps.target === "_blank" &&
    props.showOpenInNew !== false &&
    !props.download;

  const children = props.link?.title ?? props.children;

  return {
    nextLinkProps: {
      className,
      href,
      onClick: handleClick,
      download,
      ...restProps,
    },
    icon,
    children,
    showOpenInNew,
    showOpenPopup,
    download,
  };
}

function getLinkDefaultIcon(props: LinkProps) {
  if (props.download) {
    return IconTypes.Download;
  }
}

function getLinkClassName(props: LinkProps) {
  const sizeStyle = props.size ? textSizeStyles[props.size] : {};

  const layoutStyle = {
    [LinkLayoutTypes.Compact]: linkStyles.linkLayoutCompact,
    [LinkLayoutTypes.Inline]: linkStyles.linkLayoutInline,
  }[props.layoutType ?? LinkLayoutTypes.Inline];

  const className = cn(
    props.className ?? linkStyles.link,
    sizeStyle,
    layoutStyle,
  );

  return className;
}
