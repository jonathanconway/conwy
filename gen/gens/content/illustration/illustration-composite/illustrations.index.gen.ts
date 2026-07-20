import { IllustrationCompositeGenTemplateParams } from "./illustration.params";

export default ({ name }: IllustrationCompositeGenTemplateParams) =>
  `

export * from "./${name}";

`.trim();
