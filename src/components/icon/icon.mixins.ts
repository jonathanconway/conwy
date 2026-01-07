import { ComplexStyleRule } from "@vanilla-extract/css";

export const iconContainer: ComplexStyleRule = {
  position: "relative",
  display: "inline-block",
  pointerEvents: "none",
};

export const iconMaterialStyleOverrides = {
  display: "flex",
  width: "100%",
  height: "100%",
};
