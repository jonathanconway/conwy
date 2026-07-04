import { Prompt } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const explainCiJobErrorPrompt: Prompt = {
  type: "prompt",
  meta,
  content: <Content />,
};
