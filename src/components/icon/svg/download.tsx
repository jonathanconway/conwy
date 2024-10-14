import { SVG_PROPS_COMMON, SvgProps } from "../icon-svg-props";

export function Download(props: SvgProps) {
  return (
    <svg {...SVG_PROPS_COMMON} {...props} viewBox="0 0 24 24">
      <path d="M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"></path>
    </svg>
  );
}
