import { style } from "@vanilla-extract/css";

import { rems } from "@/framework/css";

import { spacingRems } from "../../../spacing/spacing.consts";
import { media } from "../../../styling";

export const container = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: rems(2),
  marginTop: rems(spacingRems.m),
});

export const header = style({
  display: "flex",
  flexDirection: "row",
  gap: rems(2),

  "@media": {
    [media.sm]: {
      gap: rems(1.5),
    },
  },
});

export const headerLeft = style({
  display: "flex",
  flex: 1,

  flexDirection: "row",
  "@media": {
    [media.sm]: {
      flexDirection: "column",
    },
    [media.mdAndUp]: {
      alignItems: "center",
    },
  },
  gap: rems(0.75),
});

export const headerLeftTitle = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: rems(0.25),
});

export const headerLeftImage = style({});

export const headerRight = style({
  flex: 1,
});

export const client = style({
  marginTop: 0,
});

export const main = style({
  display: "flex",
  flex: 1,
  flexDirection: "row",
  gap: rems(2),

  "@media": {
    [media.sm]: {
      flexDirection: "column",
    },
  },
});

export const body = style({
  flex: 1,
});

export const blurbContent = style({});

export const aside = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  gap: rems(1.5),
});

export const asideFirst = style({
  display: "flex",
  flexDirection: "row",
});

export const asideFirstColumn = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  gap: rems(1.5),

  "@media": {
    [media.greaterThanSm]: {
      width: "50%",
    },
  },
});

export const asideImages = style({});
