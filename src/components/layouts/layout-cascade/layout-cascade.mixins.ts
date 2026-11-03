import { CSSProperties } from "@vanilla-extract/css";

import { rounded } from "../../styling";

import { CHILD_CASCADE_SIZE_PX } from "./layout-cascade.consts";

export const container: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export const cascadeContainer: CSSProperties = {
  position: "relative",
  margin: "auto",
};

const childContainerBase: CSSProperties = {};

export const childContainerSingle: CSSProperties = {
  position: "relative",
  height: "10rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ...childContainerBase,
};

export const childContainer: CSSProperties = {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  ...childContainerBase,
};

export const childInner: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
};

export const child: CSSProperties = {
  ...rounded.regular,
  pointerEvents: "none",
  margin: "0.25rem",
  maxHeight: "100%",
  width: "auto",
};

export const selectedChildContainer: CSSProperties = {
  ...childContainerBase,
  display: "inline-flex",
  alignContent: "center",
  margin: "auto",
  cursor: "pointer",
  maxWidth: CHILD_CASCADE_SIZE_PX.width,
  width: CHILD_CASCADE_SIZE_PX.width,
  maxHeight: CHILD_CASCADE_SIZE_PX.height,
  height: CHILD_CASCADE_SIZE_PX.width,
};

export const selectedChild: CSSProperties = {
  ...rounded.regular,
  pointerEvents: "none",
  margin: "auto",
  maxHeight: "100%",
  maxWidth: "100%",
  width: "auto",
  height: "auto",
};

export const nav: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "end",
  gap: "0.5rem",
};
