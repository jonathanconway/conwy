import { DetailedHTMLProps, HTMLAttributes } from "react";

import { Text, TextTypes } from "../text";

import { HeadingLevel } from "./heading-level";

export type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  readonly level?: HeadingLevel;
};

/**
 * `Heading` is a convenience component for `Text` of type `heading`.
 * @param param0
 * @returns
 */
export function Heading({ level = 1, ...restProps }: HeadingProps) {
  const type = {
    1: TextTypes.Heading1,
    2: TextTypes.Heading2,
    3: TextTypes.Heading3,
    4: TextTypes.Heading4,
    5: TextTypes.Heading5,
  }[level];

  return <Text type={type} {...restProps} />;
}
