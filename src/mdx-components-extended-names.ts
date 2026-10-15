/**
 * Names of HTML elements, written as JSX in MDX content (e.g. `<small>`), which
 * should be rendered using components from `mdx-components-extended.tsx`.
 *
 * Kept in a plain `.ts` file with no imports so it can be loaded by
 * `next.config.ts`, which cannot resolve `.tsx` files or styled components.
 */
export const mdxComponentsExtendedNames = [
  "details",
  "div",
  "kbd",
  "small",
  "section",
  "summary",
] as const;

export type MdxComponentsExtendedName =
  (typeof mdxComponentsExtendedNames)[number];
