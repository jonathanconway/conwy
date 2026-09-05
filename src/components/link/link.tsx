"use client";

import NextLink from "next/link";

import { Icon, IconTypes } from "../icon";
import { withTooltip } from "../tooltip";

import { getLinkValues } from "./get-link-values";
import { LinkProps } from "./link-props";
import * as linkStyles from "./link.css";

export function Link_(props: LinkProps) {
  const {
    nextLinkProps,
    icon,
    iconSlot,
    children,
    showOpenInNew,
    showOpenPopup,
  } = getLinkValues(props);

  const linkInnerContainerClassName = props.layoutInnerContents
    ? linkStyles.linkInnerContainerContents
    : linkStyles.linkInnerContainer;

  return (
    <NextLink {...nextLinkProps}>
      <span className={linkStyles.linkContainer}>
        {icon && <Icon className={linkStyles.linkIcon} icon={icon} />}
        {iconSlot}
        <span className={linkInnerContainerClassName}>
          {children}
          {showOpenInNew && (
            <Icon
              className={linkStyles.linkIconInline}
              icon={IconTypes.OpenInNew}
            />
          )}
          {showOpenPopup && (
            <Icon className={linkStyles.linkIconInline} icon={IconTypes.Info} />
          )}
        </span>
      </span>
    </NextLink>
  );
}

export const Link = withTooltip(Link_);
