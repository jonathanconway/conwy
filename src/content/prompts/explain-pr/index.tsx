import { ContentTypes, Prompt } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const explainPrPrompt: Prompt = {
  type: ContentTypes.Prompt,
  meta,
  content: <Content />,
};
