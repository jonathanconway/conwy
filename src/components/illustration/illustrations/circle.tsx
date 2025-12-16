import { ReactNode } from "react";

interface CircleProps {
  readonly children?: ReactNode;
}

/**
 * Illustration: A simple circle with a black stroke outline and transparent fill, with content centered inside.
 */
export function Circle({ children }: CircleProps) {
  return (
    <>
      <circle
        cx="50%"
        cy="50%"
        r="4.75"
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
