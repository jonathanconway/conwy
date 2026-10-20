import { ReactNode } from "react";

import { TextType } from "../text-type";

import { TextSpacingStrategy } from "./text-spacing-strategy";
import { getTextSpacingClassName } from "./text-spacing.utils";

export interface TextSpacingProps {
  readonly type: TextType;
  readonly strategy: TextSpacingStrategy;
  readonly children: ReactNode;
}

export function TextSpacing(props: TextSpacingProps) {
  const { type, strategy, children } = props;

  const spacingClassName = getTextSpacingClassName(type, strategy);

  const className = spacingClassName;

  return <div className={className}>{children}</div>;
}
