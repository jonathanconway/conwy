import * as textStyles from "../text/text.css";

import { HeadingLevel } from "./heading-level";

export function getHeadingSpacingStyleNames(level: HeadingLevel) {
  return `h${level}Spacing` as keyof typeof textStyles;
}
