import { ContentTypes, Prompt } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const answerQuestionFromMaterialWithPrompt: Prompt = {
  type: ContentTypes.Prompt,
  meta,
  content: <Content />,
};
