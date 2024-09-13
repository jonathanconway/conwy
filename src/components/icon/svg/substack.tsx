import { SVG_PROPS_COMMON, SvgProps } from "../icon-svg-props";

export function Substack(props: SvgProps) {
  return (
    <svg {...SVG_PROPS_COMMON} {...props} viewBox="0 0 16 16">
      <path d="M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z" />
    </svg>
  );
}
