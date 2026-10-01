import { MicroGenTemplateParams } from "./micro-gen-template-params";

export const microGenIndexTemplate = ({
  nameRootObject,
}: MicroGenTemplateParams) =>
  `

import { ContentTypes, Micro } from "@/framework/client";

import { meta } from "./meta";
import Content from "./content.mdx"

export const ${nameRootObject}: Micro = {
  type: ContentTypes.Micro,
  meta,
  content: <Content />,
};

`.trim();
