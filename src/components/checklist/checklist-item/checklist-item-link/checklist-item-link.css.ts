import { globalStyle, style } from "@vanilla-extract/css";

import { checklistLi } from "../checklist-item.css";

export const checklistItemLink = style({
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
  opacity: 0.5,
});

globalStyle(
  [
    `${checklistLi}:hover ${checklistItemLink}`,
    `${checklistLi}:focus ${checklistItemLink}`,
    `${checklistLi}:active ${checklistItemLink}`,
  ].join(","),
  {
    opacity: 1,
  },
);
