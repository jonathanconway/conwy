import { style } from "@vanilla-extract/css";

import { vars } from "../theme";

export const checkboxLabel = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5em",
  cursor: "pointer",
  fontSize: "0.875rem" /* 14px */,
  lineHeight: "1.25rem" /* 20px */,
});

export const checkboxInput = style({
  position: "relative",
  height: "1rem",
  width: "1rem",
  minWidth: "1rem",
  minHeight: "1rem",
  selectors: {
    "&:before": {
      position: "absolute",
      display: "inline-block",
      content: " ",
      top: "-1px",
      right: "-1px",
      bottom: "-1px",
      left: "-1px",
      borderRadius: "0.25rem",
      cursor: "pointer",
    },
    "&:after": {
      cursor: "pointer",
    },
    "&:checked:after": {
      position: "absolute",
      content: "✔",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      fontSize: "0.8rem",
      color: "black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});

export const checkboxInputBaseColorYellow = style({
  selectors: {
    "&:before": {
      border: "solid 1px gray",
      backgroundColor: "#efefef",
      backgroundImage: `linear-gradient(to bottom, #efefef, silver)`,
    },
    "&:checked:before": {
      borderColor: vars.checkbox.base.color.yellowDark,
      backgroundColor: vars.checkbox.base.color.yellowLight,
      backgroundImage: `linear-gradient(to bottom, ${vars.checkbox.base.color.yellowLight}, ${vars.checkbox.base.color.yellow})`,
    },
    "&:checked:after": {
      color: "black",
    },
  },
});

export const checkboxInputBaseColorPurple = style({
  selectors: {
    "&:before": {
      border: "solid 1px gray",
      backgroundColor: "#efefef",
      backgroundImage: `linear-gradient(to bottom, #efefef, silver)`,
    },
    "&:checked:before": {
      borderColor: vars.checkbox.base.color.purpleDark,
      backgroundColor: vars.checkbox.base.color.purpleLight,
      backgroundImage: `linear-gradient(to bottom, ${vars.checkbox.base.color.purpleLight}, ${vars.checkbox.base.color.purple})`,
    },
    "&:checked:after": {
      color: "black",
    },
  },
});
