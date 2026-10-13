import { TEXT_TYPES_DETAILS } from "../text/text-type-details";

import { HeadingLevels } from "./heading-level";

export const HEADING_LEVEL_ELEMENTS = {
  [HeadingLevels.Level1]: TEXT_TYPES_DETAILS.heading1,
  [HeadingLevels.Level2]: TEXT_TYPES_DETAILS.heading2,
  [HeadingLevels.Level3]: TEXT_TYPES_DETAILS.heading3,
  [HeadingLevels.Level4]: TEXT_TYPES_DETAILS.heading4,
  [HeadingLevels.Level5]: TEXT_TYPES_DETAILS.heading5,
};

export const HEADING_ELEMENTS = Object.values(HEADING_LEVEL_ELEMENTS);
