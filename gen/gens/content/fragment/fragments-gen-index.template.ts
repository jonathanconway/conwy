import { FragmentGenTemplateParams } from "./fragment-gen-template-params";

export const fragmentsGenIndexTemplate = ({
  name,
}: FragmentGenTemplateParams) =>
  `

export * from "./${name}";

`.trim();
