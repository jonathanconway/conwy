import { kebabCase } from "lodash";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import { Heading } from "../../heading";

import * as styles from "./mdx-h2.styles";

export type MdxH2Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function MdxH2({ children, ...restProps }: MdxH2Props) {
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
