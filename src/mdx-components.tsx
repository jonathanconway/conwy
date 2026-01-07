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
  MdxKbd,
  MdxLI,
  MdxOL,
  MdxP,
  MdxPre,
  MdxTable,
  MdxUL,
} from "./components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: MdxA,
    blockquote: MdxBlockquote,
    code: MdxCode,
    h1: MdxH1,
    h2: MdxH2,
    h3: MdxH3,
    h4: MdxH4,
    img: MdxImg,
    kbd: MdxKbd, // todo: doesn't work for some reason, need to debug
    li: MdxLI,
    ol: MdxOL,
    p: MdxP,
    pre: MdxPre,
    ul: MdxUL,
    table: MdxTable,
    // todo: implement `wrapper: MdxWrapper,` while not breaking table of contents headings
    ...components,
  };
}
