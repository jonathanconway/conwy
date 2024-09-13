import { DetailedHTMLProps, HTMLAttributes } from "react";

import * as styles from "./heading.styles";

export type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  readonly level?: 1 | 2 | 3 | 4;
};

export function Heading({ level, className, ...restProps }: HeadingProps) {
  switch (level) {
    case 1:
      return <h1 className={className ?? styles.h1} {...restProps} />;
    case 2:
      return <h2 className={className ?? styles.h2} {...restProps} />;
    case 3:
      return <h3 className={className ?? styles.h3} {...restProps} />;
    case 4:
      return <h4 className={className ?? styles.h4} {...restProps} />;
  }
}
