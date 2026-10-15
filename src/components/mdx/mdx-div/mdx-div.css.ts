import { style } from "@vanilla-extract/css";

import * as mixins from "./mdx-div.mixins";

export const div = style({
  ...mixins.div,
});
