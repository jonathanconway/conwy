import { ContentTypes, Micro } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const modelsAreRealityBondsAreMicro: Micro = {
  type: ContentTypes.Micro,
  meta,
  content: <Content />,
};
