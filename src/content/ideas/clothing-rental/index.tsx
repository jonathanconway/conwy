import { Idea } from "@/framework/client";

import Blurb from "./blurb.mdx";
import Content from "./content.mdx";
import { meta } from "./meta";

export const clothingRentalIdea: Idea = {
  type: "idea",
  slug: "clothing-rental",
  meta,
  blurb: <Blurb />,
  content: <Content />,
};
