import { FunctionComponent } from "react";

import { MdxA } from "./components/mdx/mdx-a";
import { MdxBlockquote } from "./components/mdx/mdx-blockquote";
import { MdxCode } from "./components/mdx/mdx-code";
import { MdxH1 } from "./components/mdx/mdx-h1/mdx-h1";
import { MdxH2 } from "./components/mdx/mdx-h2/mdx-h2";
import { MdxH3 } from "./components/mdx/mdx-h3/mdx-h3";
import { MdxH4 } from "./components/mdx/mdx-h4/mdx-h4";
import { MdxImg } from "./components/mdx/mdx-img";
import { MdxInput } from "./components/mdx/mdx-input";
import { MdxLi } from "./components/mdx/mdx-li";
import { MdxOl } from "./components/mdx/mdx-ol";
import { MdxP } from "./components/mdx/mdx-p";
import { MdxPre } from "./components/mdx/mdx-pre";
import { MdxSection } from "./components/mdx/mdx-section";
import { MdxTable } from "./components/mdx/mdx-table";
import { MdxTBody } from "./components/mdx/mdx-tbody";
import { MdxTd } from "./components/mdx/mdx-td";
import { MdxTh } from "./components/mdx/mdx-th";
import { MdxTHead } from "./components/mdx/mdx-thead";
import { MdxTr } from "./components/mdx/mdx-tr";
import { MdxUl } from "./components/mdx/mdx-ul";
import { MdxWrapper } from "./components/mdx/mdx-wrapper";
import { HasChildrenOptional } from "./framework/client";

export const mdxComponents: Record<
  string,
  FunctionComponent<HasChildrenOptional>
> = {
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
  section: MdxSection,
  table: MdxTable,
  tbody: MdxTBody,
  td: MdxTd,
  th: MdxTh,
  thead: MdxTHead,
  tr: MdxTr,
  ul: MdxUl,
  wrapper: MdxWrapper,
} as const;
