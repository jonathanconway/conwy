import { withTooltip } from "../tooltip";

import { IllustrationProps } from "./illustration-props";
import { ILLUSTRATION_TYPE_SVGS } from "./illustration-types-svg";

export function Illustration_({
  illustration,
  color,
  size,
  ...restProps
}: IllustrationProps) {
  const IllustrationSvg = ILLUSTRATION_TYPE_SVGS[illustration];

  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 10 10"
      focusable="false"
      aria-hidden="true"
      {...restProps}
      // style={{
      //   border: "solid 1px red",
      //   display: "inline-block",
      //   width: "100px",
      //   height: "100px",
      // }}
    >
      <IllustrationSvg />;
    </svg>
  );
}

export const Illustration = withTooltip(Illustration_);
