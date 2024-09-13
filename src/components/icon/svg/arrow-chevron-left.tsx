import { SVG_PROPS_COMMON, SvgProps } from "../icon-svg-props";

export function ArrowChevronLeft(props: SvgProps) {
  return (
    <svg {...SVG_PROPS_COMMON} {...props} viewBox="0 -960 960 960">
      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
    </svg>
  );
}
