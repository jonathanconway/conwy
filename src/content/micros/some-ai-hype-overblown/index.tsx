import { ContentTypes, Micro } from "@/framework";

import Content from "./content.mdx";
import { meta } from "./meta";

export const someAiHypeOverblownMicro: Micro = {
  type: ContentTypes.Micro,
  meta,
  content: <Content />,
};
