import { FragmentGenTemplateParams } from "./fragment.params";

export const fragmentsIndexGen = ({ name }: FragmentGenTemplateParams) =>
  `

export * from "./${name}";

`.trim();
