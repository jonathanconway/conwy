import { SVG_PROPS_COMMON, SvgProps } from "../icon-svg-props";

export function ArrowChevronUp(props: SvgProps) {
  return (
    <svg {...SVG_PROPS_COMMON} {...props} viewBox="0 0 24 24">
      <path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
    </svg>
  );
}
