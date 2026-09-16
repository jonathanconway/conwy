import { Micro } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const sleemanTechDebtMicro: Micro = {
  type: "micro",
  meta,
  content: <Content />,
};
