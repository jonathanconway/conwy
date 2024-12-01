"use client";

import NextLink from "next/link";
import { MouseEvent } from "react";

import { Icon, IconTypes } from "../icon";
import { withTooltip } from "../tooltip";

import { LinkProps } from "./link-props";
import * as styles from "./link.styles";

export function Link_(props: LinkProps) {
  const {
    children,
    ref,
    showOpenInNew: _showOpenInNew,
    bracketedItems,
    showOpenPopup,
    download,
    href = "",
    icon,
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

  return (
    <NextLink
      className={styles.link}
      href={href}
      onClick={handleClick}
      {...restProps}
    >
      {icon && <Icon className={styles.linkIcon} icon={icon} />}

      {children}

      {showOpenInNew && (
        <Icon className={styles.linkIcon} icon={IconTypes.OpenInNew} />
      )}

      {showOpenPopup && (
        <Icon className={styles.linkIcon} icon={IconTypes.Info} />
      )}

      {download && (
        <Icon className={styles.linkIcon} icon={IconTypes.Download} />
      )}
    </NextLink>
  );
}

export const Link = withTooltip(Link_);
