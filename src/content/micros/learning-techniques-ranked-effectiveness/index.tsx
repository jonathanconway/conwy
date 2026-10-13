import { ContentTypes, Micro } from "@/framework";

import Content from "./content.mdx";
import { meta } from "./meta";

export const learningTechniquesRankedEffectivenessMicro: Micro = {
  type: ContentTypes.Micro,
  meta,
  content: <Content />,
};
