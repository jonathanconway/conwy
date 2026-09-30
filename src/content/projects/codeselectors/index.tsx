import { ContentTypes, Project } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const codeselectorsProject: Project = {
  meta,
  type: ContentTypes.Project,
  content: <Content />,
};
