import { ReactNode } from "react";

interface ComputerScreenProps {
  readonly display?: ReactNode;
}

/**
 * Illustration: A computer monitor or screen with a rectangular display and a base stand.
 */
export function ComputerScreen({ display }: ComputerScreenProps) {
  return (
    <>
      <rect
        style={{ fill: "none", stroke: "#000000", strokeWidth: "0.5" }}
        width="6"
        height="5"
        x="2"
        y="2"
        rx="1"
        ry="1"
      />
      <rect
        style={{ fill: "none", stroke: "#000000", strokeWidth: "0.5" }}
        width="3"
        height="1.5"
        x="3.5"
        y="7"
        rx="0.5"
        ry="0.5"
      />
      <g transform="translate(3 2.5) scale(0.4 0.4)">{display}</g>
    </>
  );
}
