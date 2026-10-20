import * as textSizeMixins from "../../text/text-size/text-size.mixins";
import { vars } from ".././../theme";

export const linkBoxTitle = {
  fontWeight: "bold",
  color: vars.text.body.color,
};

export const linkBoxTitleMedium = {};

export const linkBoxTitleSmall = {
  ...textSizeMixins.linkBoxTitleSmall,
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
};

export const linkBoxTitleHover = {
  textDecoration: "underline",
  color: vars.linkBoxTitle.color,
};
