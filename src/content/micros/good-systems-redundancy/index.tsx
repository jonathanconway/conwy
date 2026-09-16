import { Micro } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const goodSystemsRedundancyMicro: Micro = {
  type: "micro",
  meta,
  content: <Content />,
};
