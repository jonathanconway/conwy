import { ReactNode } from "react";

interface KeyboardKeyProps {
  children?: ReactNode;
}

/**
 * Illustration: A 3D keyboard key with rounded corners, shadowing lines, and an optional icon or content inside.
 */
export function KeyboardKey({ children }: KeyboardKeyProps) {
  return (
    <>
      <rect
        style={{
          strokeWidth: 0.377953,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        fill="none"
        stroke="black"
        width="8"
        height="8"
        x="1"
        y="1"
        rx="0.5"
        ry="0.5"
      />
      <rect
        style={{
          strokeWidth: 0.3,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        fill="none"
        stroke="black"
        width="6"
        height="6"
        x="2"
        y="2"
        rx="0.3"
        ry="0.3"
      />
      <path
        style={{
          strokeWidth: 0.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        fill="none"
        stroke="black"
        d="M 2,2 C 1.4,1.4 1.4,1.4 1.4,1.4"
      />
      <path
        style={{
          strokeWidth: 0.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        fill="none"
        stroke="black"
        d="M 8,2 C 8,2 8.7,1.4 8.7,1.4"
      />
      <path
        style={{
          strokeWidth: 0.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        fill="none"
        stroke="black"
        d="M 2,8 C 1.4,8.7 1.4,8.7 1.4,8.7"
      />
      <path
        style={{
          strokeWidth: 0.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        fill="none"
        stroke="black"
        d="M 8,8 C 8.7,8.7 8.7,8.7 8.7,8.7"
      />

      <g transform="translate(2.5 2.5) scale(0.5 0.5)">{children}</g>
    </>
  );
}
