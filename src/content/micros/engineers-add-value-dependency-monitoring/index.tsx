import { ContentTypes, Micro } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const engineersAddValueDependencyMonitoringMicro: Micro = {
  type: ContentTypes.Micro,
  meta,
  content: <Content />,
};
