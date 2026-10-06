import { ContentTypes, Idea } from "@/framework/client";

import Blurb from "./blurb.mdx";
import Content from "./content.mdx";
import { meta } from "./meta";

export const globalGroceryPriceComparisonIdea: Idea = {
  type: ContentTypes.Idea,
  meta,
  blurb: <Blurb />,
  content: <Content />,
};
