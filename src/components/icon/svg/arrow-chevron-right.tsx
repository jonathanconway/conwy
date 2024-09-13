import { SVG_PROPS_COMMON, SvgProps } from "../icon-svg-props";

export function ArrowChevronRight(props: SvgProps) {
  return (
    <svg {...SVG_PROPS_COMMON} {...props} viewBox="0 -960 960 960">
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
    </svg>
  );
}
