import { SVG_PROPS_COMMON, SvgProps } from "../icon-svg-props";

export function Close(props: SvgProps) {
  return (
    <svg
      {...SVG_PROPS_COMMON}
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_129_107)">
        <path
          d="M22 4.01429L19.9857 2L12 9.98571L4.01429 2L2 4.01429L9.98571 12L2 19.9857L4.01429 22L12 14.0143L19.9857 22L22 19.9857L14.0143 12L22 4.01429Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_129_107">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
