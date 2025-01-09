import { ComplexStyleRule, GlobalStyleRule } from "@vanilla-extract/css";

export const stackBase: ComplexStyleRule = {
  display: "flex",
  gap: "1rem",
};

export const stackColumn: ComplexStyleRule = {
  flexDirection: "column",
};

export const stackRow: ComplexStyleRule = {
  flexDirection: "row",
};

export const stackImmediateChildren: GlobalStyleRule = {
  flex: 1,
};
