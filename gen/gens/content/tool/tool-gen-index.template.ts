import { ToolGenTemplateParams } from "./tool-gen-template-params";

export const toolGenIndexTemplate = ({
  nameRootObject,
}: ToolGenTemplateParams) =>
  `

import { ContentTypes, Tool } from "@/framework/client";

import { meta } from "./meta";

export const ${nameRootObject}: Tool = {
  type: ContentTypes.Tool,
  meta,
};

`.trim();
