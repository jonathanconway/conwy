import { Work } from "@/framework";

import BlurbShort from "./blurb-short.mdx";
import Content from "./content.mdx";
import { meta } from "./meta";

export const revolutWork = {
  meta,
  content: <Content />,
  blurbShort: <BlurbShort />,
} as Work;
