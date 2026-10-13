import { style } from "@vanilla-extract/css";

import * as listItemMixins from "../../list/list-item/list-item.mixins";

export const checklistLi = style({
  ...listItemMixins.listItem,
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
  padding: "0.5rem",
  gap: "0.5rem",
  cursor: "pointer",
});
