import * as textStyles from "../text/text.css";

import { getHeadingSpacingStyleNames } from "./get-heading-spacing-style-names";
import { HeadingLevel } from "./heading-level";

export function getHeadingSpacingStyles(level: HeadingLevel) {
  return textStyles[getHeadingSpacingStyleNames(level)];
}
