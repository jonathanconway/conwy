"use client";

import { isUndefined } from "lodash";
import { MouseEvent } from "react";

import { cn } from "@/framework";

import { IconTypes } from "../icon";

import { LinkLayoutTypes } from "./link-layout-type";
import { LinkProps } from "./link-props";
import { LinkSizes } from "./link-size";
import * as linkStyles from "./link.css";

export function getLinkValues(props: LinkProps) {
  const {
    ref,
    showOpenInNew: _showOpenInNew,
    bracketedItems,
    showOpenPopup,
    download,
    icon = getLinkDefaultIcon(props),
    iconSlot,
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

  const showOpenInNew = checkShouldShowOpenInNew(props);

  const target = showOpenInNew ? "_blank" : "";

  const children = props.link?.title ?? props.children;

  return {
    nextLinkProps: {
      className,
      href,
      onClick: handleClick,
      download,
      target,
      ...restProps,
    },
    icon,
    iconSlot,
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
  if (props.className) {
    return cn(props.className, props.classNameExtended);
  }

  const sizeClassName = {
    [LinkSizes.XXS]: linkStyles.linkSizeXXS,
    [LinkSizes.XS]: linkStyles.linkSizeXS,
    [LinkSizes.S]: linkStyles.linkSizeS,
  }[props.size ?? LinkSizes.S];

  const layoutClassName = {
    [LinkLayoutTypes.Compact]: linkStyles.linkLayoutCompact,
    [LinkLayoutTypes.Inline]: linkStyles.linkLayoutInline,
  }[props.layoutType ?? LinkLayoutTypes.Inline];

  const className = cn(
    linkStyles.link,
    sizeClassName,
    layoutClassName,
    props.classNameExtended,
  );

  return className;
}

function checkShouldShowOpenInNew(props: LinkProps) {
  if (!isUndefined(props.showOpenInNew)) {
    return props.showOpenInNew;
  }

  if (props.download) {
    return false;
  }

  if (props.icon && !props.children) {
    return false;
  }

  if (props.target === "_blank" && props.showOpenInNew !== false) {
    return true;
  }

  if (!props.href) {
    return false;
  }

  if (
    props.href.startsWith("https://conwy.co") ||
    props.href.startsWith("http://conwy.co")
  ) {
    return false;
  }

  if (props.href.startsWith("http")) {
    return true;
  }

  return false;
}
