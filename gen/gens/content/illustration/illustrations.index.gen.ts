import { IllustrationGenTemplateParams } from "./illustration.params";

export default ({ name }: IllustrationGenTemplateParams) =>
  `

export * from "./${name}";

`.trim();
