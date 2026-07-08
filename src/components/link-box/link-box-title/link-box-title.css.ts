import { globalStyle, style } from "@vanilla-extract/css";

import { link } from "../../link/link.css";
import * as textSizeMixins from "../../text/text-size/text-size.mixins";
import { vars } from ".././../theme";
import { linkBox, linkBoxSmall } from "../link-box.css";

export const linkBoxTitle = style({
  fontWeight: "bold",
  color: vars.text.body.color,
});

export const linkBoxTitleMedium = style({});

export const linkBoxTitleSmall = style({
  ...textSizeMixins.sm,
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

globalStyle(
  [`${link}:hover ${linkBoxTitle}`, `${linkBox}:hover ${linkBoxTitle}`].join(
    ",",
  ),
  {
    textDecoration: "underline",
    color: vars.linkBoxTitle.color,
  },
);
