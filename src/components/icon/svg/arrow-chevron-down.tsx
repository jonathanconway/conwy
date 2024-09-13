import { SVG_PROPS_COMMON, SvgProps } from "../icon-svg-props";

export function ArrowChevronDown(props: SvgProps) {
  return (
    <svg {...SVG_PROPS_COMMON} {...props} viewBox="0 0 24 24">
      <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
    </svg>
  );
}
