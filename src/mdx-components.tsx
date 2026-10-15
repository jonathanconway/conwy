import type { MDXComponents } from "mdx/types";

import {
  MdxA,
  MdxBlockquote,
  MdxCode,
  MdxH1,
  MdxH2,
  MdxH3,
  MdxH4,
  MdxImg,
  MdxInput,
  MdxLi,
  MdxOl,
  MdxP,
  MdxPre,
  MdxSection,
  MdxSmall,
  MdxTBody,
  MdxTHead,
  MdxTable,
  MdxTd,
  MdxTh,
  MdxTr,
  MdxUl,
  MdxWrapper,
} from "./components";
import { capitaliseObjectKeys } from "./framework";
import { mdxComponentsExtended } from "./mdx-components-extended";

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    // Elements supported by MDX out of the box
    a: MdxA,
    blockquote: MdxBlockquote,
    code: MdxCode,
    h1: MdxH1,
    h2: MdxH2,
    h3: MdxH3,
    h4: MdxH4,
    img: MdxImg,
    input: MdxInput,
    li: MdxLi,
    ol: MdxOl,
    p: MdxP,
    pre: MdxPre,
    ul: MdxUl,
    section: MdxSection,
    small: MdxSmall,
    table: MdxTable,
    tbody: MdxTBody,
    thead: MdxTHead,
    tr: MdxTr,
    th: MdxTh,
    td: MdxTd,
    wrapper: MdxWrapper,

    // Elements *not* supported by MDX out of the box
    // Keys are capitalised because `remark-mdx-jsx-components.mjs` renames those
    // JSX elements (e.g. `<small>` → `<Small>`), so MDX looks them up here.
    ...capitaliseObjectKeys(mdxComponentsExtended),

    ...components,
  };
}
