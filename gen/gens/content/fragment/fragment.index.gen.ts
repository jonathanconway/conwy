import { FragmentGenTemplateParams } from "./fragment-gen-template-params";

export const fragmentGenIndexTemplate = ({
  name,
  nameRootObject,
}: FragmentGenTemplateParams) =>
  `

import { Fragment } from "@/framework/client";

import Content from "./content.mdx";

export const ${nameRootObject}: Fragment = {
  content: <Content />,
};

`.trim();
