import { FunctionComponent } from "react";

import { MdxAside } from "./components/mdx/mdx-aside";
import { MdxDiv } from "./components/mdx/mdx-div";
import { MdxKbd } from "./components/mdx/mdx-kbd";
import { MdxSection } from "./components/mdx/mdx-section";
import { HasChildrenOptional } from "./framework/client";

export const mdxComponentsExtended: Record<
  string,
  FunctionComponent<HasChildrenOptional>
> = {
  aside: MdxAside,
  div: MdxDiv,
  kbd: MdxKbd,
  section: MdxSection,
};
