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

export const boxSizeMedium = {
  padding: "0.75rem" /* 12px */,
};

export const boxSizeSmall = {
  display: "inline-flex",
  lineHeight: "0.75rem",
  padding: "0.125rem 0.25rem",
};
