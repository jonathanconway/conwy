import type { MDXComponents } from "mdx/types";

import {
  MdxA,
  MdxAside,
  MdxBlockQuote,
  MdxCode,
  MdxH1,
  MdxH2,
  MdxH3,
  MdxImg,
  MdxLI,
  MdxOL,
  MdxP,
  MdxPre,
  MdxUL,
} from "./components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: MdxA,
    aside: MdxAside,
    blockquote: MdxBlockQuote,
    code: MdxCode,
    h1: MdxH1,
    h2: MdxH2,
    h3: MdxH3,
    img: MdxImg,
    li: MdxLI,
    ol: MdxOL,
    p: MdxP,
    pre: MdxPre,
    ul: MdxUL,
    ...components,
  };
}
