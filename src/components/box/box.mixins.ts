import { rounded } from "../styling";
import { vars } from "../theme";

export const boxBorder = {
  ...rounded.md,
  borderWidth: "1px",
  borderColor: vars.box.border.color,
};
