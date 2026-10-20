import { SVG_PROPS_COMMON, SvgProps } from "../icon-svg-props";

export function GMail(props: SvgProps) {
  return (
    <svg
      {...SVG_PROPS_COMMON}
      {...props}
      width="88"
      height="67"
      viewBox="0 0 88 67"
    >
      <path d="M6 66.0171H20V32.0171L0 17.0171V60.0171C0 63.3371 2.69 66.0171 6 66.0171Z" />
      <path d="M68 66.0171H82C85.32 66.0171 88 63.3271 88 60.0171V17.0171L68 32.0171" />
      <path d="M68 6.01702V32.017L88 17.017V9.01702C88 1.59702 79.53 -2.63298 73.6 1.81702" />
      <path d="M20 32.0171V6.01709L44 24.0171L68 6.01709V32.0171L44 50.0171" />
      <path d="M0 9.01702V17.017L20 32.017V6.01702L14.4 1.81702C8.46 -2.63298 0 1.59702 0 9.01702Z" />
    </svg>
  );
}
