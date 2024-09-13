import { SVG_PROPS_COMMON, SvgProps } from "../icon-svg-props";

export function Close(props: SvgProps) {
  return (
    <svg {...SVG_PROPS_COMMON} {...props} viewBox="0 0 24 24">
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </svg>
  );
}
