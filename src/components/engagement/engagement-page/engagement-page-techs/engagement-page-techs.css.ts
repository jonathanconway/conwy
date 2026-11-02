import { style } from "@vanilla-extract/css";

import * as listMixins from "../../../list/list.mixins";

// todo: see if it can be done with just a simpel <List> component
export const itemTechsSubItems = style({
  ...listMixins.unorderedListNoBullets,
  display: "flex",
  gap: "0.0125rem 0.5rem",
  flexFlow: "wrap",
});
