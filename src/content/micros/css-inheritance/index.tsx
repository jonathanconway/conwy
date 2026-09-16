import { Micro } from "@/framework/client";

import { meta } from "./meta";
import Content from "./content.mdx"

export const cssInheritanceMicro: Micro = {
  type: "micro",
  meta,
  content: <Content />,
};
