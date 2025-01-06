"use client";

import NextLink from "next/link";
import { MouseEvent } from "react";

import { cn } from "@/framework/client";

import { Icon, IconTypes } from "../icon";
import * as textSizeStyles from "../text/text-size/text-size.css";
import { withTooltip } from "../tooltip";

import { LinkProps } from "./link-props";
import * as linkStyles from "./link.css";

export function Link_(props: LinkProps) {
  const {
    className,
    children,
    ref,
    showOpenInNew: _showOpenInNew,
    bracketedItems,
    showOpenPopup,
    download,
    href = "",
    icon,
    size,
    onClick,
    ...restProps
  } = props;

  const showOpenInNew =
    restProps.target === "_blank" &&
    props.showOpenInNew !== false &&
    !props.download;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href) {
      event.preventDefault();
    }
    onClick?.(event);
  };

  const sizeStyle = size ? textSizeStyles[size] : undefined;

  return (
    <NextLink
      className={cn(className ?? linkStyles.link, sizeStyle)}
      href={href}
      onClick={handleClick}
      {...restProps}
    >
      {icon && <Icon className={linkStyles.linkIcon} icon={icon} />}

      {children}

      {showOpenInNew && (
        <Icon className={linkStyles.linkIcon} icon={IconTypes.OpenInNew} />
      )}

      {showOpenPopup && (
        <Icon className={linkStyles.linkIcon} icon={IconTypes.Info} />
      )}

      {download && (
        <Icon className={linkStyles.linkIcon} icon={IconTypes.Download} />
      )}
    </NextLink>
  );
}

export const Link = withTooltip(Link_);
