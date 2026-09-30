import { ContentTypes, Project } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const tailwindjsProject: Project = {
  meta,
  type: ContentTypes.Project,
  content: <Content />,
};
