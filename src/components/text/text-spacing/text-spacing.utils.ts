import { Maybe } from "@/framework";

import { TextType } from "../text-type";

import {
  TextSpacingStrategies,
  TextSpacingStrategy,
} from "./text-spacing-strategy";
import * as styles from "./text-spacing.css";

export const TEXT_SPACING_STRATEGY_DEFAULT =
  TextSpacingStrategies.IncludeExceptFirstChild;

export function getTextSpacingClassName(
  type: TextType,
  strategy?: TextSpacingStrategy,
) {
  const spacingClassNameKey = {
    [TextSpacingStrategies.IncludeExceptFirstChild]: `${type}SpacingFirstChild`,
    [TextSpacingStrategies.Include]: `${type}Spacing`,
    [TextSpacingStrategies.Exclude]: undefined,
  }[strategy ?? TEXT_SPACING_STRATEGY_DEFAULT] as Maybe<keyof typeof styles>;
  const spacingClassName = spacingClassNameKey
    ? styles[spacingClassNameKey]
    : undefined;
  return spacingClassName;
}
