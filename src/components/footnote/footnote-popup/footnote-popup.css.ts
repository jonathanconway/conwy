import { style } from "@vanilla-extract/css";

import { vars } from "../../theme";

export const tooltipBorder = vars.box.decorative.border.color;

export const tooltipArrow = style({
  borderBottomStyle: "solid",
  borderBottomWidth: "1px",
  borderBottomColor: tooltipBorder,
  borderRightStyle: "solid",
  borderRightWidth: "1px",
  borderRightColor: tooltipBorder,
  // todo: try to find a better way via the tooltip api
  width: "1rem !important",
  height: "1rem !important",
  bottom: "-0.5rem !important",
});
