import { SVG_PROPS_COMMON, SvgProps } from "../icon-svg-props";

export function Hamburger(props: SvgProps) {
  return (
    <svg {...SVG_PROPS_COMMON} {...props} viewBox="0 -960 960 960">
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  );
}
