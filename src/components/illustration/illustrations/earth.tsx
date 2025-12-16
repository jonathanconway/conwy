import { Circle } from "./circle";

/**
 * Illustration: A globe showing Earth with continents and landmasses drawn as curved paths on a circle.
 */
export function Earth() {
  return (
    <>
      <Circle />
      <path
        style={{
          fill: "none",
          stroke: "#000000",
          strokeWidth: 0.5,
          strokeMiterlimit: 0,
        }}
        d="m 6.4, 0.4 c 0, 0 -2.5, 0.3 -2.2, 2.5 0.3, 3.1 -3.8, 0.4 -3.8, 0.4"
      />
      <path
        style={{
          fill: "none",
          stroke: "black",
          strokeWidth: 0.5,
          strokeMiterlimit: 0,
        }}
        d="m 9.5,3.6 c 0,0 -0.4,0.6 -1.6,0.3 C 6.6,3.5 8.4,6.2 6.2,6.9 5.6,7.1 4.3,7.1 5.6,9.7 6.9,9.8 8.1"
      />
      <path
        style={{
          fill: "none",
          stroke: "#000000",
          strokeWidth: 0.5,
          strokeMiterlimit: 0,
        }}
        d="m 0.4,5.6 c 0,0 1.8,-0.5 1.8,0.6 -0.0,0.9 0.8,0.4 0.9,1.1 0.0,0.6 -0.1,1.7 -0.1,1.9"
      />
    </>
  );
}
