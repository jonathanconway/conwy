import { ComponentGenTemplateParams } from "./component.params";

export default ({ name }: ComponentGenTemplateParams) =>
  `

export * from "./${name}";

`.trim();
