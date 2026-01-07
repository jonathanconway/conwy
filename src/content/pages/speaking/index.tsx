import { Page } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const speakingPage: Page = {
  type: "page",
  meta,
  content: <Content />,
};
