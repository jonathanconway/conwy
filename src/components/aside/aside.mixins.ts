import { rems } from "@/framework/css";

import { rounded } from "../styling";
import { vars } from "../theme";

export const aside = {
  padding: rems(1),
  marginTop: rems(1),
  marginBottom: rems(1),
  backgroundColor: vars.aside.background.color,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: vars.aside.border.color,
  ...rounded.md,
};
