import { Idea } from "@/framework/client";

import Blurb from "./blurb.mdx";
import Content from "./content.mdx";
import { meta } from "./meta";

export const inflationLinkedSavingsAccountIdea: Idea = {
  type: "idea",
  slug: "inflation-linked-savings-account",
  meta,
  blurb: <Blurb />,
  content: <Content />,
};
