"use client";

import NextLink from "next/link";

import { cn } from "@/framework/client";

import { Icon, IconTypes } from "../icon";
import { withTooltip } from "../tooltip";

import { getLinkValues } from "./get-link-values";
import { LinkAppearances } from "./link-appearance";
import { LinkProps } from "./link-props";
import * as styles from "./link.css";

export function Link_(props: LinkProps) {
  const { appearance = LinkAppearances.Text } = props;
  const {
    nextLinkProps,
    icon,
    iconSlot,
    children,
    showOpenInNew,
    showOpenPopup,
  } = getLinkValues(props);

  const linkInnerContainerClassName = cn(
    props.layoutInnerContents
      ? styles.linkInnerContainerContents
      : styles.linkInnerContainer,
    {
      [LinkAppearances.Text]: styles.linkAppearanceText,
      [LinkAppearances.Button]: styles.linkAppearanceButton,
    }[appearance],
  );

  return (
    <NextLink {...nextLinkProps}>
      <span className={styles.linkContainer}>
        {icon && <Icon className={styles.linkIcon} icon={icon} />}
        {iconSlot}
        <span className={linkInnerContainerClassName}>
          {children}
          {showOpenInNew && (
            <Icon
              className={styles.linkIconInline}
              icon={IconTypes.OpenInNew}
            />
          )}
          {showOpenPopup && (
            <Icon className={styles.linkIconInline} icon={IconTypes.Info} />
          )}
        </span>
      </span>
    </NextLink>
  );
}

export const Link = withTooltip(Link_);
