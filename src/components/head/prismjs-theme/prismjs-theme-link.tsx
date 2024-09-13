import { PRISM_JS_THEME_CSS_FILENAME_BY_THEME } from "./prismjs-theme-filenames";

export function PrismJSThemeLink() {
  return (
    // eslint-disable-next-line @next/next/no-css-tags
    <link
      rel="stylesheet"
      href={`/css/prismjs/themes/${PRISM_JS_THEME_CSS_FILENAME_BY_THEME.light}`}
      data-noprefix
    />
  );
}
