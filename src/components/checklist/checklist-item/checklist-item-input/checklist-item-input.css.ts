import { style } from "@vanilla-extract/css";

export const checklistItemInput = style({
  position: "absolute",
  top: "0.35rem",
  left: "0.5em",
  height: "1rem",
  width: "1rem",
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
      border: "solid 1px gray",
      backgroundColor: "#efefef",
      backgroundImage: `linear-gradient(to bottom, #efefef, silver)`,
    },
    "&:checked:before": {
      borderColor: "darkgoldenrod",
      backgroundColor: "lightgoldenrodyellow",
      backgroundImage: `linear-gradient(to bottom, lightyellow, gold)`,
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
    "&:focus": {
      marginLeft: "-1.25rem",
      display: "inline-block",
      position: "relative",
      left: "-0.125rem",
      top: "0.225rem",
    },
  },
});
