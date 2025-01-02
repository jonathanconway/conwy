import { globalStyle, style } from "@vanilla-extract/css";

import { cn } from "@/framework/client";

import { vars } from ".././../theme";
import { linkBox } from "../link-box.css";

export const linkBoxTitle = cn(
  style({
    fontWeight: "bold",
  }),
);

globalStyle(`${linkBox}:hover ${linkBoxTitle}`, {
  textDecoration: "underline",
  color: vars.linkBoxTitle.color,
});
