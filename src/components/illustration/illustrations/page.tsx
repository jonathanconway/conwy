import { ReactNode } from "react";

interface PageProps {
  readonly children?: ReactNode;
}

/**
 * Illustration: A document or page icon with a folded top-right corner and optional content inside.
 */
export function Page({ children }: PageProps) {
  return (
    <>
      <path
        style={{
          fill: "none",
          stroke: "#000000",
          strokeWidth: 0.25,
          strokeLinejoin: "round",
          strokeMiterlimit: 0,
          paintOrder: "fill markers stroke",
        }}
        d="m 3.205098,2.1828035 2.6839411,0.01065 A 0.83073907,0.83073907 22.967337 0 1 6.4803706,2.4440613 L 7.1063732,3.085714 A 0.85554847,0.85554847 67.771102 0 1 7.349532,3.6806984 l 0.011364,3.9432735 A 0.52873556,0.52873556 134.91744 0 1 6.8321622,8.1542311 H 3.2324094 A 0.49581017,0.49581017 45 0 1 2.7365992,7.6584209 V 2.6494469 A 0.46664708,0.46664708 135.11368 0 1 3.205098,2.1828035 Z"
      />
      <path
        style={{
          fill: "none",
          stroke: "#000000",
          strokeWidth: 0.25,
          strokeLinejoin: "round",
          strokeMiterlimit: 0,
          paintOrder: "fill markers stroke",
        }}
        d="M 6.4803706,2.4440613 7.1063732,3.085714 A 0.14432932,0.14432932 113.10987 0 1 7.0017741,3.3308261 L 6.4669815,3.3260431 A 0.26253624,0.26253624 46.2647 0 1 6.2069559,3.0542772 l 0.018013,-0.5114705 a 0.14890833,0.14890833 158.86215 0 1 0.255402,-0.098745 z"
      />
      <g transform="translate(3 3.75) scale(0.4 0.4)">{children}</g>
    </>
  );
}
