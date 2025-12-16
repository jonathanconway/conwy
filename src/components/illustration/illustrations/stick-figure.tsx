/**
 * Illustration: A simple stick figure in a standing position with arms and legs extended outward.
 */
export function StickFigure() {
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
        }}
        d="m 5.0131131,6.6418488 1.77454,1.7745399"
      />
      <circle
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
        cx="5.0191569"
        cy="2.6030653"
        r="1.3275185"
      />
      <path
        style={{
          fill: "none",
          stroke: "#000000",
          strokeWidth: 0.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 0,
        }}
        d="M 5,4.0904215 V 6.6"
      />
      <path
        style={{
          fill: "none",
          stroke: "#000000",
          strokeWidth: 0.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 0,
        }}
        d="m 4.9677299,6.6418488 -1.77454,1.7745399"
      />
      <path
        style={{
          fill: "none",
          stroke: "#000000",
          strokeWidth: 0.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 0,
        }}
        d="m 4.9990673,4.8073164 -1.242178,1.242178"
      />
      <path
        style={{
          fill: "none",
          stroke: "#000000",
          strokeWidth: 0.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 0,
        }}
        d="m 5.0088763,4.8073164 1.242178,1.242178"
      />
    </>
  );
}
