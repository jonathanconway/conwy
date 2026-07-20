import { IllustrationStaticGenTemplateParams } from "./illustration.params";

export default ({ name }: IllustrationStaticGenTemplateParams) =>
  `

export * from "./${name}";

`.trim();
