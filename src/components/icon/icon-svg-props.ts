import { ComponentPropsWithRef } from "react";

export type SvgProps = ComponentPropsWithRef<"svg">;

export const SVG_PROPS_COMMON: SvgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  ["aria-hidden"]: true,
  focusable: false,
};
