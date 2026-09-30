import { ContentTypes, Project } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const testmaticProject: Project = {
  meta,
  type: ContentTypes.Project,
  content: <Content />,
};
