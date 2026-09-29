import { MicroGenTemplateParams } from "./micro-gen-template-params";

export const microGenIndexTemplate = ({
  nameRootObject,
}: MicroGenTemplateParams) =>
  `

import { Micro } from "@/framework/client";

import { meta } from "./meta";
import Content from "./content.mdx"

export const ${nameRootObject}: Micro = {
  type: "micro",
  meta,
  content: <Content />,
};

`.trim();
