import { ContentTypes, Prompt } from "@/framework";

import Content from "./content.mdx";
import { meta } from "./meta";

export const refactorCodeReadableDescriptionPrompt: Prompt = {
  type: ContentTypes.Prompt,
  meta,
  content: <Content />,
};
