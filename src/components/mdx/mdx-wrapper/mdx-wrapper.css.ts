import { style } from "@vanilla-extract/css";

/**
 * This empty `mdx` class, which serves as a base on which to style nested `mdx-*` elements.
 * This is necessary because Mdx does not use <Mdx * /> elements for nested elements.
 *
 * For example, `<h3>` and `<p>` nested inside `<aside>` will be rendered directly as HTML, not using `<MdxH3 />` or `<MdxP />`.
 *
 * Markdown:
 * ```
 * > ### Foo
 * >
 * > bar
 * ```
 *
 * HTML:
 * ```
 * <blockquote>
 *   <h3>Foo</h3>  <!-- This will not be rendered using `<MdxH3 />` -->
 *   <p>Bar</p>    <!-- This will not be rendered using `<MdxP />` -->
 * </blockquote>
 * ```
 */
export const mdx = style({});
