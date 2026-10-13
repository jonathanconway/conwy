import { globalStyle, style } from "@vanilla-extract/css";

import { link } from "../../link/link.css";
import { linkBox } from "../link-box.css";

import * as mixins from "./link-box-title.mixins";

export const linkBoxTitle = style(mixins.linkBoxTitle);

export const linkBoxTitleMedium = style(mixins.linkBoxTitleMedium);

export const linkBoxTitleSmall = style(mixins.linkBoxTitleSmall);

globalStyle(
  [`${link}:hover ${linkBoxTitle}`, `${linkBox}:hover ${linkBoxTitle}`].join(
    ",",
  ),
  mixins.linkBoxTitleHover,
);
