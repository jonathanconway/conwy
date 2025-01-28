import { DetailedHTMLProps, HTMLAttributes } from "react";

import { TypeOfConst } from "@/framework";

import * as styles from "./heading.css";

export type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  readonly level?: 1 | 2 | 3 | 4 | 5;
};

const HeadingLevels = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
} as const;

type HeadingLevel = TypeOfConst<typeof HeadingLevels>;

const HEADING_LEVEL_DETAILS: Record<
  number,
  {
    readonly element: HeadingLevel;
    readonly className: string;
  }
> = {
  1: {
    element: "h1",
    className: styles.h1,
  },
  2: {
    element: "h2",
    className: styles.h2,
  },
  3: {
    element: "h3",
    className: styles.h3,
  },
  4: {
    element: "h4",
    className: styles.h4,
  },
  5: {
    element: "h5",
    className: styles.h5,
  },
};

export function Heading({ level, className, ...restProps }: HeadingProps) {
  const details = HEADING_LEVEL_DETAILS[level ?? 1];
  const Element = details.element;

  return <Element className={className ?? details.className} {...restProps} />;
}
