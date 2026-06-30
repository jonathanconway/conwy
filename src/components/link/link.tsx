"use client";

import NextLink from "next/link";

import { Icon, IconTypes } from "../icon";
import { withTooltip } from "../tooltip";

import { getLinkValues } from "./get-link-values";
import { LinkProps } from "./link-props";
import * as linkStyles from "./link.css";

export function Link_(props: LinkProps) {
  const { nextLinkProps, icon, children, showOpenInNew, showOpenPopup } =
    getLinkValues(props);

  return (
    <NextLink {...nextLinkProps}>
      {icon && <Icon className={linkStyles.linkIcon} icon={icon} />}

      {children}

      {showOpenInNew && (
        <Icon className={linkStyles.linkIcon} icon={IconTypes.OpenInNew} />
      )}

      {showOpenPopup && (
        <Icon className={linkStyles.linkIcon} icon={IconTypes.Info} />
      )}
    </NextLink>
  );
}

export const Link = withTooltip(Link_);
