import { ProjectGenTemplateParams } from "./project-gen-template-params";

export const projectGenIndexTemplate = ({
  nameRootObject,
}: ProjectGenTemplateParams) =>
  `

import { ContentTypes, Project } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const ${nameRootObject}: Project = {
  type: ContentTypes.Project,
  meta,
  content: <Content />,
};

`.trim();
