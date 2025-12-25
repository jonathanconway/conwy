"use client";

import NextLink from "next/link";

import { Icon, IconTypes } from "../icon";
import { withTooltip } from "../tooltip";

import { getLinkAttributes } from "./get-link-values";
import { LinkProps } from "./link-props";
import * as linkStyles from "./link.css";

export function Link_(props: LinkProps) {
  const {
    nextLink,
    iconLeft,
    children,
    showOpenInNew,
    showOpenPopup,
    download,
  } = getLinkAttributes(props);
  return (
    <NextLink {...nextLink}>
      {iconLeft && <Icon className={linkStyles.linkIcon} icon={iconLeft} />}

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
