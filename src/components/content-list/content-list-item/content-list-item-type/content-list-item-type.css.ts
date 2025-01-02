import { style } from "@vanilla-extract/css";

import { text } from "../../../styling";
import { vars } from "../../../theme";

export const type = style({
  display: "inline-block",
  color: vars.contentListItem.type.color,
  ...text.size.xs,
  fontWeight: 500,
  textTransform: "uppercase",
  textAlign: "right",
});
