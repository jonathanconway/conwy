import { FunctionComponent } from "react";

import { MdxDetails } from "./components/mdx/mdx-details";
import { MdxDiv } from "./components/mdx/mdx-div";
import { MdxKbd } from "./components/mdx/mdx-kbd";
import { MdxSection } from "./components/mdx/mdx-section";
import { MdxSmall } from "./components/mdx/mdx-small";
import { MdxSummary } from "./components/mdx/mdx-summary";
import { MdxTable } from "./components/mdx/mdx-table";
import { MdxTBody } from "./components/mdx/mdx-tbody";
import { MdxTd } from "./components/mdx/mdx-td";
import { MdxTh } from "./components/mdx/mdx-th";
import { MdxTHead } from "./components/mdx/mdx-thead";
import { MdxTr } from "./components/mdx/mdx-tr";
import { HasChildrenOptional } from "./framework";
import { MdxComponentsExtendedName } from "./mdx-components-extended-names";

/**
 * Components for HTML elements written as JSX in MDX content (e.g. `<small>`).
 */
export const mdxComponentsExtended: Record<
  MdxComponentsExtendedName,
  FunctionComponent<HasChildrenOptional>
> = {
  details: MdxDetails,
  div: MdxDiv,
  kbd: MdxKbd,
  small: MdxSmall,
  section: MdxSection,
  summary: MdxSummary,

  table: MdxTable,
  tr: MdxTr,
  thead: MdxTHead,
  th: MdxTh,
  tbody: MdxTBody,
  td: MdxTd,
};
