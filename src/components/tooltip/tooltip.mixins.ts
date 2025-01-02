import { CSSProperties } from "react";

import { vars } from "../theme";

export const tooltip: CSSProperties = {
  backgroundColor: vars.tooltip.background.color,
  color: vars.tooltip.color,
  zIndex: 10_000,
  userSelect: "none",
};
