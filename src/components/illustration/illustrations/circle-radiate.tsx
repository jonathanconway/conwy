import { ReactNode } from "react";

interface CircleRadiateProps {
  readonly children?: ReactNode;
}

/**
 * Illustration: Concentric circles with varying stroke widths creating a radiating effect, with content centered inside.
 */
export function CircleRadiate({ children }: CircleRadiateProps) {
  return (
    <>
      <circle
        style={{
          strokeWidth: 0.15,
        }}
        fill="transparent"
        stroke="black"
        cx="50%"
        cy="50%"
        r="4.75"
      />
      <g transform="translate(1.5 1.7) scale(0.7 0.7)">{children}</g>

      <ellipse
        style={{
          strokeWidth: 0.25,
        }}
        fill="transparent"
        stroke="black"
        cx="50%"
        cy="50%"
        rx="4"
        ry="4"
      />
      <ellipse
        style={{
          strokeWidth: 0.35,
        }}
        fill="transparent"
        stroke="black"
        cx="5.0097013"
        cy="4.9764194"
        rx="3.25"
        ry="3.25"
      />
    </>
  );
}
