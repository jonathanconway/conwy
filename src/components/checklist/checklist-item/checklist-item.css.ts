import { globalStyle, style } from "@vanilla-extract/css";

import * as textMixins from "../../text/text.mixins";

export const checklistLi = style({
  ...textMixins.li,
  lineHeight: "unset",
  marginTop: 0,
  listStyle: "none",
  border: "solid 1px silver",
  borderRadius: "0.25rem",
  selectors: {
    "&:hover": {
      backgroundColor: "#dedede",
      borderColor: "gray",
    },
    "&:has(:checked)": {
      backgroundColor: "lightyellow",
      border: "solid 1px darkgoldenrod",
    },
  },
});

export const checklistLiLabel = style({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "start",
  padding: "0.25rem 0.5rem",
  gap: "0.5rem",
  cursor: "pointer",
});

globalStyle(`${checklistLi} input[type="checkbox"]`, {
  marginTop: "0.25rem",
});
