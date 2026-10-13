import { FragmentGenTemplateParams } from "./fragment-gen-template-params";

export const fragmentGenIndexTemplate = ({
  nameRootObject,
}: FragmentGenTemplateParams) =>
  `

import { Fragment } from "@/framework";

import Content from "./content.mdx";

export const ${nameRootObject}: Fragment = {
  content: <Content />,
};

`.trim();
