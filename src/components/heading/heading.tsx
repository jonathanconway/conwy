import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import { Stack, StackDirections, StackDistributions } from "../stack";
import {
  Text,
  TextSpacing,
  TextSpacingStrategies,
  TextType,
  TextTypes,
} from "../text";

import { HeadingLevel } from "./heading-level";

export type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  readonly classNameExtended?: HTMLAttributes<HTMLHeadingElement>["className"];
  readonly level?: HeadingLevel;
  readonly afterSlot?: ReactNode;
};

/**
 * `Heading` is a convenience component for `Text` of type `heading`.
 */
export function Heading(props: HeadingProps) {
  const { level = 1, children, afterSlot, ...restProps } = props;

  const type = {
    1: TextTypes.Heading1,
    2: TextTypes.Heading2,
    3: TextTypes.Heading3,
    4: TextTypes.Heading4,
    5: TextTypes.Heading5,
  }[level];

  return afterSlot ? (
    <TextSpacing
      type={type as TextType}
      strategy={TextSpacingStrategies.Include}
    >
      <Stack
        gap={1}
        direction={StackDirections.Row}
        distribution={StackDistributions.Flow}
      >
        <Text type={type} {...restProps}>
          {children}
        </Text>
        <span>{afterSlot}</span>
      </Stack>
    </TextSpacing>
  ) : (
    <Text type={type} {...restProps}>
      {children}
    </Text>
  );
}
