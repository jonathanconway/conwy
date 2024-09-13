import { SVG_PROPS_COMMON, SvgProps } from "../icon-svg-props";

export function CheckBox(props: SvgProps) {
  return (
    <svg {...SVG_PROPS_COMMON} {...props} viewBox="0 0 14 14">
      <circle cx="7" cy="7" r="6.5" fill="white" stroke="#D9D9D9" />
      <path
        d="M6.74846 11.0779C6.40348 11.7334 5.49047 11.7994 5.0548 11.2004L2.3958 7.54423C2.18861 7.25934 2.28682 6.85659 2.6019 6.69905V6.69905C2.83586 6.58207 3.11943 6.63933 3.28966 6.83794L5.00603 8.84036C5.47506 9.38757 6.35141 9.27396 6.6654 8.62523L9.19521 3.39841C9.31313 3.15477 9.55998 3 9.83066 3V3C10.3619 3 10.7028 3.56466 10.4554 4.03477L6.74846 11.0779Z"
        fill="url(#paint0_linear_1967_319)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1967_319"
          x1="6.5"
          y1="3"
          x2="6.5"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#44BC4F" />
          <stop offset="1" stopColor="#1F5624" />
        </linearGradient>
      </defs>
    </svg>
  );
}
