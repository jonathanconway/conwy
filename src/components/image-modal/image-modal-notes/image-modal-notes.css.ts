import { style } from "@vanilla-extract/css";

import { rems } from "@/framework/utils/rems.css_";

import * as shadowMixins from "../../shadow";
import { colors, media, rounded } from "../../styling";
import * as textSizeConsts from "../../text/text-size/text-size.consts";

export const notesContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  // width: "12rem",

  "@media": {
    [media.lessThanLg]: {
      marginBottom: "1rem",
      marginLeft: "1rem",
      width: "100%",
    },
  },
});

export const notesContainerWithHotspots = style({
  paddingLeft: "1rem",
});

export const noteText = style({
  position: "relative",
  paddingTop: "0.125rem",
  fontSize: rems(textSizeConsts.fontSizeRems.sm),
});

export const noteTextWithHotspots = style({
  paddingLeft: "1.5rem",
  "@media": {
    [media.sm]: {
      // paddingLeft: "0.5rem",
    },
  },
});

export const noteNumber = style({
  position: "absolute",
  left: "-0.75rem",
  backgroundColor: colors.stone_700,
  borderColor: colors.yellow_400,
  borderWidth: "2px",
  borderStyle: "solid",
  boxShadow: shadowMixins.boxShadowRegular,
  width: "1.5rem",
  height: "1.5rem",
  color: colors.white,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: rems(textSizeConsts.fontSizeRems.sm),
  ...rounded.full,
});
