import { ComplexStyleRule } from "@vanilla-extract/css";

export const stackBase: ComplexStyleRule = {
  display: "flex",
  gap: "1rem",
};

export const stackColumn: ComplexStyleRule = {
  ...stackBase,
  flexDirection: "column",
};

export const stackRow: ComplexStyleRule = {
  ...stackBase,
  flexDirection: "column",
};