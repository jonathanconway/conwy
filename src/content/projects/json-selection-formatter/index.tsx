import { ContentTypes, Project } from "@/framework";

import Content from "./content.mdx";
import { meta } from "./meta";

export const jsonSelectionFormatterProject: Project = {
  type: ContentTypes.Project,
  meta,
  content: <Content />,
};
