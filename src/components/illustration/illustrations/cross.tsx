/**
 * Illustration: An X mark or cross symbol formed by two diagonal lines intersecting.
 */
export function Cross() {
  return (
    <>
      <path
        style={{
          fill: "none",
          stroke: "#000000",
          strokeWidth: 0.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 0,
          strokeDasharray: "none",
          paintOrder: "fill markers stroke",
        }}
        d="M 2.8030933,7.3433447 7.2742471,2.6943204"
      />
      <path
        style={{
          fill: "none",
          stroke: "#000000",
          strokeWidth: 0.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 0,
          strokeDasharray: "none",
          paintOrder: "fill markers stroke",
        }}
        d="M 7.2742471,7.3433447 2.8030933,2.6943204"
      />
    </>
  );
}
