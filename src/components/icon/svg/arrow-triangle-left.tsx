import { SVG_PROPS_COMMON, SvgProps } from "../icon-svg-props";

export function ArrowTriangleLeft(props: SvgProps) {
  return (
    <svg {...SVG_PROPS_COMMON} {...props} viewBox="0 -960 960 960">
      <path d="M560-280 360-480l200-200v400Z" />
    </svg>
  );
}
