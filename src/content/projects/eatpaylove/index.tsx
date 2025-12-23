import { Project } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const eatpayloveProject: Project = {
  meta,
  type: "project",
  content: <Content />,
};
