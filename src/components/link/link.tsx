import NextLink from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

import { Icon, IconTypes } from "../icon";
import { withTooltip } from "../tooltip";

import * as styles from "./link.styles";

type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  readonly showOpenInNew?: boolean;
};

export function Link_(props: LinkProps) {
  const { children, ref, showOpenInNew: _showOpenInNew, ...restProps } = props;

  const showOpenInNew =
    restProps.target === "_blank" && props.showOpenInNew !== false;

  if (props.href) {
    return (
      <NextLink className={styles.link} href={props.href} {...restProps}>
        {children}

        {showOpenInNew && (
          <Icon className={styles.linkIcon} icon={IconTypes.OpenInNew} />
        )}
      </NextLink>
    );
  }

  // todo: extract to LinkText
  return (
    <span className={styles.link} {...restProps}>
      {props.children}
    </span>
  );
}

export const Link = withTooltip(Link_);
