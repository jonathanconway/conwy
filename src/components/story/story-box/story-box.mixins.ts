import { CSSProperties } from "@vanilla-extract/css";

import { pxs } from "@/framework/css";

import { vars } from "../../theme";

export const storyBox: CSSProperties = {
  boxSizing: "border-box",
  width: "100%",
  height: "100%",
  borderStyle: "dashed",
  borderWidth: pxs(1),
  borderColor: vars.storyBox.border.color,
  backgroundColor: vars.storyBox.background.color,
};
