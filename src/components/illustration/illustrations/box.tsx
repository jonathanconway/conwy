import { ReactNode } from "react";

interface BoxProps {
  readonly children?: ReactNode;
}
/**
 * Illustration: A simple square with a black stroke outline and transparent fill, with content centered inside.
 */
export function Box({ children }: BoxProps) {
  return (
    <>
      <rect
        cx="50%"
        cy="50%"
        width="7.5"
        height="7.5"
        x="1"
        y="1"
        fill="transparent"
        stroke="black"
        style={{
          strokeWidth: "0.5",
        }}
      />

      <g transform="translate(3 2.5) scale(0.4 0.4)">{children}</g>
    </>
  );
}
