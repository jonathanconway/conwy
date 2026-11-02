import { checkIsNotNil } from "@/framework";

import { Breakpoint } from "../styling";

import * as styles from "./responsive.css";

export function getResponsiveHidden(
  responsiveVisibility?: Partial<Record<Breakpoint, boolean>>,
) {
  return [
    responsiveVisibility?.sm === false ? styles.hiddenSm : undefined,
    responsiveVisibility?.md === false ? styles.hiddenMd : undefined,
  ]
    .filter(checkIsNotNil)
    .join(" ");
}
