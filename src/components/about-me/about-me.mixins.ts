import { ComplexStyleRule } from "@vanilla-extract/css";

import { rounded } from "../styling";
import { vars } from "../theme";

export const outerContainer = {
  borderBottom: "solid 1px",
  borderBottomColor: vars.aboutMe.container.border.bottom.color,
};

export const container: ComplexStyleRule = {
  display: "flex",

  flexDirection: "row",
  gap: "1rem",
  alignItems: "flex-start",

  marginTop: "2.5rem",
  marginBottom: "1.5rem",
};

export const h1 = {
  marginTop: 0,
};

export const face = {
  ...rounded.full,
  borderWidth: "2px",
  borderColor: vars.aboutMe.face.border.color,
  borderStyle: "solid",
};
