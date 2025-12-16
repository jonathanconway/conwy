import { ReactNode } from "react";

interface ConnectionTopRightToBottomLeftProps {
  readonly topRight: ReactNode;
  readonly bottomLeft: ReactNode;
}

/**
 * Illustration: A dashed curved connector line flowing from top-right to bottom-left, linking two elements together.
 */
export function ConnectionTopRightToBottomLeft({
  topRight,
  bottomLeft,
}: ConnectionTopRightToBottomLeftProps) {
  return (
    <>
      <g transform="translate(5.1 0.5) scale(0.5 0.5)">{topRight}</g>

      <path
        style={{
          fill: "none",
          stroke: "#000000",
          strokeWidth: 0.2,
          strokeLinejoin: "miter",
          strokeMiterlimit: 0,
          strokeDasharray: "0.2, 0.2",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          strokeLinecap: "butt",
          transform: "matrix(0.73291925,0,0,0.73269097,2.0524032,2.0779112)",
        }}
        d="M 7.6345791,4.5 V 7.0604779 A 0.66296382,0.66296382 135 0 1 6.9716153,7.7234417 H 4.5"
      />

      <g transform="translate(1 5) scale(0.4 0.4)">{bottomLeft}</g>
    </>
  );
}
