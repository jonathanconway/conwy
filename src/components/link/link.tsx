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
    ...restProps
  } = props;

  const showOpenInNew =
    restProps.target === "_blank" &&
    props.showOpenInNew !== false &&
    !props.download;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!props.href) {
      event.preventDefault();
    }
    props.onClick?.(event);
  };

  return (
    <NextLink
      className={styles.link}
      href={props.href ?? ""}
      {...restProps}
      onClick={handleClick}
    >
      {props.icon && <Icon className={styles.linkIcon} icon={props.icon} />}

      {children}

      {showOpenInNew && (
        <Icon className={styles.linkIcon} icon={IconTypes.OpenInNew} />
      )}

      {props.download && (
        <Icon className={styles.linkIcon} icon={IconTypes.Download} />
      )}
    </NextLink>
  );
}

export const Link = withTooltip(Link_);
