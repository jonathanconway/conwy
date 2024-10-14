import { cn } from "@jonathanconway/tailwindjs";
import NextLink from "next/link";

import { Icon, IconTypes } from "../icon";
import { withTooltip } from "../tooltip";

import { LinkBracketedItems } from "./link-bracketed-item";
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

  if (props.href) {
    return (
      <NextLink
        className={cn(styles.link, styles.linkDecoration)}
        href={props.href}
        {...restProps}
      >
        <span className={styles.linkText}>
          {children}

          {showOpenInNew && (
            <Icon className={styles.linkIcon} icon={IconTypes.OpenInNew} />
          )}

          {props.download && (
            <Icon className={styles.linkIcon} icon={IconTypes.Download} />
          )}
        </span>

        <LinkBracketedItems items={props.bracketedItems} />
      </NextLink>
    );
  }

  // todo: extract to LinkText
  return (
    <span className={styles.link} {...restProps}>
      <span className={styles.linkText}>{children}</span>

      <LinkBracketedItems items={props.bracketedItems} />
    </span>
  );
}

export const Link = withTooltip(Link_);
