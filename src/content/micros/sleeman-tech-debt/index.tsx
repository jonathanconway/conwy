import { ContentTypes, Micro } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const sleemanTechDebtMicro: Micro = {
  type: ContentTypes.Micro,
  meta,
  content: <Content />,
};
