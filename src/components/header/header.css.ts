import { style } from "@vanilla-extract/css";

import { vars } from "../theme/theme-contract.css";

export const container = style({
  display: "flex",
  flexDirection: "row",
  paddingTop: "2rem",
  alignItems: "center",
  justifyContent: "space-between",
});
