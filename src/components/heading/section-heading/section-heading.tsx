import { kebabCase } from "lodash";
import { HTMLProps } from "react";

import { Heading } from "../heading";

import * as styles from "./section-heading.css";

export type SectionHeadingProps = HTMLProps<HTMLHeadingElement>;

export function SectionHeading({
  children,
  ...restProps
}: SectionHeadingProps) {
  const id = kebabCase(children?.toString());

  return (
    <Heading level={3} id={id} {...restProps}>
      <a className={styles.link} href={`#${id}`}>
        {children}

        <span className={styles.linkHoverHash}>#</span>
      </a>
    </Heading>
  );
}
