import { Idea } from "@/framework/client";

import Blurb from "./blurb.mdx";
import Content from "./content.mdx";
import { meta } from "./meta";

export const emergencyVirtualTriageIdea: Idea = {
  type: "idea",
  meta,
  blurb: <Blurb />,
  content: <Content />,
};
