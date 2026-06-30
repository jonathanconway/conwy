import { kebabCase } from "lodash";
import { HTMLProps } from "react";

import { Heading } from "../heading";
import { HeadingLevels } from "../heading-level";

import * as styles from "./section-heading.css";

export type SectionHeadingProps = HTMLProps<HTMLHeadingElement>;

export function SectionHeading({
  children,
  id,
  ...restProps
}: SectionHeadingProps) {
  const headingId = id ?? kebabCase(children?.toString());

  return (
    <Heading level={HeadingLevels.Level3} id={headingId} {...restProps}>
      <a className={styles.link} href={`#${headingId}`}>
        {children}

        <span className={styles.linkHoverHash}>#</span>
      </a>
    </Heading>
  );
}
