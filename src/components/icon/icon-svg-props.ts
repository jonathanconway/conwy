import { ComponentPropsWithRef } from "react";

export type SvgProps = ComponentPropsWithRef<"svg"> & {
  readonly color?: string;
};

export const SVG_PROPS_COMMON: SvgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  ["aria-hidden"]: true,
  focusable: false,
};
