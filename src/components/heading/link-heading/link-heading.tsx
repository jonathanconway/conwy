import { kebabCase } from "lodash";

import { Heading, HeadingProps } from "../heading";

import * as styles from "./link-heading.css";

export type LinkHeadingProps = HeadingProps & { readonly href: string };

export function LinkHeading({
  children,
  id,
  href,
  ...restProps
}: LinkHeadingProps) {
  const headingId = id ?? kebabCase(children?.toString());

  return (
    <Heading id={headingId} {...restProps}>
      <a className={styles.link} href={href}>
        {children}

        <span className={styles.linkHoverIcon}>🔗</span>
      </a>
    </Heading>
  );
}
