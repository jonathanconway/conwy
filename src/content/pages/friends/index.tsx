import { ContentTypes, Page } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const friendsPage: Page = {
  type: ContentTypes.Page,
  meta,
  content: <Content />,
};
