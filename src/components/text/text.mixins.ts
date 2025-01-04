import { vars } from "../theme";

import * as textSizeMixins from "./text-size/text-size.mixins";

export const body = {
  color: vars.text.body.color,
  fontWeight: 400,
  paddingTop: 0,
  ...textSizeMixins.sm,
};

export const label = {
  textTransform: "uppercase",
  fontWeight: 500,
  color: vars.label.color,
  ...textSizeMixins.xs,
};

export const paragraph = { ...body, paddingTop: "1rem" /* 16px */ };

export const small = {
  ...body,
  ...textSizeMixins.xs,
};

export const subTitle = {
  color: vars.text.body.color,
  ...textSizeMixins.xs,
  fontWeight: "bold",
};

export const summary = {
  ...textSizeMixins.sm,
};
