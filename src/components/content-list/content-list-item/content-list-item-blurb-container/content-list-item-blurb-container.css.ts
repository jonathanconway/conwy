import { globalStyle, style } from "@vanilla-extract/css";

import { lineHeightRems } from "../../../text/text-size/text-size.consts";
import * as textStyles from "../../../text/text.css";

export const contentListItemBlurbContainer = style({});

globalStyle(`${contentListItemBlurbContainer} ${textStyles.paragraph}`, {
  lineHeight: lineHeightRems.s,
});
