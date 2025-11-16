import { FragmentGenTemplateParams } from "./fragment.params";

export const fragmentIndexGen = ({
  name,
  nameRootObject,
}: FragmentGenTemplateParams) =>
  `

import { Fragment } from "@/framework/client";

import Content from "./content.mdx";

export const ${nameRootObject}: Fragment = {
  content: <Content />,
};

export * from "./${name}";

`.trim();
