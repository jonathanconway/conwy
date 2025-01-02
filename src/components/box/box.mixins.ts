import { rounded } from "../styling";
import { vars } from "../theme";

export const boxBorderDecorative = {
  ...rounded.md,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: vars.box.decorative.border.color,
};

export const boxBorderStructural = {
  ...rounded.md,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: vars.box.structural.border.color,
};
