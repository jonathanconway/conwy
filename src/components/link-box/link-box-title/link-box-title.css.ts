import { globalStyle, style } from "@vanilla-extract/css";

import { vars } from ".././../theme";
import { linkBox } from "../link-box.css";

export const linkBoxTitle = style({
  fontWeight: "bold",
});

globalStyle(`${linkBox}:hover ${linkBoxTitle}`, {
  textDecoration: "underline",
  color: vars.linkBoxTitle.color,
});
